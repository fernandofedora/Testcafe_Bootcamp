import {Selector} from 'testcafe';
import page from './pageModel';

fixture ('Practica 2 con testcade')
    .page ('https://the-internet.herokuapp.com/');

    const abText = Selector('h3')
test ('Probar dar click en un enlance', async t => {
    await t
        .click(page.link2)

    const abTextElement = await abText()
    console.log(abTextElement.innerText)
    await t
    /*
    if (page.text21.innerText == "A/B Test Control" || "A/B Test Variation 1" || "A/B Test Variation") { 
       
       await t.expect(page.text21.innerText).match(/^A/, 'this assertion will  be passed')

    } else{
            console.log("No paso")
     
        await t.expect(page.text21.innerText).match(/^p/, 'this assertion will not be passed');
        //.expect(b == 'false').eql( b=='true')
        //Vericar que fallo el test
        
        console.log("No paso")
        
       
    }*/
    if (abTextElement.innerText == "A/B Test Control" || abTextElement.innerText == "A/B Test Variation 1" || abTextElement.innerText == "A/B Test Variation" ){
        await t.expect(true).ok("Si pasa")
    } else {
        await t.expect(false).ok("No pasa")
    }

});
