import {Bookmark} from "../model/bookmark";
import {Observable} from "rxjs/Observable";
import {NgZone} from "@angular/core";
import {Directory} from "../model/directory";

export abstract class BookmarkService {

  readonly bookmarks: Observable<Bookmark[]>;

  abstract refreshBookmarks(): void;

  abstract getBookmarksSubtree(id: string): Observable<Bookmark[]>;

  abstract getAllBookmarkDirectories(zone: NgZone): Observable<Directory[]>;

}
