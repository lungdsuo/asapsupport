import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Index9Component } from './index9.component';

describe('Index9Component', () => {
  let component: Index9Component;
  let fixture: ComponentFixture<Index9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Index9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
