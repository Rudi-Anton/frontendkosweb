import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoseditComponent } from './kosedit.component';

describe('KoseditComponent', () => {
  let component: KoseditComponent;
  let fixture: ComponentFixture<KoseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
