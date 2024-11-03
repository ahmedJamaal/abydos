import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverContactComponent } from './cover-contact.component';

describe('CoverContactComponent', () => {
  let component: CoverContactComponent;
  let fixture: ComponentFixture<CoverContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
