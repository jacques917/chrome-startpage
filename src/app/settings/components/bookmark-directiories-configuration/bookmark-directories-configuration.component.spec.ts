import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkDirectioriesConfigurationComponent } from './bookmark-directories-configuration.component';

describe('BookmarkDirectioriesConfigurationComponent', () => {
  let component: BookmarkDirectioriesConfigurationComponent;
  let fixture: ComponentFixture<BookmarkDirectioriesConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkDirectioriesConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkDirectioriesConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
