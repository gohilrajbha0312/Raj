import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToughComponent } from './tough.component';

describe('ToughComponent', () => {
  let component: ToughComponent;
  let fixture: ComponentFixture<ToughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToughComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
