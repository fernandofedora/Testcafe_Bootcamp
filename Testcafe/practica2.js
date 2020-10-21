import {Selector} from 'testcafe';
import page from './pageModel';

fixture ('Practica 2 con testcade')
    .page ('https://the-internet.herokuapp.com/');

test ('Probar dar click en un enlance', async t => {
    await t
        .click(page.link2)
    await t
       // .expect(page.text21.exists).ok();    
     //  .expect(page.text21.innerText).contains('A/B Test Variation 1' || 'A/B Test Control' || 'A/B Test Variation');  

   // if( await t .expect(page.text21.innerText == "A/B Test Control" || "A/B Test Variation 1" || "A/B Test Variation" .eql(page.text21.innerText == "A/B Test Control" || "A/B Test Variation 1" || "A/B Test Variation")))   {
    if (page.text21.innerText == "A/B 1Test Control" || "A/B Test Variation 1" || "A/B 1Test Variation") { 
       
      // .expect(page.text21.innerText).eql('A/B Test Variation 1' || 'A/B Test Control' || 'A/B Test Variation' ) await t.expect(page.text21.innerText).match(/^A/, 'this assertion will be passed');
       //.expect('true').eql('true')
      //await t .expect(page.text21.innerText).eql('A/B Test Variation 1','A/B Test Control','A/B Test Variation')
      // .expect(page.text21.innerText).eql('A/B Test Variation')
       // console.log("Pasa prueba")
       await t.expect(page.text21.innerText).match(/^A/, 'this assertion will not be passed')

    } else if(page.text21.innerText == "A/B Test Control" || "A/B Test Variation 1" || "A/B Test Variation") { 

        await t.expect(page.text21.innerText).match(/^z/, 'this assertion will not be passed');
         
       
        } else{
            console.log("No paso")
      //if  (apage.text21.innerText == "A/B Test Control" || "A/B Test Variation 1" || "A/B Test Variation")
      //await t.click(myOtherElement);
        await t.expect(page.text21.innerText).match(/^p/, 'this assertion will not be passed');
        //.expect(b == 'false').eql( b=='true')
        //Vericar que fallo el test
        
        console.log("No paso")
        
       
    }

});
