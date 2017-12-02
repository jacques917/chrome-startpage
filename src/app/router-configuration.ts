import {Routes} from "@angular/router";
import {BookmarkViewComponent} from "./bookmarks/components/bookmark-view/bookmark-view.component";
import {SettingsViewComponent} from "./settings/components/settings-view/settings-view.component";

export const appRoutes: Routes = [
  {path: '', component: BookmarkViewComponent},
  {path: 'settings', component: SettingsViewComponent}
];
