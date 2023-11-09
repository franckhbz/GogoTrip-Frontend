import { ComponentFixture, TestBed} from "@angular/core/testing";
import {PlanescomunidadComponent} from "./planescomunidad.component";

describe('PlanescomunidadComponent', () => {
  let component: PlanescomunidadComponent;
  let fixture: ComponentFixture<PlanescomunidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanescomunidadComponent]
    });
    fixture = TestBed.createComponent(PlanescomunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
