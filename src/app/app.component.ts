import { Component } from '@angular/core';
import { BlobOptions } from 'buffer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'agsc-store';
  showCart: boolean=false

  toogleCart(){
    this.showCart= !this.showCart
  }
}
