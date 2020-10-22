import page from './pageModel';

fixture('Test con testcade')
    .page('https://the-internet.herokuapp.com/')

test('Probar formulario de recuperacion de contraseña', async t => {
    await t
        .click(page.link3)

    await t
        .expect(page.input31.exists).ok()
        .expect(page.button32.exists).ok()

});

test('Probar escribir email', async t => {
    await t
    .click(page.link3)
    .typeText(page.input31, 'noemail@email.com')
    .expect(page.input31.value).eql('noemail@email.com')
})

test('verificar envio de email', async t => {
    await t
      .click(page.link3)
    await t
        .typeText(page.input31, 'noemail@email.com')
        .expect(page.input31.value).eql('noemail@email.com')
        .click(page.button32)
    await t
    .expect(page.text33.innerText).contains('sent', 'prueba exitosa')
})
//hacer la preuba de el error 500, input basio

test('Verificar que los campos esten vacios', async t => {
    await t
        .click(page.link3)
    await t
        .click(page.button32)
    await t
        .expect(page.textErro.innerText).contains('Error','prueba exitosa')


});
   