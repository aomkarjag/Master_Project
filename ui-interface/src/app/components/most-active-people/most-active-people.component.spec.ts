import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostActivePeopleComponent } from './most-active-people.component';

describe('MostActivePeopleComponent', () => {
  let component: MostActivePeopleComponent;
  let fixture: ComponentFixture<MostActivePeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostActivePeopleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostActivePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
