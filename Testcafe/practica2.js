import {Selector} from 'testcafe';
import page from './pageModel';

fixture ('Practica 2 con testcade')
    .page ('https://the-internet.herokuapp.com/');

test ('Probar dar click en un enlance', async t => {
    await t
        .click(page.link2)
    await t
       // .expect(page.text21.exists).ok();    
       //.expect(page.text21.innerText).contains('A/B Test Variation 1');  

    if(page.text21.innerText == "A/B Test Control" || "A/B Test Variation 1" || "A/B Test Variation") {
        console.log("Pasa prueba")
    }else{
        //Vericar que fallo el test
        console.log("No paso")
    }

});
