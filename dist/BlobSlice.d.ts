export declare class BlobSlice {
    private readonly start;
    private readonly end;
    private readonly blob;
    private readonly is_whole;
    constructor(blob: Blob, offset?: number, length?: number);
    get size(): number;
    get_blob(): Blob;
}
