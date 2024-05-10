/* tslint:disable */
import { Catalogue } from './catalogue';
import { Image } from './image';
export interface Produit  {
  catalogue?: Catalogue;
  categorie?: string;
  creationDate?: number;
  description?: string;
  id?: number;
  id_boutique?: number;
  images?: Array<Image>;
  lastModifiedDate?: number;
  nom?: string;
  prixLocation?: string;
}
