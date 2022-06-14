import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditThComponent } from './add-edit-th.component';

describe('AddEditThComponent', () => {
  let component: AddEditThComponent;
  let fixture: ComponentFixture<AddEditThComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditThComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
