import { SnackBarService } from './../../components/snack-bar/snack-bar.service';
import { getDatabase,ref, set, child, get, push } from 'firebase/database';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirebaseWrapperService {

  private database = getDatabase();

  constructor(
    private _snackbar: SnackBarService
  ) { }

  createNewFolder (userId: string, folderName: string, folderId: string) {
    push(ref(this.database, `${userId}/folders/${folderId}`), {
      folderId: btoa(Date.now().toString()),
      folderName: folderName,
    }).catch((error) => {
      console.log(error);
    }).then((data) => {
      // either need to refetch the data from firebase or you need to get the saved data from firebase as a response of the push and add to array 
      this._snackbar.notify('Folder created successfully', 'success');
    });
  }

  async getData (userId: string, resource: string, folderId: string): Promise<any> {
    const databaseReference = ref(this.database);

    return new Promise(async resolve => {
      get(child(databaseReference, `${userId}/${resource}/${folderId}`)).then((snapshot: any) => {
        resolve(snapshot.val() ?? [])
      }).catch((error) => {
        resolve(error);
      })
    });
  }
}
