import { Component } from '@angular/core';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@Component({
  selector: 'app-header', //html tag
  //selector : '[app-header]', //html attribute tag
  //selector : ".app-header",// html css tag
  //selector : "#app-header", //html id tag
  standalone: true,
  imports: [TopMenuComponent,MainMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  //styles : ['a{text-decoration : none ; margin : 0 10px}','button{padding : 10px 20px ; margin : 5px}','.ekart--header{width : 100% ; height : 70px}']
})
export class HeaderComponent {
     title = 'Header content'
}
