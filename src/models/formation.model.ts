export type FormationDiffculte = "débutant" | "intermédiare" | "avancé";

export class Formation {
  titre: string;
  description: string;
  chargeHoraire: string;
  programme: string;
  diffculte: FormationDiffculte;
  tags: string[];

  constructor(
    titre: string,
    description: string,
    chargeHoraire: string,
    programme: string,
    diffculte: FormationDiffculte,
    tags: string[],
  ) {
    this.titre = titre;
    this.description = description;
    this.chargeHoraire = chargeHoraire;
    this.programme = programme;
    this.diffculte = diffculte;
    this.tags = tags;
  }
}
