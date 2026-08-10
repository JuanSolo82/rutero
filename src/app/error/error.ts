import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-error',
    imports: [MatCardModule, MatButtonModule, RouterModule, MatIconModule],
    templateUrl: './error.html',
    styleUrl: './error.css',
})
export class Error {

}
