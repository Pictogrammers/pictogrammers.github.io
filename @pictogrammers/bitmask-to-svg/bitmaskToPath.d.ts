interface Options {
    width?: number;
    height?: number;
    scale?: number;
    offsetX?: number;
    offsetY?: number;
}
export declare function toIndex(x: number, y: number, width: number): number;
export default function bitmaskToPath(data: number[] | number[][], options?: Options): string;
export {};
