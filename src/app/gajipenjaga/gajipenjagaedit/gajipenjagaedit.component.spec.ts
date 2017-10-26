import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GajipenjagaeditComponent } from './gajipenjagaedit.component';

describe('GajipenjagaeditComponent', () => {
  let component: GajipenjagaeditComponent;
  let fixture: ComponentFixture<GajipenjagaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GajipenjagaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GajipenjagaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
