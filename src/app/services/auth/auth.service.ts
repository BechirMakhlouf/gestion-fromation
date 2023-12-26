import { Injectable } from "@angular/core";
import { Formateur } from "src/models/formateur.model";
import { Candidat } from "src/models/condidat.model";

type Formateurs = Map<number, Formateur>;
type Candidats = Map<number, Candidat>;

@Injectable({
  providedIn: "root",
})
export class AuthService {
  #Formateurs: Formateurs = this.getFormateursFromLocalStorage() ||
    new Map();
  #Candidats: Candidats = this.getCandidatsFromLocalStorage() ||
    new Map();

  getCandidatsFromLocalStorage(): Candidats | undefined {
    return new Map(JSON.parse(localStorage.getItem("candidats") as string));
  }

  getFormateursFromLocalStorage(): Formateurs | undefined {
    return new Map(JSON.parse(localStorage.getItem("formateurs") as string));
  }

  setCandidatsToLocalStorage(Candidats: Candidats): void {
    localStorage.setItem(
      "candidats",
      JSON.stringify(Array.from(Candidats.entries())),
    );
  }
  setFormateursToLocalStorage(Formateurs: Formateurs): void {
    localStorage.setItem(
      "formateurs",
      JSON.stringify(Array.from(Formateurs.entries())),
    );
  }

  updateLocalStorage(): void {
    this.setCandidatsToLocalStorage(this.#Candidats);
    this.setFormateursToLocalStorage(this.#Formateurs);
  }

  /** Candidat Auth */
  connecterCandidat(id: number, password: string): Candidat | undefined {
    return this.chercherCandidatParID(id)?.connexion(password);
  }
  /** Formateur Auth */
  connecterFormateur(id: number, password: string): Formateur | undefined {
    return this.chercherFormateurParID(id)?.connexion(password);
  }

  chercherCandidatParID(id: number): Candidat | undefined {
    return this.#Candidats.get(id);
  }

  ajouterCandidat(candidat: Candidat): Candidat {
    if (this.#Candidats.has(candidat.carteID)) {
      throw new Error(
        `Can't add Candidate, Candidate with id: ${candidat.carteID} already exists.`,
      );
    }

    this.#Candidats.set(candidat.carteID, candidat);
    return candidat;
  }

  supprimerCandidatParID(id: number): boolean {
    return this.#Candidats.delete(id);
  }

  chercherFormateurParID(id: number): Formateur | undefined {
    return this.#Formateurs.get(id);
  }

  ajouterFormateur(formateur: Formateur): Formateur {
    if (this.#Formateurs.has(formateur.carteID)) {
      throw new Error(
        `Can't add Formateur, Formateur with id: ${formateur.carteID} already exists.`,
      );
    }

    this.#Formateurs.set(formateur.carteID, formateur);
    return formateur;
  }

  supprimerFormateurParID(id: number): boolean {
    return this.#Formateurs.delete(id);
  }

  constructor() {}
}
