import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caro2Component } from './caro2.component';

describe('Caro2Component', () => {
  let component: Caro2Component;
  let fixture: ComponentFixture<Caro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
