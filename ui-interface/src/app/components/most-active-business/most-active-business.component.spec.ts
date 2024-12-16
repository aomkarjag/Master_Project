import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostActiveBusinessComponent } from './most-active-business.component';

describe('MostActiveBusinessComponent', () => {
  let component: MostActiveBusinessComponent;
  let fixture: ComponentFixture<MostActiveBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostActiveBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostActiveBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
