import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-foros',
  templateUrl: 'foros.component.html',
  styleUrls: ['foros.component.css']
})
export class ForosComponent implements OnInit {
  publications: any[] = [];

  constructor(private publicationsService: PublicationsService) {}

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
