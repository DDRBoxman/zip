import { BlobSlice } from "./BlobSlice";
export declare class ZipEntry {
    private readonly blob_slice;
    extra?: Uint8Array;
    comment?: Uint8Array;
    internal_file_attr: number;
    external_file_attr: number;
    bit_flag: number;
    modified: Date;
    readonly crc: number;
    readonly uncompressed_size: number;
    readonly compression: number;
    get is_compressed(): boolean;
    constructor(blob: BlobSlice, compression_type: number, size: number, crc: number);
    clone(): ZipEntry;
    get size(): number;
    get compressed_size(): number;
    private decompress;
    generate_local(filename: string): ArrayBuffer;
    generate_cd(filename: string, local_position: number): ArrayBuffer;
    generate_data_descriptor(): ArrayBuffer;
    get_backing_object(): Blob;
    get_blob(): Promise<Blob>;
    get_array_buffer(): Promise<ArrayBuffer>;
    get_string(): Promise<string>;
}
