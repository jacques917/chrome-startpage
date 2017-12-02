///<reference path="../../../../node_modules/@types/chrome/index.d.ts" />

import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Bookmark} from "../model/bookmark";
import {BookmarkService} from "./bookmark-service";
import {Observable} from "rxjs/Observable";
import BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode;

@Injectable()
export class ChromeBookmarkService implements BookmarkService {

  constructor() {
    this.refreshBookmarks();
  }

  private _bookmarks = new BehaviorSubject<Bookmark[]>([]);

  get bookmarks(): Observable<Bookmark[]> {
    return this._bookmarks.asObservable();
  }

  public refreshBookmarks(): void {
    chrome.bookmarks.getTree((root: Bookmark[]) => this.handleTreeRoot(root));
  }

  private handleTreeRoot(root: BookmarkTreeNode[]): void {
    let result = [];
    root.forEach((node: BookmarkTreeNode) => this.handleTreeNode(node, result));
    this._bookmarks.next(result);
  }

  private handleTreeNode(node: Bookmark, result: Bookmark[]): void {
    if (node.children) {
      node.children.forEach((node: Bookmark) => this.handleTreeNode(node, result));
    } else {
      let bookmark = new Bookmark(node.title, node.url);
      result.push(bookmark);
    }
  }

}
