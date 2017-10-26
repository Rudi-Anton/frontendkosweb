import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenjagaeditComponent } from './penjagaedit.component';

describe('PenjagaeditComponent', () => {
  let component: PenjagaeditComponent;
  let fixture: ComponentFixture<PenjagaeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenjagaeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenjagaeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
