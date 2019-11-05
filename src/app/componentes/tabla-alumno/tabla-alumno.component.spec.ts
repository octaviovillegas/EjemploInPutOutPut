import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAlumnoComponent } from './tabla-alumno.component';

describe('TablaAlumnoComponent', () => {
  let component: TablaAlumnoComponent;
  let fixture: ComponentFixture<TablaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
