import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let comp: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContactComponent);
        comp = fixture.componentInstance; // ContactComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  }));

  it('should render "Contact us" title', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Contact us');
  });

  // it(should call onSubmited to be true`, async(() => {
  //   comp.onSubmit();
  //   expect(comp.submitted).toBeTruthy();
  // }));

  // it(`should call the onSubmit method`, async(() => {
  //   spyOn(comp, 'onSubmit');
  //   el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   el.click();
  //   expect(comp.onSubmit).toHaveBeenCalled();
  // }));
  it(`should call submitted to be true`, async(() => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  }));

  it(`form should be invalid`, async(() => {
    comp.contactForm.controls['name'].setValue('');
    comp.contactForm.controls['age'].setValue('');
    comp.contactForm.controls['comments'].setValue('');
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it(`form buttom must be disabled with invalid name`, async(() => {
    comp.contactForm.controls['name'].setValue('Ana123');
    comp.contactForm.controls['age'].setValue('23');
    comp.contactForm.controls['comments'].setValue('Test comments 21');
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it(`form buttom must be disabled with empty name`, async(() => {
    comp.contactForm.controls['name'].setValue('');
    comp.contactForm.controls['age'].setValue('34');
    comp.contactForm.controls['comments'].setValue('Test comments a');
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it(`form buttom must be disabled with characters in age`, async(() => {
    comp.contactForm.controls['name'].setValue('Ana');
    comp.contactForm.controls['age'].setValue('2a');
    comp.contactForm.controls['comments'].setValue('Test comments rr');
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it(`form buttom must be disabled with age bigger than 99 (more than two digits)`, async(() => {
    comp.contactForm.controls['name'].setValue('Ana');
    comp.contactForm.controls['age'].setValue('100');
    comp.contactForm.controls['comments'].setValue('Test comments');
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it(`form buttom must be disabled with empty age`, async(() => {
    comp.contactForm.controls['name'].setValue('Ana');
    comp.contactForm.controls['age'].setValue('');
    comp.contactForm.controls['comments'].setValue('Test comments');
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it(`form buttom must be disabled with empty comments`, async(() => {
    comp.contactForm.controls['name'].setValue('Ana');
    comp.contactForm.controls['age'].setValue('65');
    comp.contactForm.controls['comments'].setValue('');
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it(`form buttom must be disabled with comments with more than 30 characters`, async(() => {
    comp.contactForm.controls['name'].setValue('Ana');
    comp.contactForm.controls['age'].setValue('65');
    comp.contactForm.controls['comments'].setValue(
      'Estes es un poema del cantar del Mio Cid, escrito en Castellano, de un tiempo en el que...'
    );
    expect(comp.contactForm.valid).toBeFalsy();
  }));

  it(`form buttom must be valid`, async(() => {
    comp.contactForm.controls['name'].setValue('Ana');
    comp.contactForm.controls['age'].setValue('65');
    comp.contactForm.controls['comments'].setValue('Lorem ipsum');
    expect(comp.contactForm.valid).toBeTruthy();
  }));
});
