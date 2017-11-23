import {Injectable} from '@angular/core';

@Injectable()
export class ExternalRedirectService {

  constructor() { }

  redirectToGoogle(searchPhrase: string) {
    window.location.href = `https://google.pl/search?q=${searchPhrase}`;
  }

  redirectToYouTube(searchPhrase: string) {
    window.location.href = `https://www.youtube.com/results?search_query=${searchPhrase}`;
  }

}
