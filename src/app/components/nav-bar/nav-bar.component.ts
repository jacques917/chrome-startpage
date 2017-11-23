import { Component, OnInit } from '@angular/core';
import {ExternalRedirectService} from "../../services/external-redirect.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private externalRedirectService: ExternalRedirectService) { }

  ngOnInit() {
  }

  searchGoogle(searchPhrase: string) {
    this.externalRedirectService.redirectToGoogle(searchPhrase);
  }

  searchYoutube(searchPhrase: string) {
    this.externalRedirectService.redirectToYouTube(searchPhrase);
  }

}
