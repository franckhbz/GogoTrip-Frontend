import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from "./app-routing.module";

import { DestinosComponent} from "./components/Destinos/destinos.component";
import { GaleriaComponent} from "./components/Galeria/galeria.component";
import { AppComponent } from './app.component';
import { HomeComponent} from "./components/Paginicio/home.component";
import { IniciarsesionComponent} from "./components/InicioSesion/IniciarSesion/iniciarsesion.component";
import { RegistroComponent} from "./components/InicioSesion/Registro/registro.component";
import { RegistrolistoComponent} from "./components/InicioSesion/RegistroListo/registrolisto.component";
import { PerfilComponent} from "./components/Perfil/perfil.component";
import { PlanescomunidadComponent} from "./components/PlanesComunidad/planescomunidad.component";
import { PlanificacionComponent} from "./components/Planificacion/planificacion.component";
import { SobrenosotrosComponent} from "./components/SobreNosotros/sobrenosotros.component";
import { ForosComponent} from "./components/Foros/foros.component";

@NgModule({
  declarations: [
    DestinosComponent,
    AppComponent,
    HomeComponent,
    IniciarsesionComponent,
    GaleriaComponent,
    RegistroComponent,
    RegistrolistoComponent,
    PerfilComponent,
    PlanescomunidadComponent,
    PlanificacionComponent,
    SobrenosotrosComponent,
    ForosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
