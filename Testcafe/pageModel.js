import {Selector} from 'testcafe';

class Page {
    constructor () {
    //Prueba 2
        this.link2 = Selector('a').withText('A/B Testing');
        //this.text21 = Selector ('h3').withText('A/B Test Variation 1');
        this.text21 = Selector('#content > div > h3');
        
        //Practica 3
        this.link3 = Selector('a').withText('Forgot Password');
        this.input31 = Selector ('#email');
        this.button32 = Selector ('#form_submit');
        this.text33 = Selector ('#content');
        this.textErro = Selector ('body > h1')

        //Practica 4
        this.link4 = Selector('a').withText('Checkboxes');
        //checbox padre
        this.baseCheckbox = Selector('#checkboxes > input[type=checkbox]')

        //chebox hijos
        //this.checbox41 = Selector ('#checkboxes > input[type=checkbox]:nth-child(1)');
        this.checbox41 = Selector ('#checkboxes > input[type=checkbox]:nth-child(3)');

        //practica5
        this.link5 = Selector('a').withText('Inputs');
        this.input51 = Selector ('#content > div > div > div > input[type=number]');

        //pratica6
        this.link6 = Selector('a').withText('Add/Remove Elements');
        this.addBtn61 = Selector('#content > div > button')
        this.removeBtn62 = Selector('#elements > button')
        this.removeBtn63 = Selector ('#elements > button:nth-child(2)')
        this.removeBtn64 = Selector ('#elements > button:nth-child(3)')

<<<<<<< HEAD
        
        //Practica 7
        this.input71 = Selector('#first-name');
        this.input72 = Selector('#last-name');
=======
        //practica1
        this.input71 = Selector('#first-name')
        this.input72 = Selector('#last-name')
>>>>>>> master
        this.input73 = Selector('#job-title');

        this.rbtn74 = Selector('#radio-button-1');
        this.rbtn75 = Selector('#radio-button-2');
        this.rbtn76 = Selector('#radio-button-3');

<<<<<<< HEAD
        this.checkbox77 = Selector('#checkbox-1');
        this.checkbox78 = Selector('#checkbox-2');
        this.checkbox79 = Selector('#checkbox-3');
=======
        this.checkbok77 = Selector('#checkbox-1');
        this.checkbok78 = Selector('#checkbox-2');
        this.checkbok79 = Selector('#checkbox-3');
>>>>>>> master

        this.smenu701 = Selector('#select-menu');
        this.opt702 = Selector('#select-menu > option:nth-child(2)');

        this.date703 = Selector('#datepicker');
        this.btn704 = Selector('body > div > form > div > div:nth-child(15) > a');
<<<<<<< HEAD
        //#datepicker
        this.text705 = Selector('h1').withText('Thanks for submitting your form');
        this.text706 = Selector('body > div > div');


         //Practica 9
        this.link9 = Selector('a').withText('Key Presses');
        this.text91 = Selector('#result');

        //Practica 10
        this.link10 = Selector('a').withText('Context Menu');
        this.hotspot101 = Selector('#hot-spot');

        //practica 11
        this.link11 = Selector('a').withText('Horizontal Slider');
        this.slider = Selector('#content > div > div > input[type=range]');

        //practica12

        this.sliderObj = Selector('#slider');
        this.slider = {
            handle: Selector('.ui-slider-handle'),
            value:  Selector('.slider-value') };

=======

        this.text705 = Selector('h1').withText('Thanks for submitting your form');
        this.text706 = Selector('body > div > div');

        //datepicker
        //practica 9
        this.link9 = Selector('a').withText('Key Presses');
        this.text91 = Selector('#result');

        //practica10
        this.link10 = Selector('a').withText('Context Menu');
        this.hostpot101 = Selector('#hot-spot');
        
>>>>>>> master
    }
    
}
export default new Page ();