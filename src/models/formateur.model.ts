export class Formateur {
  nom: string;
  prenom: string;
  email: string;
  numeroTelephone: string = "";
  carteID: number = 0;
  specialites: string[] = [];
  #password: string;

  connexion(password: string): Formateur | undefined {
    return password === this.#password ? this : undefined;
  }

  constructor(nom: string, prenom: string, email: string, password: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.#password = password;
  }
}
