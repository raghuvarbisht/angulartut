import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlflowifelseComponent } from './controlflowifelse.component';

describe('ControlflowifelseComponent', () => {
  let component: ControlflowifelseComponent;
  let fixture: ComponentFixture<ControlflowifelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlflowifelseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlflowifelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
