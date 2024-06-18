import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolenteerComponent } from './volenteer.component';

describe('VolenteerComponent', () => {
  let component: VolenteerComponent;
  let fixture: ComponentFixture<VolenteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolenteerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VolenteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
