type FunctionType = (input: Blob) => Promise<Blob>;
export declare function set_compression_function(fn: FunctionType): void;
export declare function set_decompression_function(fn: FunctionType): void;
export declare function compress(input: Blob): Promise<Blob>;
export declare function decompress(input: Blob): Promise<Blob>;
export {};
