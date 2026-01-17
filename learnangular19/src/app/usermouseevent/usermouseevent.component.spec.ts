import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermouseeventComponent } from './usermouseevent.component';

describe('UsermouseeventComponent', () => {
  let component: UsermouseeventComponent;
  let fixture: ComponentFixture<UsermouseeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsermouseeventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermouseeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
