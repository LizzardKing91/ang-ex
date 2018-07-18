import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolcarComponent } from './coolcar.component';

describe('CoolcarComponent', () => {
  let component: CoolcarComponent;
  let fixture: ComponentFixture<CoolcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
