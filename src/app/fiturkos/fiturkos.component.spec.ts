import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiturkosComponent } from './fiturkos.component';

describe('FiturkosComponent', () => {
  let component: FiturkosComponent;
  let fixture: ComponentFixture<FiturkosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiturkosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiturkosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
