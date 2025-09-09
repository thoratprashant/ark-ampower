import { Component, inject, Renderer2, type OnDestroy, type OnInit } from '@angular/core';
import { TopbarComponent } from "../topbar/topbar.component";
import { RightSidebarComponent } from '@layouts/right-sidebar/right-sidebar.component';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'horizontal-layout',
  standalone: true,
  // FooterComponent
  imports: [TopbarComponent, RouterModule, ],
  templateUrl: './horizontal-layout.component.html',
  styles: ``
})
export class HorizontalLayoutComponent implements OnInit, OnDestroy  {
  private offcanvasService = inject(NgbOffcanvas);
  private render = inject(Renderer2)

  ngOnInit(): void {
    this.render.setAttribute(document.documentElement, 'data-layout', 'topnav')
  }

  ngOnDestroy(): void {
    this.render.removeAttribute(document.documentElement, 'data-layout')
  }


  onSettingsButtonClicked() {

    this.offcanvasService.open(RightSidebarComponent, {
      position: 'end',
      backdrop: true
    });
  }

  onToggleMobileMenu() {
    document.getElementById('topnav-menu-content')?.classList.toggle('show')
  }
}
