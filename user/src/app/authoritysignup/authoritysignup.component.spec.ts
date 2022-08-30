import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoritysignupComponent } from './authoritysignup.component';

describe('AuthoritysignupComponent', () => {
  let component: AuthoritysignupComponent;
  let fixture: ComponentFixture<AuthoritysignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthoritysignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthoritysignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
