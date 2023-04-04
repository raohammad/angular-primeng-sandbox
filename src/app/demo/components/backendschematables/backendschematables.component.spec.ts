import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendschematablesComponent } from './backendschematables.component';

describe('BackendschematablesComponent', () => {
  let component: BackendschematablesComponent;
  let fixture: ComponentFixture<BackendschematablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendschematablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendschematablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
