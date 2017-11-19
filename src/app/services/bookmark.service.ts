///<reference path="../../../node_modules/@types/chrome/index.d.ts" />

import {Injectable} from '@angular/core';
import BookmarkTreeNode = chrome.bookmarks.BookmarkTreeNode;
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Bookmark} from "../model/bookmark";

@Injectable()
export class BookmarkService {

  constructor() {
    this.getBookmarks();
  }

  private _bookmarks = new BehaviorSubject<Bookmark[]>([]);

  get bookmarks(): BehaviorSubject<Bookmark[]> {
    return this._bookmarks;
  }

  public getBookmarks(): void {
    chrome.bookmarks.getTree((root: BookmarkTreeNode[]) => this.handleTreeRoot(root));
  }

  private handleTreeRoot(root: BookmarkTreeNode[]): void {
    let result = [];
    root.forEach((node: BookmarkTreeNode) => this.handleTreeNode(node, result));
    this._bookmarks.next(result);
  }

  private handleTreeNode(node: BookmarkTreeNode, result: Bookmark[]): void {
    if (node.children) {
      node.children.forEach((node: BookmarkTreeNode) => this.handleTreeNode(node, result));
    } else {
      let bookmark = new Bookmark(node.title, node.url);
      result.push(bookmark);
    }
  }

}
