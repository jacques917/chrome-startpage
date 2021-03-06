import {Injectable, NgZone} from '@angular/core';
import {BookmarkService} from "./bookmark-service";
import {Bookmark} from "../model/bookmark";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class MockedBookmarkService implements BookmarkService {
  getAllBookmarkDirectories(zone: NgZone): Observable<Bookmark[]> {
    return this._bookmarks.asObservable();
  }
  constructor() { }

  private staticBookmarks: Bookmark[] = [
    new Bookmark('t1','u1'),
    new Bookmark('t2','u2'),
    new Bookmark('t3','u3')
  ];

  getBookmarksSubtree(id: string): Observable<Bookmark[]> {
    return Observable.create(() =>
      this.staticBookmarks
    );
  }

  private _bookmarks = new BehaviorSubject<Bookmark[]>(this.staticBookmarks);

  get bookmarks(): Observable<Bookmark[]> {
    return this._bookmarks.asObservable();
  }

  refreshBookmarks(): void {
    throw new Error("Method not implemented.");
  }

}
