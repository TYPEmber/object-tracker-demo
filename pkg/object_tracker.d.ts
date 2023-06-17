/* tslint:disable */
/* eslint-disable */
/**
* @param {string} name
*/
export function greet(name: string): void;
/**
* @returns {any}
*/
export function get_memory(): any;
/**
*/
export class Prediction {
  free(): void;
/**
*/
  psr: number;
/**
*/
  x: number;
/**
*/
  y: number;
}
/**
*/
export class Tracker {
  free(): void;
/**
* @param {number} width
* @param {number} height
* @param {string} cfg
*/
  constructor(width: number, height: number, cfg: string);
/**
* @param {number} x
* @param {number} y
* @param {number} width
* @param {number} height
* @param {Uint8Array} frame
* @returns {boolean}
*/
  new_trace(x: number, y: number, width: number, height: number, frame: Uint8Array): boolean;
/**
* @param {number} width
* @param {number} height
* @returns {number}
*/
  get_buffer(width: number, height: number): number;
/**
* @param {number} width
* @param {number} height
* @param {Uint8Array} frame
* @returns {Prediction}
*/
  track(width: number, height: number, frame: Uint8Array): Prediction;
/**
* @param {number} width
* @param {number} height
* @returns {Prediction}
*/
  track_1(width: number, height: number): Prediction;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly greet: (a: number, b: number) => void;
  readonly __wbg_tracker_free: (a: number) => void;
  readonly __wbg_prediction_free: (a: number) => void;
  readonly __wbg_get_prediction_x: (a: number) => number;
  readonly __wbg_set_prediction_x: (a: number, b: number) => void;
  readonly __wbg_get_prediction_y: (a: number) => number;
  readonly __wbg_set_prediction_y: (a: number, b: number) => void;
  readonly __wbg_get_prediction_psr: (a: number) => number;
  readonly __wbg_set_prediction_psr: (a: number, b: number) => void;
  readonly get_memory: () => number;
  readonly tracker_new: (a: number, b: number, c: number, d: number) => number;
  readonly tracker_new_trace: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly tracker_get_buffer: (a: number, b: number, c: number) => number;
  readonly tracker_track: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly tracker_track_1: (a: number, b: number, c: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
