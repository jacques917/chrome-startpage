import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from "@angular/material";
import {SharedModule} from "../shared/shared.module";
import {BookmarkViewComponent} from "./components/bookmark-view/bookmark-view.component";

@NgModule({
  exports: [BookmarkViewComponent],
  imports: [
    CommonModule,
    MatListModule,
    SharedModule
  ],
  declarations: [BookmarkViewComponent]
})
export class BookmarksModule { }
