import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamardetailComponent } from './kamardetail.component';

describe('KamardetailComponent', () => {
  let component: KamardetailComponent;
  let fixture: ComponentFixture<KamardetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamardetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamardetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
