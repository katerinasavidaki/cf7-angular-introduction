import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
// import { PersonTableComponent } from './components/person-table/person-table.component';
// import { Person } from './shared/interfaces/person';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // name = 'Katerina';

  // // step 1: one way binding of data
  // person = {
  //   givenName: 'Katerina',
  //   surname: 'Savidaki',
  //   age: 29,
  //   email: 'ksavvidaki@aueb.gr'
  // }

  // // Step 3: Component input
  // person0: Person = {
  //   givenName: 'Christodoulos',
  //   surname: 'Fragkoudakis',
  //   age: 55,
  //   email: "chfrag@aueb.gr",
  //   address: "Athens, Greece",
  // }

  // person1: Person = {
  //   givenName: 'John',
  //   surname: 'Doe',
  //   age: 32,
  //   email: "john@aueb.gr",
  //   address: "New York, USA",
  // }

  // users: Person[] = [
  //     {
  //       "givenName": "Melamie",
  //       "surname": "Rapi",
  //       "email": "mrapi0@mysql.com",
  //       "age": 1,
  //       "address": "PO Box 25676"
  //     }, {
  //       "givenName": "Veda",
  //       "surname": "Kemwall",
  //       "email": "vkemwall1@typepad.com",
  //       "age": 2,
  //       "address": "Room 331"
  //     }, {
  //       "givenName": "Welbie",
  //       "surname": "Haysman",
  //       "email": "whaysman2@nsw.gov.au",
  //       "age": 3,
  //       "address": "Room 35"
  //     }, {
  //       "givenName": "Jacques",
  //       "surname": "Wingfield",
  //       "email": "jwingfield3@flavors.me",
  //       "age": 4,
  //       "address": "Room 1273"
  //     }, {
  //       "givenName": "Ave",
  //       "surname": "Leek",
  //       "email": "aleek4@mysql.com",
  //       "age": 5,
  //       "address": "Apt 761"
  //     }, {
  //       "givenName": "Goddard",
  //       "surname": "Tixall",
  //       "email": "gtixall5@admin.ch",
  //       "age": 6,
  //       "address": "Suite 75"
  //     }, {
  //       "givenName": "Rinaldo",
  //       "surname": "Meaddowcroft",
  //       "email": "rmeaddowcroft6@msu.edu",
  //       "age": 7,
  //       "address": "Room 1353"
  //     }, {
  //       "givenName": "Bram",
  //       "surname": "Airy",
  //       "email": "bairy7@weebly.com",
  //       "age": 8,
  //       "address": "PO Box 49416"
  //     }, {
  //       "givenName": "Leanna",
  //       "surname": "Apfler",
  //       "email": "lapfler8@indiatimes.com",
  //       "age": 9,
  //       "address": "1st Floor"
  //     }, {
  //       "givenName": "Shel",
  //       "surname": "Vazquez",
  //       "email": "svazquez9@instagram.com",
  //       "age": 10,
  //       "address": "1st Floor"
  //     }, {
  //       "givenName": "Nolly",
  //       "surname": "Rottery",
  //       "email": "nrotterya@bravesites.com",
  //       "age": 11,
  //       "address": "Suite 41"
  //     }, {
  //       "givenName": "Jimmy",
  //       "surname": "Leagas",
  //       "email": "jleagasb@flickr.com",
  //       "age": 12,
  //       "address": "Room 1312"
  //     }, {
  //       "givenName": "Trude",
  //       "surname": "Koppes",
  //       "email": "tkoppesc@gnu.org",
  //       "age": 13,
  //       "address": "Room 1954"
  //     }, {
  //       "givenName": "Orville",
  //       "surname": "McCaskell",
  //       "email": "omccaskelld@independent.co.uk",
  //       "age": 14,
  //       "address": "Suite 50"
  //     }, {
  //       "givenName": "Jayne",
  //       "surname": "Lenz",
  //       "email": "jlenze@artisteer.com",
  //       "age": 15,
  //       "address": "PO Box 85027"
  //     }, {
  //       "givenName": "Ceciley",
  //       "surname": "Boutcher",
  //       "email": "cboutcherf@cpanel.net",
  //       "age": 16,
  //       "address": "Apt 197"
  //     }, {
  //       "givenName": "Salomon",
  //       "surname": "Leftwich",
  //       "email": "sleftwichg@51.la",
  //       "age": 17,
  //       "address": "Room 1707"
  //     }, {
  //       "givenName": "Ariel",
  //       "surname": "Gentner",
  //       "email": "agentnerh@dagondesign.com",
  //       "age": 18,
  //       "address": "11th Floor"
  //     }, {
  //       "givenName": "Marleen",
  //       "surname": "Gorcke",
  //       "email": "mgorckei@feedburner.com",
  //       "age": 19,
  //       "address": "Suite 44"
  //     }, {
  //       "givenName": "Torey",
  //       "surname": "Goulstone",
  //       "email": "tgoulstonej@pinterest.com",
  //       "age": 20,
  //       "address": "PO Box 19970"
  //     }
  // ]
}
