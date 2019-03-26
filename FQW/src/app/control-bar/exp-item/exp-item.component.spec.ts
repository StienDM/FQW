import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpItemComponent } from './exp-item.component';

describe('ExpItemComponent', () => {
  let component: ExpItemComponent;
  let fixture: ComponentFixture<ExpItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
