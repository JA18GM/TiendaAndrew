import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl:  './toolbar.component.html',
  //templateUrl: './tool-bar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolBarComponent {
  productDialog: boolean | undefined;
  submitted: boolean | undefined;

  openNew(){
    this.submitted = false;
    this.productDialog = true;
  }
}

