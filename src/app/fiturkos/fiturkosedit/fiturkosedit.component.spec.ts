import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiturkoseditComponent } from './fiturkosedit.component';

describe('FiturkoseditComponent', () => {
  let component: FiturkoseditComponent;
  let fixture: ComponentFixture<FiturkoseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiturkoseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiturkoseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
