import {Component, NgZone, OnInit} from '@angular/core';
import {Bookmark} from "../../../shared/model/bookmark";
import {BookmarkService} from "../../../shared/services/bookmark-service";

@Component({
  selector: 'app-bookmark-view',
  templateUrl: './bookmark-view.component.html',
  styleUrls: ['./bookmark-view.component.scss']
})
export class BookmarkViewComponent implements OnInit {

  bookmarksList: Bookmark[] = [];

  constructor(public bookmarkService: BookmarkService, private zone:NgZone) {
    this.bookmarkService.bookmarks
      .subscribe((result) => {
        this.zone.run(() => this.bookmarksList = result)

      });
  }

  ngOnInit() {
  }

}
