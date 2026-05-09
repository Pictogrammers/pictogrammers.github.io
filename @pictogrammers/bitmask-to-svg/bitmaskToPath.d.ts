interface Options {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    scale?: number;
    offsetX?: number;
    offsetY?: number;
    include?: number[][];
}
export declare function toIndex(x: number, y: number, width: number): number;
/**
 * Convert a 2d array to SVG paths.
 * @param data
 * @param options
 * @returns array of path strings, one per include grouping
 */
export default function bitmaskToPath(data: number[] | number[][], options?: Options): string[];
export {};
