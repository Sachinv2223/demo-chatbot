import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualMsgComponent } from './individual-msg.component';

describe('IndividualMsgComponent', () => {
  let component: IndividualMsgComponent;
  let fixture: ComponentFixture<IndividualMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualMsgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
