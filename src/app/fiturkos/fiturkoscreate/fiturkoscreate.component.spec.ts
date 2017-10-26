import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiturkoscreateComponent } from './fiturkoscreate.component';

describe('FiturkoscreateComponent', () => {
  let component: FiturkoscreateComponent;
  let fixture: ComponentFixture<FiturkoscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiturkoscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiturkoscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
