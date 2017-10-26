import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoscreateComponent } from './koscreate.component';

describe('KoscreateComponent', () => {
  let component: KoscreateComponent;
  let fixture: ComponentFixture<KoscreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoscreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
