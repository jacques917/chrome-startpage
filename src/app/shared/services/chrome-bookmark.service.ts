///<reference path="../../../../node_modules/@types/chrome/index.d.ts" />

import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Bookmark} from "../model/bookmark";
import {BookmarkService} from "./bookmark-service";
import {Observable} from "rxjs/Observable";
import BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode;
import "rxjs/add/observable/of";
import {Subject} from "rxjs/Subject";
import {Directory} from "../model/directory";

@Injectable()
export class ChromeBookmarkService implements BookmarkService {

  constructor() {
    this.refreshBookmarks();
  }
  private _bookmarks = new BehaviorSubject<Bookmark[]>([]);

  get bookmarks(): Observable<Bookmark[]> {
    return this._bookmarks.asObservable();
  }

  getBookmarksSubtree(id: string): Observable<Bookmark[]> {
    let result = new Subject<Bookmark[]>();
    chrome.bookmarks.getSubTree(id, (subTree: Bookmark[]) => result.next(subTree));
    return result;
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

  getAllBookmarkDirectories(zone: NgZone): Observable<Directory[]> {
    let result = new Subject<Bookmark[]>();
    let directories: Directory[] = [];
    chrome.bookmarks.getTree((root: Bookmark[]) => {
      root.forEach(node => this.filterDirectories(node, directories));
      zone.run(() => result.next(directories));
    });
    return result;
  }

  private filterDirectories(node: Bookmark, result: Directory[]): void {
    if (node.url == null && node.title !== "") {
      let dir = new Directory(node.title, null);
      dir.childrenCount = node.children.length;
      dir.id = node.id;
      result.push(dir);
    }
    if (node.children) {
      node.children.forEach((child: Bookmark) => this.filterDirectories(child, result));
    }
  }

}
