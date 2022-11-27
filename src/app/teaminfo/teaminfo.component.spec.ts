


import { TestBed } from '@angular/core/testing';

import { TeaminfoComponent } from './teaminfo.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TeaminfoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TeaminfoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

 // it(`should have as title 'get-started-angular'`, () => {
 //   const fixture = TestBed.createComponent(ClientsurveyComponent);
 //   const clientsurvey = fixture.componentInstance;
 //   expect(clientsurvey.title).toEqual('get-started-angular');
 // });

  it('should render title', () => {
    const fixture = TestBed.createComponent(TeaminfoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('get-started-angular app is running!');
  });
});