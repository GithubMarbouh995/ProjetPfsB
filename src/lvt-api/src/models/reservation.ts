/* tslint:disable */
import { Client } from './client';
import { CreneauEssayage } from './creneau-essayage';
import { Produit } from './produit';
export interface Reservation  {
  client?: Client;
  code?: string;
  creationDate?: number;
  dateDebut?: string;
  dateFin?: string;
  etat?: string;
  id?: number;
  id_client?: number;
  id_produit?: number;
  lastModifiedDate?: number;
  produit?: Produit;
  quantite?: number;
  status?: string;
  creneauEssayage: CreneauEssayage | undefined;
 
}
