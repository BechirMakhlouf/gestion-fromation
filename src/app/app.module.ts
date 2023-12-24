import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormationsComponent } from './formations/formations.component';
import { EspaceCandidatsComponent } from './espace-candidats/espace-candidats.component';
import { EspaceFormateursComponent } from './espace-formateurs/espace-formateurs.component';
import { EspacePriveComponent } from './espace-prive/espace-prive.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    FormationsComponent,
    EspaceCandidatsComponent,
    EspaceFormateursComponent,
    EspacePriveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
