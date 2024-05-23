import { Client, Produit } from 'src/lvt-api/src/models';
export interface Reservation{
    id: number;
    date: Date;
    produit: Produit;
    client: Client;
    accepted: boolean;
} 