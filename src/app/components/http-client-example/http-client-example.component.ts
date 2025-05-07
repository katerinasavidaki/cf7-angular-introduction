import { JokesService } from './../../shared/services/jokes.service';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  jokesService = inject(JokesService);

  dadJoke: string = '';
  chuckNorrisJoke: string = '';

  ngOnInit(): void {
    // this.jokesService.getDadJokes().subscribe((data) => {
    //   console.log('Dad Joke:', data);
    //   console.log('Dad Joke ID:', data.joke);
    // });

    // this.jokesService.getChuckNorrisJokes().subscribe((data) => {
    //   console.log('Chuck Norris Joke:', data);
    //   console.log('Chuck Norris Joke:', data.value);
    // });

    this.refreshChuckNorrisJoke();
    this.refreshDadJoke();

  }

  refreshDadJoke() {
    this.jokesService.getDadJokes().subscribe((data) => {
      console.log('Dad Joke:', data.joke);
      this.dadJoke = data.joke;
    });
  }

  refreshChuckNorrisJoke() {
    this.jokesService.getChuckNorrisJokes().subscribe((data) => {
      console.log('Chuck Norris Joke:', data.value);
      this.chuckNorrisJoke = data.value;
    });
  }
}
