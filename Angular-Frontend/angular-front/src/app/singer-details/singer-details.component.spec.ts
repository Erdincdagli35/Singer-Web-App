import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerDetailsComponent } from './singer-details.component';

describe('SingerDetailsComponent', () => {
  let component: SingerDetailsComponent;
  let fixture: ComponentFixture<SingerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
