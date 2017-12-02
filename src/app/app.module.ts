import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ChromeBookmarkService} from "./shared/services/chrome-bookmark.service";
import {FormsModule} from "@angular/forms";
import {BookmarkService} from "./shared/services/bookmark-service";
import {environment} from "../environments/environment";
import {MockedBookmarkService} from "./shared/services/mocked-bookmark.service";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {
  MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BookmarkViewComponent } from './bookmarks/components/bookmark-view/bookmark-view.component';
import {RouterModule} from "@angular/router";
import {ExternalRedirectService} from "./shared/services/external-redirect.service";
import {appRoutes} from "./router-configuration";
import {SharedModule} from "./shared/shared.module";
import {SettingsModule} from "./settings/settings.module";
import {BookmarksModule} from "./bookmarks/bookmarks.module";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    SharedModule,
    SettingsModule,
    BookmarksModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide: BookmarkService,
    useFactory: bookmarksFactory
  }, ExternalRedirectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function bookmarksFactory(): BookmarkService {
  if (environment.chromeBookmarks) {
    return new ChromeBookmarkService();
  } else {
    return new MockedBookmarkService();
  }
}
