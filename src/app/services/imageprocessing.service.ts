import { Injectable } from '@angular/core';
import { Produit } from 'src/lvt-api/src/models';
import { FileHandle } from '../models/FileHandle';
import { DomSanitizer } from '@angular/platform-browser';
import { Boutique } from '../models/Boutique';

@Injectable({
  providedIn: 'root'
})
export class ImageprocessingService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImages(produit: Produit) {
    const Imageproduit: any[] = produit.images;
    const ImageproduitFileHandle: FileHandle[] = [];
    for (let i = 0; i < Imageproduit.length; i++) {
      const imageFileData = Imageproduit[i];
      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob],imageFileData.name , {type: imageFileData.type});
      const finalFileHandle :FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(imageFile))
      };
      ImageproduitFileHandle.push(finalFileHandle);
    }

    produit.images = ImageproduitFileHandle;
    return produit;
  }

  public createImagesBoutique(boutique: Boutique) {
    const Imageproduit: any[] = boutique.boutiqueImage;
    const ImageproduitFileHandle: FileHandle[] = [];
    for (let i = 0; i < Imageproduit.length; i++) {
      const imageFileData = Imageproduit[i];
      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob],imageFileData.name , {type: imageFileData.type});
      const finalFileHandle :FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(imageFile))
      };
      ImageproduitFileHandle.push(finalFileHandle);
    }

    boutique.boutiqueImage = ImageproduitFileHandle;
    return boutique;
  }

  public dataURItoBlob(picBytes: string, imageType: any) {
    const byteString=window.atob(picBytes);
    const arrayBuffer=new ArrayBuffer(byteString.length);
    const int8Array=new Uint8Array(arrayBuffer);

    for(let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], {type: imageType});
    return blob;
  }



}
