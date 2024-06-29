import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarProveedoresComponent } from './gestionar-proveedores.component';

describe('GestionarProveedoresComponent', () => {
  let component: GestionarProveedoresComponent;
  let fixture: ComponentFixture<GestionarProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionarProveedoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionarProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
