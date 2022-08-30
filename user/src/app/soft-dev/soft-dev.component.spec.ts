import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftDevComponent } from './soft-dev.component';

describe('SoftDevComponent', () => {
  let component: SoftDevComponent;
  let fixture: ComponentFixture<SoftDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
