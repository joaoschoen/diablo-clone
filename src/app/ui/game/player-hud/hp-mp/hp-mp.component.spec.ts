import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpMpComponent } from './hp-mp.component';

describe('HpMpComponent', () => {
  let component: HpMpComponent;
  let fixture: ComponentFixture<HpMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HpMpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
