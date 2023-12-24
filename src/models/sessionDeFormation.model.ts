import { Formateur } from "./formateur.model";
import { Candidat } from "./condidat.model";
import { Formation } from "./formation.model";

export class SessionDeFormation {
  formation: Formation;
  formateurs: Formateur[];
  Candidats: Candidat[];
  dateDeDebut: Date;
  dateDeFin: Date;
  planningDesSessions: string[];

  constructor(
    formation: Formation,
    formateurs: Formateur[],
    candidats: Candidat[],
    dateDeDebut: Date,
    dateDeFin: Date,
    planningDeSessions: string[],
  ) {
    this.formation = formation;
    this.formateurs = formateurs;
    this.Candidats = candidats;
    this.dateDeDebut = dateDeDebut;
    this.dateDeFin = dateDeFin;
    this.planningDesSessions = planningDeSessions;
  }
}
