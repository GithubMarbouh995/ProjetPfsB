export class Boutique {
  id: number;
  nom: string;
  adresse: string;
  telephone: string;
  email: string;
  imageUrl: string;
  siteWeb: string;
  horaire: string;
  constructor(id: number, nom: string, adresse: string, telephone: string, email: string, imageUrl: string, siteWeb: string, horaire: string) {
    this.id = id;
    this.nom = nom;
    this.adresse = adresse;
    this.telephone = telephone;
    this.email = email;
    this.imageUrl = imageUrl;
    this.siteWeb = siteWeb;
    this.horaire = horaire;
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
  getSiteWeb(): string {
    return this.siteWeb;
  }

  setSiteWeb(siteWeb: string): void {
    this.siteWeb = siteWeb;
  }

  getHoraire(): string {
    return this.horaire;
  }

  setHoraire(horaire: string): void {
    this.horaire = horaire;
  }

}