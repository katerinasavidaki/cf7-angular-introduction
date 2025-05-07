import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DadJokes, ChuckNorrisJokes } from '../interfaces/jokes';

const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/';
const JACK_NORRIS_JOKES_API_URL = 'https://api.chucknorris.io/jokes/random';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  http: HttpClient = inject(HttpClient);

  constructor() { }

  getDadJokes() {
    return this.http.get<DadJokes>(DAD_JOKES_API_URL, {
      headers: {
        Accept: 'application/json'
      }
    })
  }

  getChuckNorrisJokes() {
    return this.http.get<ChuckNorrisJokes>(JACK_NORRIS_JOKES_API_URL, {
      headers: {
        Accept: 'application/json'
      }
    })
  }
  
}
