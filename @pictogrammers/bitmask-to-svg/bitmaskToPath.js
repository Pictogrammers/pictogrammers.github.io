export function toIndex(x, y, width) {
    return y * width + x;
}
/**
 * Convert a 2d array to SVG paths.
 * @param data
 * @param options
 * @returns array of path strings, one per include grouping
 */
export default function bitmaskToPath(data, options = {}) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    let bitmask, width, height, scale = 1, offsetX = 0, offsetY = 0, include = [[1]];
    if (options.width) {
        bitmask = data;
        width = options.width;
        height = bitmask.length / width;
        if (height % 1 !== 0) {
            throw new Error(`Invalid bitmask width. ${height} = ${bitmask.length} / ${width}`);
        }
    }
    else if (data[0] instanceof Array) {
        bitmask = data.flat();
        width = data[0].length;
        height = data.length;
    }
    else {
        throw new Error(`options.width is required for 1 dimensional array.`);
    }
    if (options.scale) {
        scale = options.scale;
    }
    if (options.offsetX) {
        offsetX = options.offsetX;
    }
    if (options.offsetY) {
        offsetY = options.offsetY;
    }
    if (options.include) {
        include = options.include;
    }
    const groupCount = include.length;
    const newWidth = width + 2;
    const newHeight = height + 2;
    function BMXYToIndex(x, y) {
        return (y + 1) * newWidth + (x + 1);
    }
    // Build value → group bitmask lookup
    const valueToGroupBits = new Map();
    for (let g = 0; g < groupCount; ++g) {
        for (const val of include[g]) {
            valueToGroupBits.set(val, ((_a = valueToGroupBits.get(val)) !== null && _a !== void 0 ? _a : 0) | (1 << g));
        }
    }
    // Single pass: build padded cellMask where each cell stores a bitfield of group membership
    const cellMask = new Int32Array(newWidth * newHeight);
    for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x) {
            const bits = (_b = valueToGroupBits.get(bitmask[toIndex(x, y, width)])) !== null && _b !== void 0 ? _b : 0;
            if (bits) {
                cellMask[BMXYToIndex(x, y)] = bits;
            }
        }
    }
    // Allocate per-group edge structures upfront
    const edgeXCount = width * (height + 1);
    const edgeYCount = (width + 1) * height;
    const edgeCount = edgeXCount + edgeYCount;
    function EdgeXIndex(x, y) {
        return y * width + x;
    }
    function EdgeYIndex(x, y) {
        return edgeXCount + y * (width + 1) + x;
    }
    // Lazy edge pool: only allocate Edge objects for actual boundary edges.
    // Indexed as g * edgeCount + edgeIndex to avoid per-group arrays.
    const edgePool = new Array(edgeCount * groupCount);
    function getEdge(g, idx) {
        const key = g * edgeCount + idx;
        let e = edgePool[key];
        if (!e) {
            e = { x: 0, y: 0 };
            edgePool[key] = e;
        }
        return e;
    }
    const allContours = [];
    for (let g = 0; g < groupCount; ++g) {
        allContours.push(new Set());
    }
    // Helper: check group membership via cellMask bit
    function isSet(x, y, bit) {
        return (cellMask[BMXYToIndex(x, y)] & bit) !== 0;
    }
    function SetEdge(contours, edge, x, y) {
        edge.x = x;
        edge.y = y;
        contours.add(edge);
    }
    function UnionGroup(contours, edge) {
        for (var itr = edge.next; itr !== undefined && itr !== edge; itr = itr.next) {
            contours.delete(itr);
        }
        if (itr !== undefined) {
            contours.add(edge);
        }
    }
    // Single pass edge detection for all groups
    for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x) {
            const myMask = cellMask[BMXYToIndex(x, y)];
            if (myMask === 0)
                continue;
            for (let g = 0; g < groupCount; ++g) {
                const groupBit = 1 << g;
                if ((myMask & groupBit) === 0)
                    continue;
                const contours = allContours[g];
                if (!isSet(x - 1, y, groupBit)) {
                    const edge = getEdge(g, EdgeYIndex(x, y));
                    SetEdge(contours, edge, x, y + 1);
                    if (isSet(x - 1, y - 1, groupBit)) {
                        edge.next = getEdge(g, EdgeXIndex(x - 1, y));
                    }
                    else if (isSet(x, y - 1, groupBit)) {
                        edge.next = getEdge(g, EdgeYIndex(x, y - 1));
                    }
                    else {
                        edge.next = getEdge(g, EdgeXIndex(x, y));
                    }
                    UnionGroup(contours, edge);
                }
                if (!isSet(x + 1, y, groupBit)) {
                    const edge = getEdge(g, EdgeYIndex(x + 1, y));
                    SetEdge(contours, edge, x + 1, y);
                    if (isSet(x + 1, y + 1, groupBit)) {
                        edge.next = getEdge(g, EdgeXIndex(x + 1, y + 1));
                    }
                    else if (isSet(x, y + 1, groupBit)) {
                        edge.next = getEdge(g, EdgeYIndex(x + 1, y + 1));
                    }
                    else {
                        edge.next = getEdge(g, EdgeXIndex(x, y + 1));
                    }
                    UnionGroup(contours, edge);
                }
                if (!isSet(x, y - 1, groupBit)) {
                    const edge = getEdge(g, EdgeXIndex(x, y));
                    SetEdge(contours, edge, x, y);
                    if (isSet(x + 1, y - 1, groupBit)) {
                        edge.next = getEdge(g, EdgeYIndex(x + 1, y - 1));
                    }
                    else if (isSet(x + 1, y, groupBit)) {
                        edge.next = getEdge(g, EdgeXIndex(x + 1, y));
                    }
                    else {
                        edge.next = getEdge(g, EdgeYIndex(x + 1, y));
                    }
                    UnionGroup(contours, edge);
                }
                if (!isSet(x, y + 1, groupBit)) {
                    const edge = getEdge(g, EdgeXIndex(x, y + 1));
                    SetEdge(contours, edge, x + 1, y + 1);
                    if (isSet(x - 1, y + 1, groupBit)) {
                        edge.next = getEdge(g, EdgeYIndex(x, y + 1));
                    }
                    else if (isSet(x - 1, y, groupBit)) {
                        edge.next = getEdge(g, EdgeXIndex(x - 1, y + 1));
                    }
                    else {
                        edge.next = getEdge(g, EdgeYIndex(x, y));
                    }
                    UnionGroup(contours, edge);
                }
            }
        }
    }
    // Per-group post-processing: type assignment, compression, path building
    const paths = [];
    for (let g = 0; g < groupCount; ++g) {
        const contours = allContours[g];
        for (const edge of contours) {
            let itr = edge;
            do {
                if (itr.next) {
                    itr.next.type = itr.x == ((_c = itr === null || itr === void 0 ? void 0 : itr.next) === null || _c === void 0 ? void 0 : _c.x) ? 'V' : 'H';
                    itr = itr.next;
                }
            } while (itr !== edge);
        }
        for (let edge of contours) {
            let itr = edge;
            do {
                if (itr.type != ((_d = itr.next) === null || _d === void 0 ? void 0 : _d.type)) {
                    while (((_e = itr.next) === null || _e === void 0 ? void 0 : _e.type) == ((_g = (_f = itr.next) === null || _f === void 0 ? void 0 : _f.next) === null || _g === void 0 ? void 0 : _g.type)) {
                        if (itr.next === edge) {
                            contours.delete(edge);
                            edge = itr.next.next;
                            contours.add(edge);
                        }
                        itr.next = (_h = itr.next) === null || _h === void 0 ? void 0 : _h.next;
                    }
                }
                itr = itr.next;
            } while (itr !== edge);
        }
        const parts = [];
        for (const edge of contours) {
            let s = `M${edge.x * scale},${edge.y * scale}`;
            for (var itr = edge.next; itr != edge; itr = itr === null || itr === void 0 ? void 0 : itr.next) {
                if ((itr === null || itr === void 0 ? void 0 : itr.type) == 'H') {
                    s += `H${((itr === null || itr === void 0 ? void 0 : itr.x) * scale) + offsetX}`;
                }
                else if ((itr === null || itr === void 0 ? void 0 : itr.type) == 'V') {
                    s += `V${((itr === null || itr === void 0 ? void 0 : itr.y) * scale) + offsetY}`;
                }
            }
            parts.push(s + 'Z');
        }
        paths.push(parts.join(''));
    }
    return paths;
}
