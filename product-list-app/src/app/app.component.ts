import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
