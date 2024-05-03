export class Boutique {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;

  constructor(id: number, name: string, address: string, phone: string, email: string, image: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.image = image;
  }
}
