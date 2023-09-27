import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServresComponent } from './servres.component';

describe('ServresComponent', () => {
  let component: ServresComponent;
  let fixture: ComponentFixture<ServresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
