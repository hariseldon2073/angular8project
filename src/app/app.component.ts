import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8project';

  numberA: number = 10;
  numberB: number = 20;

  imgUrl = "https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";    

  onSave($event){    
    console.log("Save button is clicked!", $event);    
  }    

  fullName: string = "Hello JavaTpoint";    
}
