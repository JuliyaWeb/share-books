import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ActionSheetController } from "ionic-angular";
// import { ActionSheetController, Loading, LoadingController } from "ionic-angular";
// import { Transfer, TransferObject } from "@ionic-native/transfer";

@Component({
  selector: 'image-upload',
  templateUrl: 'image-upload.html'
})
export class ImageUploadComponent {

  public imgSrc: any;
  public captureDataUrl: any;
  @Input() icon: string = 'plus';  // default set plus;
  @Output() outputImg = new EventEmitter();
  // private loading: Loading;

  constructor(private camera: Camera,
              private actionSheetCtrl: ActionSheetController) {
  }


  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this._takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }, {
        text: 'Use Camera',
        handler: () => {
          this._takePicture(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Cancel',
        role: 'cancel'
      }]
    });
    actionSheet.present();
  }

  private _takePicture(sourceType) {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      this.imgSrc = imageData;
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
      this.outputImg.emit(this.captureDataUrl);
      // Send to server coning soon
      // this._fileChooser();
    }, (err) => {
    });
  }

  // private transfer: Transfer,
  // private loadingCtrl: LoadingController

  // private _fileChooser() {

  // const fileTransfer: TransferObject = this.transfer.create();
  // const options = {
  //   fileKey: "file",
  //   fileName: 'filename',
  //   chunkedMode: false,
  //   mimeType: "multipart/form-data",
  //   params: {'file': 'file'},
  //   headers: {}
  // };
  // this.loading = this.loadingCtrl.create({
  //   content: 'Uploading...',
  // });
  // this.loading.present();

  // / Use the FileTransfer to upload the image
  // fileTransfer.upload('imageDataLocalURL', 'http://localhost/ionic/upload.php', options)
  //   .then((data) => {
  //     console.log("success");
  //   }, (err) => {
  //     console.log("error" + JSON.stringify(err));
  //   });
  // }

}
