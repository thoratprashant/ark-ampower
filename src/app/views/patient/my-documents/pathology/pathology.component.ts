import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pathology',
  imports: [NgbPaginationModule],
  templateUrl: './pathology.component.html',
  styleUrl: './pathology.component.scss'
})
export class PathologyComponent {
  page = 5;
}
