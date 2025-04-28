import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-component-input-example',
  imports: [],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Christodoulos',
    surname: 'Fragkoudakis',
    age: 55,
    email: 'chfrag@aueb.gr',
    address: 'New York, USA',
  }

  person1: Person = {
    givenName: 'John',
    surname: 'Doe',
    age: 32,
    email: 'john@aueb.gr',
    address: 'Athens, Greece',
  }
}
