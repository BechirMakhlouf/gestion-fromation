export class Candidat {
  nom: string;
  prenom: string;
  email: string;
  numeroTelephone: string;
  carteID: number;
  #password: string;

  connexion(password: string): Candidat | undefined {
    return password === this.#password ? this : undefined;
  }

  constructor(
    nom: string,
    prenom: string,
    email: string,
    password: string,
    numeroTelephone: string,
    carteID: number,
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.numeroTelephone = numeroTelephone;
    this.carteID = carteID;
    this.#password = password;
  }
}
