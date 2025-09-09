import { CommonModule } from "@angular/common";
import { Component } from "@angular/core"; 

@Component({
  selector: 'app-logo-box',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a class="logo">
    <span class="logo-light my-3">
      <span class="logo-lg text-center"><img src="assets/images/logo.webp" alt="logo"></span>
      <span class="logo-sm text-center"><img src="assets/images/logo-sm.png" alt="small logo"></span>
    </span>

    <span class="logo-dark">
      <span class="logo-lg my-3"><img src="assets/images/logo-dark.png" alt="dark logo"></span>
      <span class="logo-sm"><img src="assets/images/logo-sm.png" alt="small logo"></span>
    </span>
  </a>`,
})

export class LogoBoxComponent {

}
