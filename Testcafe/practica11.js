import page from './pageModel';

fixture('Test con testcade')
    .page('https://the-internet.herokuapp.com/')

test('Probar Horizontal Slider', async t => {

    await t
        .click(page.link11)

    await t
        .click(page.slider11)
        .typeText(page.slider11,'3.5', {spee: 0.1})
        .expect(page.slider11.value).eql('3.5')


});
// hacer una prueba para precionar teclas y mover el slider

test('Probar Mover Slider con las flechas', async t => {
    await t
        .click(page.link11)
    await t
        .click(page.slider11)
        .pressKey('RIGHT')
        .pressKey('RIGHT')
        .pressKey('RIGHT')
        .wait(500)
        .expect(page.slider11.value).eql('1.5')
        .pressKey('RIGHT')
        .pressKey('RIGHT')
        .wait(500)
        .expect(page.slider11.value).eql('2.5')
        .pressKey('LEFT')
        .wait(500)
        .expect(page.slider11.value).eql('2')
});

