import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatListModule} from "@angular/material";
import {SharedModule} from "../shared/shared.module";
import {BookmarkViewComponent} from "./components/bookmark-view/bookmark-view.component";
import { BookmarksTopPanelComponent } from './components/bookmarks-top-panel/bookmarks-top-panel.component';

@NgModule({
  exports: [BookmarkViewComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    SharedModule
  ],
  declarations: [BookmarkViewComponent, BookmarksTopPanelComponent]
})
export class BookmarksModule { }
