import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KosdetailComponent } from './kosdetail.component';

describe('KosdetailComponent', () => {
  let component: KosdetailComponent;
  let fixture: ComponentFixture<KosdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KosdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KosdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
