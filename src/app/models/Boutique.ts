import { FileHandle } from './FileHandle';
export class Boutique {
  id: number;
  nom: string;
  adresse: string;
  telephone: string;
  email: string;
  siteWeb: string;
  horaire: string;
  id_vendeur: number;
  boutiqueImage : FileHandle[];

  constructor(id: number, nom: string, adresse: string, telephone: string, email: string, siteWeb: string, horaire: string, id_vendeur: number, boutiqueImage : FileHandle[]) {
    this.id = id;
    this.nom = nom;
    this.adresse = adresse;
    this.telephone = telephone;
    this.email = email;
    this.siteWeb = siteWeb;
    this.horaire = horaire;
    this.boutiqueImage = boutiqueImage;
    this.id_vendeur = id_vendeur;
  }
}
