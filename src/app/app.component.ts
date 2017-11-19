import {Component, NgZone} from '@angular/core';
import {Bookmark} from "./model/bookmark";
import {BookmarkService} from "./services/bookmark-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bookmarksList: Bookmark[] = [];

  constructor(public bookmarkService: BookmarkService, private zone:NgZone) {
    this.bookmarkService.bookmarks
      .subscribe((result) => {
        this.zone.run(() => this.bookmarksList = result)

      });
  }

}
