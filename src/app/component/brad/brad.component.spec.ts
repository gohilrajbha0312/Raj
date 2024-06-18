import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BradComponent } from './brad.component';

describe('BradComponent', () => {
  let component: BradComponent;
  let fixture: ComponentFixture<BradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BradComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
