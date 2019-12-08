import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Index7Component } from './index7.component';

describe('Index7Component', () => {
  let component: Index7Component;
  let fixture: ComponentFixture<Index7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Index7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Index7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
