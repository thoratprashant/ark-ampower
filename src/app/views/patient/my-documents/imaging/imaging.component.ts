import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-imaging',
  imports: [NgbPaginationModule],
  templateUrl: './imaging.component.html',
  styleUrl: './imaging.component.scss'
})
export class ImagingComponent {
  page = 5;
}
