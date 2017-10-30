import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenghunieditComponent } from './penghuniedit.component';

describe('PenghunieditComponent', () => {
  let component: PenghunieditComponent;
  let fixture: ComponentFixture<PenghunieditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenghunieditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenghunieditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
