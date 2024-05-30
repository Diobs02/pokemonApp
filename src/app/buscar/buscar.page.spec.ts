import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BuscarPage } from './buscar.page';



describe('Tab1Page', () => {
  let component: BuscarPage;
  let fixture: ComponentFixture<BuscarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
