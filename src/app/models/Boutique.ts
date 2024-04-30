export class Boutique{
     id:number;
      nom:string;
     adresse:string;
     telephone:string;
     email:string;
     imageUrl:string;
    constructor(id: number, nom: string, adresse: string, telephone: string, email: string,imageUrl:string) {
        this.id = id;
        this.nom = nom;
        this.adresse = adresse;
        this.telephone = telephone;
        this.email = email;
        this.imageUrl= imageUrl;
    }
    getId(): number {
        return this.id;
    }
    getNom(): string {
        return this.nom;
    }

    setNom(nom: string): void {
        this.nom = nom;
    }

    getAdresse(): string {
        return this.adresse;
    }

    setAdresse(adresse: string): void {
        this.adresse = adresse;
    }

    getTelephone(): string {
        return this.telephone;
    }

    setTelephone(telephone: string): void {
        this.telephone = telephone;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    getImageUrl(): string {
        return this.imageUrl;
    }

    setImageUrl(imageUrl: string): void {
        this.imageUrl = imageUrl;
    }

}