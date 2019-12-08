import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetstartComponent } from './getstart.component';

describe('GetstartComponent', () => {
  let component: GetstartComponent;
  let fixture: ComponentFixture<GetstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
