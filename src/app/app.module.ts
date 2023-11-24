import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
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
import { CrearforosComponent} from "./components/CreaForo/crearforos.component";
import { CarritoComponent} from "./components/Carrito/carrito.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CrearforosComponent,
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
    ForosComponent, CarritoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
