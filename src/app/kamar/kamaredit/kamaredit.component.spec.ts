import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamareditComponent } from './kamaredit.component';

describe('KamareditComponent', () => {
  let component: KamareditComponent;
  let fixture: ComponentFixture<KamareditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamareditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamareditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
