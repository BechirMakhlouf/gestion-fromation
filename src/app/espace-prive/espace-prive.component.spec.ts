import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePriveComponent } from './espace-prive.component';

describe('EspacePriveComponent', () => {
  let component: EspacePriveComponent;
  let fixture: ComponentFixture<EspacePriveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspacePriveComponent]
    });
    fixture = TestBed.createComponent(EspacePriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
