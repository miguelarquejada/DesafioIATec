import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMembersComponent } from './report-members.component';

describe('ReportMembersComponent', () => {
  let component: ReportMembersComponent;
  let fixture: ComponentFixture<ReportMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
