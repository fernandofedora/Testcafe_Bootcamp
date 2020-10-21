import page from './pageModel';

fixture('Test con testcade')
    .page('https://the-internet.herokuapp.com/')

test('Probar inputs', async t => {
    await t
        .click(page.link5)

    await t
        .typeText(page.input51, "letras", {speed: 0.1})
        .expect(page.input51.value).eql("")

        .typeText(page.input51, "87979879", {speed: 0.1})
        .expect(page.input51.value).notEql("7687")
        .expect(page.input51.value).eql("87979879")

        .typeText(page.input51,"757", {replace: true})
        .typeText(page.input51,".@#!#!##8#%$%$#%%^$%^'{'!",{replace: true})
        console.log(page.input51.value)
        await t.expect(page.input51.value).eql("8")
    });
    //seperar los escripts dentro de 3 pruebas diferentes, para el proximo sabado