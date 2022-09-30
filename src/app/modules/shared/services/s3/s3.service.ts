import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { S3Details } from 'src/app/configs/s3-details';

@Injectable({
  providedIn: 'root'
})
export class S3Service {

  bucket = new S3({
    accessKeyId: S3Details.accessKeyId,
    secretAccessKey: S3Details.secretAccessKey,
    region: S3Details.region
  });

  constructor() { }

  fileUpload(file: File, userId: string, folderId: string) {
    const contentType = file.type;
    const params = {
      Bucket: S3Details.Bucket,
      Key: `${userId}/${folderId}/${file.name}`,
      Body: file,
      // ACL: 'public-read',
      ContentType: contentType,
    };
    this.bucket.upload(params, function (err: any, data: any) {
      if (err) {
        console.log('EROOR: ', JSON.stringify(err));
        return false;
      }
      console.log('File Uploaded.', data);
      return true;
    });
  }

  async getFile (key: string): Promise<any> {
    const params = {
      Bucket: S3Details.Bucket,
      Key: key
    };

    return new Promise(async resolve => { 
      this.bucket.getObject(params, function(err, data) {
        if (err) {
          console.log(err, err.stack);
          resolve([]);
        } // an error occurred
        else {
          let unit8ArrayData = data.Body as BlobPart;
          let fileName = "testing 123";
  
          resolve(new File([unit8ArrayData], fileName, {type: data.ContentType}));
        } 
      });
    });
  }

  async getFilesInsideFolder (userId: string, path: string): Promise<any> {
    const params = {
      Bucket: S3Details.Bucket,
      Prefix: `${userId}/${path}`
    };

    let files: File[] = [];

    return new Promise (async resolve => {
      this.bucket.listObjectsV2(params, (err, data) => {
        if (err) {
          console.log(err);
        } 
        else {
          let loops: number = 0;
          data.Contents?.forEach(async (awsFile: S3.Object) => {
            let file = await this.getFile(awsFile.Key ?? '');
            files.push(file);
            loops += 1;

            if (loops == data.Contents?.length) {
              resolve(files);
            }
          });
        }
      });

    });
  }
}
