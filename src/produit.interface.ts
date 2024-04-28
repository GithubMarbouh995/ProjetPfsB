export class Produit {
    id_produit?: number;
    id_boutique?: number;
    id_catalogue?: number;
    nom?: string;
    description?: string;
    categorie?: string;
    prix_location?: string;
    constructor(id_produit: number, id_boutique: number, id_catalogue: number, nom: string, description: string, categorie: string, prix_location: string) {
        this.id_produit = id_produit;
        this.id_boutique = id_boutique;
        this.id_catalogue = id_catalogue;
        this.nom = nom;
        this.description = description;
        this.categorie = categorie;
        this.prix_location = prix_location;
    }
}