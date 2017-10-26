import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenjagacreateComponent } from './penjagacreate.component';

describe('PenjagacreateComponent', () => {
  let component: PenjagacreateComponent;
  let fixture: ComponentFixture<PenjagacreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenjagacreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenjagacreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
