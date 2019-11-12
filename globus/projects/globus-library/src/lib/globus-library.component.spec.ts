import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobusLibraryComponent } from './globus-library.component';

describe('GlobusLibraryComponent', () => {
  let component: GlobusLibraryComponent;
  let fixture: ComponentFixture<GlobusLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobusLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobusLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
