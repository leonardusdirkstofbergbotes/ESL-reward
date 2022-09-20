import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';
import { S3Details } from 'src/app/configs/s3-details';

@Injectable({
  providedIn: 'root'
})
export class S3UploadService {

  constructor() { }

  fileUpload(file: any) {
    const contentType = file.type;
    const bucket = new S3({
      accessKeyId: S3Details.accessKeyId,
      secretAccessKey: S3Details.secretAccessKey,
      region: S3Details.region
    });
    const params = {
      Bucket: S3Details.Bucket,
      Key: file.name,
      Body: file,
      // ACL: 'public-read',
      ContentType: contentType,
    };
    bucket.upload(params, function (err: any, data: any) {
      if (err) {
        console.log('EROOR: ', JSON.stringify(err));
        return false;
      }
      console.log('File Uploaded.', data);
      return true;
    });
  }
}
