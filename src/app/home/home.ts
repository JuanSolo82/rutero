import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink,RouterOutlet } from '@angular/router';
import { Header } from '../paginas/header/header';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-home',
	imports: [MatSidenavModule, 
		RouterLink, 
		Header, 
		MatListModule, 
		MatIconModule,
		MatButtonModule,
		RouterOutlet],
	templateUrl: './home.html',
	styleUrl: './home.css',
})
export class Home {

}
