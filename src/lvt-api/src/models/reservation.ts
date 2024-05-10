/* tslint:disable */
import { Client } from './client';
import { CreneauEssayage } from './creneau-essayage';
import { Produit } from './produit';
export interface Reservation  {
  client?: Client;
  code?: string;
  creationDate?: number;
  creneauEssayage?: CreneauEssayage;
  dateDebut?: string;
  dateFin?: string;
  etat?: string;
  id?: number;
  lastModifiedDate?: number;
  produit?: Produit;
  quantite?: number;
  status?: string;
}
