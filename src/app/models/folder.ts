export interface StickerFile {
    title: string;
    format: string;
}

export interface Folder {
    title: string;
    files: StickerFile[] | undefined;
    subFolders: Folder[] | undefined;
    open: boolean;
}