import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispayPdfComponent } from './dispay-pdf.component';

describe('DispayPdfComponent', () => {
  let component: DispayPdfComponent;
  let fixture: ComponentFixture<DispayPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispayPdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispayPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
