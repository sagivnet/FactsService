import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsHeaderComponent } from './facts-header.component';

describe('FactsHeaderComponent', () => {
  let component: FactsHeaderComponent;
  let fixture: ComponentFixture<FactsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
