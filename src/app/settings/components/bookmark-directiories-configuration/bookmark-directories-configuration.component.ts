import {Component, NgZone, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {BookmarkService} from "../../../shared/services/bookmark-service";
import {Directory} from "../../../shared/model/directory";
import {SettingsService} from "../../../shared/services/settings.service";
import {SETTINGS_PARAMETERS} from "../../../shared/model/settings-parameters";

@Component({
  selector: 'app-bookmark-directories-configuration',
  templateUrl: './bookmark-directories-configuration.component.html',
  styleUrls: ['./bookmark-directories-configuration.component.scss']
})
export class BookmarkDirectoriesConfigurationComponent implements OnInit {

  tableColumns = ['id', 'title', 'childrenCount', 'actions'];

  dataSource = new MatTableDataSource<Directory>([]);

  constructor(private bookmarkService: BookmarkService,  private zone:NgZone, private settingsService: SettingsService) {
    this.bookmarkService.getAllBookmarkDirectories(this.zone)
      .subscribe(value => {
        this.dataSource.connect().next(value);
      })
  }

  ngOnInit() {
  }

  selectAsTopPanelSource(id: string) {
    this.settingsService.saveParameter(SETTINGS_PARAMETERS.TOP_PANEL_SOURCE, id);
  }

  selectAsSidePanelSource(id: string) {
    this.settingsService.saveParameter(SETTINGS_PARAMETERS.SIDE_PANEL_SOURCE, id);
  }

}
