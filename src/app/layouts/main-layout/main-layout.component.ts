import { Component, HostListener, inject, Renderer2, type OnInit } from '@angular/core';
import { TopbarComponent } from "../topbar/topbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { NgbOffcanvas, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap'; 
import { Store } from '@ngrx/store';
import { getSidebarsize } from '@/store/layout/layout-selector';
import { changesidebarsize } from '@/store/layout/layout-action';
import type { LayoutState } from '@/store/layout/layout-reducers';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  // FooterComponent
  imports: [TopbarComponent, SidebarComponent, RouterModule, NgbOffcanvasModule],
  templateUrl: './main-layout.component.html',
  styles: ``
})
export class MainLayoutComponent implements OnInit {

  private store = inject(Store);
  private offcanvasService = inject(NgbOffcanvas);
  private renderer = inject(Renderer2);

 

  onToggleMobileMenu() {
    this.store.select(getSidebarsize).subscribe((size: any) => {
      document.documentElement.setAttribute('data-sidenav-size', size);
    });

    const size = document.documentElement.getAttribute('data-sidenav-size');

    document.documentElement.classList.toggle('sidebar-enable');
    if (size != 'full') {
      if (document.documentElement.classList.contains('sidebar-enable')) {
        this.store.dispatch(changesidebarsize({ size: 'condensed' }));
      } else {
        this.store.dispatch(changesidebarsize({ size: 'default' }));
      }
    } else {
      this.showBackdrop();
    }
  }

  showBackdrop() {
    const backdrop = this.renderer.createElement('div');
    this.renderer.addClass(backdrop, 'offcanvas-backdrop');
    this.renderer.addClass(backdrop, 'fade');
    this.renderer.addClass(backdrop, 'show');
    this.renderer.appendChild(document.body, backdrop);
    this.renderer.setStyle(document.body, 'overflow', 'hidden');

    if (window.innerWidth > 1040) {
      this.renderer.setStyle(document.body, 'paddingRight', '15px');
    }

    this.renderer.listen(backdrop, 'click', () => {
      document.documentElement.classList.remove('sidebar-enable');
      this.renderer.removeChild(document.body, backdrop);
      this.renderer.setStyle(document.body, 'overflow', null);
      this.renderer.setStyle(document.body, 'paddingRight', null);
    });
  }
  @HostListener('window:resize', ['$event'])

  ngOnInit(): void {
    this.store.select('layout').subscribe((data:LayoutState) => {
      document.documentElement.setAttribute('data-bs-theme', data.LAYOUT_THEME);

      document.documentElement.setAttribute('data-menu-color', data.MENU_COLOR);
      document.documentElement.setAttribute(
        'data-topbar-color',
        data.TOPBAR_COLOR,
      );
      document.documentElement.setAttribute('data-sidenav-size', data.MENU_SIZE);
    });
    if (document.documentElement.clientWidth <= 1140) {
      this.onResize()
    }
  }

  onResize() {
    if (document.documentElement.clientWidth <= 1140 && document.documentElement.clientWidth >= 768) {
      this.store.dispatch(changesidebarsize({ size: 'condensed' }))
    } else if (document.documentElement.clientWidth <= 768) {
      this.store.dispatch(changesidebarsize({ size: 'full' }))
    } else {
      this.store.dispatch(changesidebarsize({ size: "default" }))
      document.documentElement.classList.remove('sidebar-enable')
      const backdrop = document.querySelector('.offcanvas-backdrop')
      if (backdrop) this.renderer.removeChild(document.body, backdrop)

    }

    this.store.select(getSidebarsize).subscribe((size: string) => {
      this.renderer.setAttribute(
        document.documentElement,
        'data-sidenav-size',
        size
      )
    })
  }


}
