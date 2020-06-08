import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEnvironmentComponent } from './modify-environment.component';

describe('ModifyEnvironmentComponent', () => {
  let component: ModifyEnvironmentComponent;
  let fixture: ComponentFixture<ModifyEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
