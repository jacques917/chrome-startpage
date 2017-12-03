import {Bookmark} from "./bookmark";

export class Directory extends Bookmark {

  constructor(title: string, url: string) {
    super(title, url);
  }

  childrenCount?:number = 0;

}
