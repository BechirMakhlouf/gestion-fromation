import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormationsComponent } from './formations/formations.component';
import { EspaceCandidatsComponent } from './espace-candidats/espace-candidats.component';
import { EspaceFormateursComponent } from './espace-formateurs/espace-formateurs.component';
import { EspacePriveComponent } from './espace-prive/espace-prive.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ConnexionCandidatComponent } from './connexion-candidat/connexion-candidat.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    FormationsComponent,
    EspaceCandidatsComponent,
    EspaceFormateursComponent,
    EspacePriveComponent,
    HeaderComponent,
    NotFoundPageComponent,
    ConnexionCandidatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
