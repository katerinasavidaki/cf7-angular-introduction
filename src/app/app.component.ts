import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name = 'Katerina';

  person = {
    givenName: 'Katerina',
    surname: 'Savidaki',
    age: 29,
    email: 'ksavvidaki@aueb.gr'
  }
}
