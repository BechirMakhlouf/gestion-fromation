import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceFormateursComponent } from './espace-formateurs.component';

describe('EspaceFormateursComponent', () => {
  let component: EspaceFormateursComponent;
  let fixture: ComponentFixture<EspaceFormateursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceFormateursComponent]
    });
    fixture = TestBed.createComponent(EspaceFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
