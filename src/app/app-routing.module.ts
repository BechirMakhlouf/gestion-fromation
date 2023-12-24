import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceuilComponent } from "./acceuil/acceuil.component";
import { FormationsComponent } from "./formations/formations.component";
import { EspaceCandidatsComponent } from "./espace-candidats/espace-candidats.component";
import { EspaceFormateursComponent } from "./espace-formateurs/espace-formateurs.component";
import { EspacePriveComponent } from "./espace-prive/espace-prive.component";
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: "acceuil",
    component: AcceuilComponent,
  },
  {
    path: "formations",
    component: FormationsComponent,
  },
  {
    path: "espace-candidats",
    component: EspaceCandidatsComponent,
  },
  {
    path: "espace-formateurs",
    component: EspaceFormateursComponent,
  },
  {
    path: "espace-prive",
    component: EspacePriveComponent,
  },
  {
    path: "**",
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
