import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageTitleComponent } from "@components/page-title.component";
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'accordions',
  standalone: true,
  imports: [PageTitleComponent,NgbAccordionModule],
  templateUrl: './accordions.component.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionsComponent {
  accordionData = ['first', 'second', 'third']
}
