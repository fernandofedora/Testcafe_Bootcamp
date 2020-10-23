import page from './pageModel';

fixture('Test con testcade')
    .page('https://the-internet.herokuapp.com/')

test('Probar un clinck derecho', async t => {

    await t
        .click(page.link10)

    await t
        
        .setNativeDialogHandler()
        .rightClick(page.hostpot101)



});