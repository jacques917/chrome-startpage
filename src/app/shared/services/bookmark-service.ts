import {Bookmark} from "../model/bookmark";
import {Observable} from "rxjs/Observable";

export abstract class BookmarkService {

  readonly bookmarks: Observable<Bookmark[]>;

  abstract refreshBookmarks(): void;

}
