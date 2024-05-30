import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { BatalharPage } from './batalhar.page';

describe('BatalharPage', () => {
  let component: BatalharPage;
  let fixture: ComponentFixture<BatalharPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatalharPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BatalharPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
