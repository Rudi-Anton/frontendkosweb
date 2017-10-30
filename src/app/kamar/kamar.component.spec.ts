import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamarComponent } from './kamar.component';

describe('KamarComponent', () => {
  let component: KamarComponent;
  let fixture: ComponentFixture<KamarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
