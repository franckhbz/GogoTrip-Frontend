import {Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';
import {PublicationsService} from "src/app/services/publications.service";
@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.component.html',
  styleUrls: ['perfil.component.css']
})
export class PerfilComponent implements OnInit{
  publications: any[] = [];
  firstName: string | null;
  lastName: string | null;
  email: string | null;

  constructor(private router: Router,private publicationsService: PublicationsService) {
    this.firstName = localStorage.getItem('firstName');
    this.lastName = localStorage.getItem('lastName');
    this.email = localStorage.getItem('userEmail');

    // Si alguno de los datos esenciales no está presente, redirige a /registro

    if (!this.firstName || !this.lastName || !this.email) {
      this.router.navigate(['/registro']);
    }


  }
  ngOnInit() {
    this.publicationsService.getPublications().subscribe(
      data => {
        this.publications = data;
      },
      error => {
        console.error('Error al obtener publicaciones', error);
      }
    );
  }
}
