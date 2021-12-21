import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMemberDialogComponent } from './insert-member-dialog.component';

describe('InsertMemberDialogComponent', () => {
  let component: InsertMemberDialogComponent;
  let fixture: ComponentFixture<InsertMemberDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMemberDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
