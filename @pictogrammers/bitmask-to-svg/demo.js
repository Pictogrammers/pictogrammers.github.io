import bitmaskToPath, { toIndex } from './bitmaskToPath.js';
let colorIndex = 1, $canvas, context, $path;
let group = [[1], [2], [3], [4]];
const width = 10;
const height = 10;
const canvasScale = 10;
let scale = 10;
const palettes = new Map([
    ['#224939', 'Darkest Green'],
    ['#36774A', 'Dark Green'],
    ['#4DA350', 'Light Green'],
    ['#89C177', 'Lightest Green']
]);
const colors = Array.from(palettes.keys());
// Array(width * height).fill(0);
const bitmask = [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 1, 0, 0, 0, 1, 4, 3, 3, 3, 3, 3, 1, 0, 1, 4, 3, 1, 3, 3, 1, 3, 3, 1, 1, 4, 3, 1, 3, 3, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 1, 1, 1, 1, 3, 2, 1, 0, 1, 3, 3, 3, 3, 3, 2, 1, 0, 0, 0, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0];
function random() {
    for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x) {
            bitmask[toIndex(x, y, width)] = Math.random() < 0.3 ? 1 : 0;
        }
    }
}
function update() {
    // Update Canvas
    context.clearRect(0, 0, $canvas.width, $canvas.height);
    for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x) {
            const color = bitmask[toIndex(x, y, width)];
            if (color !== 0) {
                context.fillStyle = colors[color - 1];
                context.fillRect(x * canvasScale, y * canvasScale, canvasScale, canvasScale);
            }
        }
    }
    // Get Path
    const path = bitmaskToPath(bitmask, { width, scale, include: group });
    $path.setAttribute('d', path[0]);
    const $pathVal = document.querySelector('[data-path]');
    $pathVal.innerText = path.join("\n");
    const $svg = document.getElementById('preview');
    $svg === null || $svg === void 0 ? void 0 : $svg.setAttribute('viewBox', `0 0 ${width * scale} ${height * scale}`);
    // Write to table cells
    const $data = document.getElementById('data');
    const data = ['[', '\n'];
    for (let y = 0; y < height; ++y) {
        data.push('  ', '[');
        for (let x = 0; x < width; ++x) {
            data.push(`${bitmask[toIndex(x, y, width)]}`);
            if (x !== width - 1) {
                data.push(',', ' ');
            }
        }
        data.push(']', ',', '\n');
    }
    data.push(']', '\n');
    if ($data) {
        $data.textContent = data.join('');
    }
}
window.addEventListener('load', () => {
    const $palette = document.getElementById('palette');
    const $grid = document.getElementById('grid');
    $grid === null || $grid === void 0 ? void 0 : $grid.style.setProperty('--grid-size', `${scale - 1}`);
    const $svg = document.getElementById('preview');
    $canvas = document.getElementsByTagName('canvas')[0];
    context = $canvas.getContext('2d');
    $canvas.width = width * scale;
    $canvas.height = height * scale;
    if ($svg) {
        $path = $svg.querySelector('path');
        $svg.setAttribute('viewBox', `0 0 ${width * scale} ${height * scale}`);
        $svg.style.width = `${width * scale}px`;
        $svg.style.height = `${height * scale}px`;
    }
    const $group = document.getElementById('group');
    $group === null || $group === void 0 ? void 0 : $group.addEventListener('change', (e) => {
        group = JSON.parse(e.target.value);
        update();
    });
    const $scale = document.getElementById('scale');
    $scale === null || $scale === void 0 ? void 0 : $scale.addEventListener('change', (e) => {
        scale = parseInt(e.target.value, 10);
        update();
    });
    update();
    $canvas.addEventListener('pointerdown', (e) => {
        let { x: pX, y: pY, target } = e;
        let { x: eX, y: eY } = target.getBoundingClientRect();
        let x = Math.trunc((pX - eX) / scale), y = Math.trunc((pY - eY) / scale);
        bitmask[toIndex(x, y, width)] = bitmask[toIndex(x, y, width)] === 0 ? colorIndex : 0;
        update();
    });
    let index = 1;
    const buttons = [];
    palettes.forEach((label, color) => {
        const $button = document.createElement('button');
        $button.style.backgroundColor = color;
        $button.title = label;
        if (index === 1) {
            $button.classList.toggle('selected', true);
        }
        $button.dataset.color = `${index++}`;
        $button.addEventListener('click', (e) => {
            var _a;
            colorIndex = parseInt((_a = e.target.dataset.color) !== null && _a !== void 0 ? _a : '0', 10);
            buttons.forEach(($btn) => {
                $btn.classList.toggle('selected', false);
            });
            $button.classList.toggle('selected', true);
        });
        buttons.push($button);
        $palette === null || $palette === void 0 ? void 0 : $palette.appendChild($button);
    });
});
