export interface Folder {
    folderName: string;
    files: File[];
    subFolders: Folder[];
}