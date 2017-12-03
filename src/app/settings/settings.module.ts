import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsViewComponent} from './components/settings-view/settings-view.component';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule,
  MatTableModule
} from "@angular/material";
import { BookmarkDirectoriesConfigurationComponent } from './components/bookmark-directiories-configuration/bookmark-directories-configuration.component';
import { OtherSettingsComponent } from './components/other-settings/other-settings.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatTableModule
  ],
  declarations: [SettingsViewComponent, BookmarkDirectoriesConfigurationComponent, OtherSettingsComponent]
})
export class SettingsModule { }
