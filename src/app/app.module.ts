import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ChromeBookmarkService} from "./services/chrome-bookmark.service";
import {FormsModule} from "@angular/forms";
import {BookmarkService} from "./services/bookmark-service";
import {environment} from "../environments/environment";
import {MockedBookmarkService} from "./services/mocked-bookmark.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{
    provide: BookmarkService,
    useFactory: bookmarksFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function bookmarksFactory(): BookmarkService {
  console.log(environment);
  if (environment.chromeBookmarks) {
    return new ChromeBookmarkService();
  } else {
    return new MockedBookmarkService();
  }
}
