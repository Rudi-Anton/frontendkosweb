import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenghunicreateComponent } from './penghunicreate.component';

describe('PenghunicreateComponent', () => {
  let component: PenghunicreateComponent;
  let fixture: ComponentFixture<PenghunicreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenghunicreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenghunicreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
