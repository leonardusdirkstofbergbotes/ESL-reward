import { Folder } from "src/app/models/folder";

export const MOCK_FOLDER_DATA: Folder[] = [{
    folderName: "Parent folder",
    files: [],
    subFolders: [{
        folderName: "Test folder 1",
        files: [],
        subFolders: [{
            folderName: "Sub folder 1",
            files: [],
            subFolders: []
        },{
            folderName: "Sub folder 2",
            files: [],
            subFolders: []
        }]
    }, {
        folderName: "Test folder 2",
        files: [],
        subFolders: []
    }]
}];