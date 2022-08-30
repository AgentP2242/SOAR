import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraAdminComponent } from './infra-admin.component';

describe('InfraAdminComponent', () => {
  let component: InfraAdminComponent;
  let fixture: ComponentFixture<InfraAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfraAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
