import {Component, NgZone, OnInit} from '@angular/core';
import {BookmarkService} from "../../../shared/services/bookmark-service";
import {Bookmark} from "../../../shared/model/bookmark";
import {SettingsService} from "../../../shared/services/settings.service";
import {SETTINGS_PARAMETERS} from "../../../shared/model/settings-parameters";

@Component({
  selector: 'app-bookmarks-top-panel',
  templateUrl: './bookmarks-top-panel.component.html',
  styleUrls: ['./bookmarks-top-panel.component.scss']
})
export class BookmarksTopPanelComponent implements OnInit {

  bookmarks: Bookmark[] = [];

  constructor(private bookmarkService: BookmarkService, private zone: NgZone, private settingsService: SettingsService) {
    let bookmarkDirectoryId = settingsService.getParameter(SETTINGS_PARAMETERS.TOP_PANEL_SOURCE);
    this.bookmarkService.getBookmarksSubtree(bookmarkDirectoryId)
      .subscribe(value => this.zone.run(() => this.bookmarks = value[0].children));
  }

  ngOnInit() {
  }

}
