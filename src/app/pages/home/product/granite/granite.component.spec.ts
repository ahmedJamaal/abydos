import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraniteComponent } from './granite.component';

describe('GraniteComponent', () => {
  let component: GraniteComponent;
  let fixture: ComponentFixture<GraniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
