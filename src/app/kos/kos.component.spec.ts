import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KosComponent } from './kos.component';

describe('KosComponent', () => {
  let component: KosComponent;
  let fixture: ComponentFixture<KosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
