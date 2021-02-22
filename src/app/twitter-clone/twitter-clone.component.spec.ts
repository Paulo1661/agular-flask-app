import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterCloneComponent } from './twitter-clone.component';

describe('TwitterCloneComponent', () => {
  let component: TwitterCloneComponent;
  let fixture: ComponentFixture<TwitterCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterCloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
