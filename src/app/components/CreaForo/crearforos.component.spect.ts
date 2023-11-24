import { ComponentFixture, TestBed} from "@angular/core/testing";
import {CrearforosComponent} from "./crearforos.component";

describe('CrearforosComponent', () => {
  let component: CrearforosComponent;
  let fixture: ComponentFixture<CrearforosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearforosComponent]
    });
    fixture = TestBed.createComponent(CrearforosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
