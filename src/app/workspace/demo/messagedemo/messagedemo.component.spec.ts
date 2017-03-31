import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagedemoComponent } from './messagedemo.component';

describe('MessagedemoComponent', () => {
  let component: MessagedemoComponent;
  let fixture: ComponentFixture<MessagedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
