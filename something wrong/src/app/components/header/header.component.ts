import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/assets/images/logo-cheburashka.svg" alt="Logo" class="img-fluid">
    </a>
    <div id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item me-2">
          <a class="nav-link fs-4" routerLink="/home"><strong>Home</strong></a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-4" routerLink="/newuser"><strong>Nuevo Usuario</strong></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  `,
  styles: ``
})
export class HeaderComponent {

}
