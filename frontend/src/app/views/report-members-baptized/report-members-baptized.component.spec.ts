import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMembersBaptizedComponent } from './report-members-baptized.component';

describe('ReportMembersBaptizedComponent', () => {
  let component: ReportMembersBaptizedComponent;
  let fixture: ComponentFixture<ReportMembersBaptizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMembersBaptizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMembersBaptizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
