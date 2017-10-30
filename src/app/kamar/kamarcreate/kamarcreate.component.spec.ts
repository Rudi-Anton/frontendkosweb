import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamarcreateComponent } from './kamarcreate.component';

describe('KamarcreateComponent', () => {
  let component: KamarcreateComponent;
  let fixture: ComponentFixture<KamarcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamarcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamarcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
