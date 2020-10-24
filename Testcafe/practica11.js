import page from './pageModel';

fixture('Test con testcade')
    .page('https://the-internet.herokuapp.com/')

test('Probar Horizontal Slider', async t => {

    await t
        .click(page.link11)

    await t
        .click(page.slider)
        .typeText(page.slider,'3.5', {spee: 0.1})
        .expect(page.slider.value).eql('3.5')


});
// hacer una prueba para precionar teclas y mover el slider

