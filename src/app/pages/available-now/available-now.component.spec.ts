import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableNowComponent } from './available-now.component';

describe('AvailableNowComponent', () => {
  let component: AvailableNowComponent;
  let fixture: ComponentFixture<AvailableNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
