import page from './pageModel';

fixture('Test con testcade')
    .page('https://the-internet.herokuapp.com/')

test('Probar checkbox', async t => {
    await t
        .click(page.link4)

    await t
        .click(page.baseCheckbox.nth(0))
    
    await t.expect(page.baseCheckbox.nth(0).checked).notOk()
    await t.expect(page.baseCheckbox.nth(1).checked).notOk()

    

});

test('Probar checkbox y seleccionado', async t => {
    await t
        .click(page.link4)

    await t
        .click(page.baseCheckbox.nth(0))
    
    await t.expect(page.baseCheckbox.nth(0).checked).ok()
    await t.expect(page.baseCheckbox.nth(1).checked).ok()

    

});

test('Probar checkboxes y seleccionados', async t =>{
       await t      
         .click(page.link4)  

        await t.click(page.baseCheckbox.nth(0))
            await t.expect(page.baseCheckbox.nth(0).checked).ok()     await t.expect(page.baseCheckbox.nth(1).checked).ok() }); 