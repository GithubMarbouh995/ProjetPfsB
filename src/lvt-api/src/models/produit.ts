/* tslint:disable */
import { Catalogue } from './catalogue';
import { Image } from './image';
import { FileHandle } from 'src/app/models/FileHandle';

export interface Produit  {
  catalogue?: Catalogue;
  categorie?: string;
  creationDate?: number;
  description?: string;
  id: number;
  id_boutique?: number;
  lastModifiedDate?: number;
  nom?: string;
  prixLocation?: string;
  images: FileHandle[];
}
