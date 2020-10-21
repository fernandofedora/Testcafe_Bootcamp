import page from './pageModel';

fixture('Test con testcade')
    .page('https://the-internet.herokuapp.com/')

test('Probar inputs', async t => {
    await t
        .click(page.link6)

    await t
        .click(page.addBtn61)
        
    await t
        .expect(page.removeBtn62.visible).notOK()
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)

        .expect(page.removeBtn62.visible).ok()
        .wait(3000)

        .click(page.removeBtn62)
        .click(page.removeBtn63)
        .click(page.removeBtn64)
        .expect(page.removeBtn62.visible).notOK()

    });

    //agregar dos pruebas mas