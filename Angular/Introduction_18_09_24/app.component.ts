import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  //template : ``,
  styleUrl: './app.component.css'
  // styles : `li{
  //   color : white;
  //   font-weight : 300px;
  //   background-color : rgb(200,100,50);
  // }`
})
export class AppComponent {
  title = 'Read Cup of Coffee';
  isShow = false;
  isInvalidForm = false;
  isAdmin = true;
  onToggle(){
        this.isShow = true;
  };
  data1 = 'vasudeva rao';
  data2 = 'CHANDRASEKHAR RAO';
  ingredients = [
    {name : "apple", price : 123},
    {name : "banana" , price : 420},
    {name : "orange" , price : 540}
  ];
  toUpper(){
    this.data1 = this.data1.toUpperCase();
  }
  toLower(){
    this.data2 = this.data2.toLowerCase();
  }

}
