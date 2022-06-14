import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowThComponent } from './show-th.component';

describe('ShowThComponent', () => {
  let component: ShowThComponent;
  let fixture: ComponentFixture<ShowThComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowThComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
