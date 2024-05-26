import { Boutique } from "src/app/models/Boutique";
import { Client } from "./client";



export class Avis {
    note: number;
    commentaire: string;
    client: any;
    boutique: Boutique;

    constructor(note: number, commentaire: string, client: any, boutique: Boutique) {
        this.note = note;
        this.commentaire = commentaire;
        this.client = client;
        this.boutique = boutique;
    }


    getNote(): number {
        return this.note;
    }

    setNote(note: number): void {
        this.note = note;
    }

    getCommentaire(): string {
        return this.commentaire;
    }

    setCommentaire(commentaire: string): void {
        this.commentaire = commentaire;
    }

    getClient(): Client {
        return this.client;
    }

    setClient(client: Client): void {
        this.client = client;
    }

    getBoutique(): Boutique {
        return this.boutique;
    }

    setBoutique(boutique: Boutique): void {
        this.boutique = boutique;
    }
}