import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneOneComponent } from './scene-one.component';

describe('SceneOneComponent', () => {
  let component: SceneOneComponent;
  let fixture: ComponentFixture<SceneOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
