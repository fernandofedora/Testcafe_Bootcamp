import page from './pageModel';

fixture('Test con testcade')
    .page('https://the-internet.herokuapp.com/')

<<<<<<< HEAD
test('Probar un clinck derecho en una ventana js alert', async t => {
=======
test('Probar un clinck derecho', async t => {
>>>>>>> master

    await t
        .click(page.link10)

    await t
        
<<<<<<< HEAD
        .setNativeDialogHandler(() => true)
        .rightClick(page.hotspot101)

        const history = await t.getNativeDialogHistory();

        console.log(history)
    
    await t

        .wait(200)
        .expect(history[0].type).eql('alert')
        .expect(history[0].text).eql('You selected a context menu')
        .expect(history[0].url).eql('https://the-internet.herokuapp.com/context_menu')
=======
        .setNativeDialogHandler()
        .rightClick(page.hostpot101)
>>>>>>> master



});