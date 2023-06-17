let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}


const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}
/**
* @param {string} name
*/
export function greet(name) {
    const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.greet(ptr0, len0);
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
/**
* @returns {any}
*/
export function get_memory() {
    const ret = wasm.get_memory();
    return takeObject(ret);
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
*/
export class Prediction {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Prediction.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_prediction_free(ptr);
    }
    /**
    * @returns {number}
    */
    get x() {
        const ret = wasm.__wbg_get_prediction_x(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set x(arg0) {
        wasm.__wbg_set_prediction_x(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get y() {
        const ret = wasm.__wbg_get_prediction_y(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set y(arg0) {
        wasm.__wbg_set_prediction_y(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get psr() {
        const ret = wasm.__wbg_get_prediction_psr(this.__wbg_ptr);
        return ret;
    }
    /**
    * @param {number} arg0
    */
    set psr(arg0) {
        wasm.__wbg_set_prediction_psr(this.__wbg_ptr, arg0);
    }
}
/**
*/
export class Tracker {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Tracker.prototype);
        obj.__wbg_ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_tracker_free(ptr);
    }
    /**
    * @param {number} width
    * @param {number} height
    * @param {string} cfg
    */
    constructor(width, height, cfg) {
        const ptr0 = passStringToWasm0(cfg, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.tracker_new(width, height, ptr0, len0);
        return Tracker.__wrap(ret);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} width
    * @param {number} height
    * @param {Uint8Array} frame
    * @returns {boolean}
    */
    new_trace(x, y, width, height, frame) {
        const ptr0 = passArray8ToWasm0(frame, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.tracker_new_trace(this.__wbg_ptr, x, y, width, height, ptr0, len0);
        return ret !== 0;
    }
    /**
    * @param {number} width
    * @param {number} height
    * @returns {number}
    */
    get_buffer(width, height) {
        const ret = wasm.tracker_get_buffer(this.__wbg_ptr, width, height);
        return ret;
    }
    /**
    * @param {number} width
    * @param {number} height
    * @param {Uint8Array} frame
    * @returns {Prediction}
    */
    track(width, height, frame) {
        const ptr0 = passArray8ToWasm0(frame, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.tracker_track(this.__wbg_ptr, width, height, ptr0, len0);
        return Prediction.__wrap(ret);
    }
    /**
    * @param {number} width
    * @param {number} height
    * @returns {Prediction}
    */
    track_1(width, height) {
        const ret = wasm.tracker_track_1(this.__wbg_ptr, width, height);
        return Prediction.__wrap(ret);
    }
}

export function __wbg_alert_72b97a22ffa88cd8(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

export function __wbg_log_688b93418e3ea27e(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
};

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

export function __wbindgen_memory() {
    const ret = wasm.memory;
    return addHeapObject(ret);
};

