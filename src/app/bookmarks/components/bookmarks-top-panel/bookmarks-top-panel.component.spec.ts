import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksTopPanelComponent } from './bookmarks-top-panel.component';

describe('BookmarksTopPanelComponent', () => {
  let component: BookmarksTopPanelComponent;
  let fixture: ComponentFixture<BookmarksTopPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksTopPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksTopPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
