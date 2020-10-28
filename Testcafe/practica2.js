import {Selector} from 'testcafe';
import page from './pageModel';

fixture ('Practica 2 con testcade')
    .page ('https://the-internet.herokuapp.com/');

test ('Probar dar click en un enlance', async t => {
    await t
        .click(page.link2)
    await t
    if (page.text21.innerText == "A/B Test Control" || "A/B Test Variation 1" || "A/B Test Variation") { 
       
       await t.expect(page.text21.innerText).match(/^A/, 'this assertion will  be passed')

    } else{
            console.log("No paso")
     
        await t.expect(page.text21.innerText).match(/^p/, 'this assertion will not be passed');
        //.expect(b == 'false').eql( b=='true')
        //Vericar que fallo el test
        
        console.log("No paso")
        
       
    }

});
