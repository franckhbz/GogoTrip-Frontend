import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearforo',
  templateUrl: 'crearforos.component.html',
  styleUrls: ['crearforos.component.css']
})
export class CrearforosComponent implements OnInit {
  newPublication = {
    title: '',
    content: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/registro']);
    }
  }

  createPublication() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    this.http.post('http://3.15.157.205/api/v1/publications', this.newPublication, { headers })
      .subscribe(
        response => {
          console.log('Publicación creada', response);
          this.router.navigate(['/foro']);
        },
        error => {
          console.error('Error al crear la publicación', error);
        }
      );
  }
}
