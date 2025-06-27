import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignitionCard } from './designition-card';

describe('DesignitionCard', () => {
  let component: DesignitionCard;
  let fixture: ComponentFixture<DesignitionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignitionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignitionCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
