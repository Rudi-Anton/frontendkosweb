import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GajipenjagaComponent } from './gajipenjaga.component';

describe('GajipenjagaComponent', () => {
  let component: GajipenjagaComponent;
  let fixture: ComponentFixture<GajipenjagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GajipenjagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GajipenjagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
