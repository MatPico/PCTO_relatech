import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';
import data from "../../assets/Dati.json";

interface Box{
  id:number,
  titolo:string,
  img:string,
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule,RouterOutlet,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 item:Box[]=data.Blocchi;
}