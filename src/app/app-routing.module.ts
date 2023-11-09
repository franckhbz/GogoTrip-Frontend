import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { DestinosComponent} from "./components/Destinos/destinos.component";
import { GaleriaComponent} from "./components/Galeria/galeria.component";
import { HomeComponent} from "./components/Paginicio/home.component";
import { IniciarsesionComponent} from "./components/InicioSesion/IniciarSesion/iniciarsesion.component";
import { RegistroComponent} from "./components/InicioSesion/Registro/registro.component";
import { RegistrolistoComponent} from "./components/InicioSesion/RegistroListo/registrolisto.component";
import { PerfilComponent} from "./components/Perfil/perfil.component";
import { PlanescomunidadComponent} from "./components/PlanesComunidad/planescomunidad.component";
import { PlanificacionComponent} from "./components/Planificacion/planificacion.component";
import { SobrenosotrosComponent} from "./components/SobreNosotros/sobrenosotros.component";
import {ForosComponent} from "./components/Foros/foros.component";


const routes: Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'galeria', component: GaleriaComponent},
  { path: 'iniciarsesion', component: IniciarsesionComponent},
  { path: 'destinos', component: DestinosComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'registrolisto', component: RegistrolistoComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'planes', component: PlanescomunidadComponent},
  { path: 'planificacion', component: PlanificacionComponent},
  { path: 'sobrenosotros', component: SobrenosotrosComponent},
  { path: 'foro', component: ForosComponent}


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{}
