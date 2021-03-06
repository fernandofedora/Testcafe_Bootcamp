import page from './pageModel';

fixture('Test con testcafe')
    .page ('https://formy-project.herokuapp.com/form');

test('probando primer formulario', async t => {
    await t
        .typeText(page.input71,'Fernando', {speed: 0.1})
        .expect(page.input71.value).eql('Fernando')

        .typeText(page.input72,'Espinoza')
        .expect(page.input72.value).eql('Espinoza')

        .typeText(page.input73,'Qa ingenerr')
        .expect(page.input73.value).eql('Qa ingenerr')

        .click(page.rbtn74)
        .expect(page.rbtn74.checked).ok()
        .click(page.rbtn75)
        .click(page.rbtn76)

        .click(page.checkbok77)
        .click(page.checkbok78)
        .click(page.checkbok79)

        .click(page.smenu701)
        .click(page.opt702)

        .typeText(page.date703,"111111")
        .click(page.btn704)

        await t
            .expect(page.text705.visible).ok()

});
// tara para el sabado  agregar los checked para los cheboxs
//Tara para el sabado hacer pruebas para el autenticaction https://the-internet.herokuapp.com/login - sabado o domingo
