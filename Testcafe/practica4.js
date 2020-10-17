import page from './pageModel';

fixture('Test con testcade')
    .page('https://the-internet.herokuapp.com/')

test('Probar checkbox', async t => {
    await t
        .click(page.link4)

    await t
        .click(page.baseCheckbox.nth(1))
    await t
    expect(page.baseCheckbox.nth(1).checked).notOk()
    expect(page.baseCheckbox.nth(3).checked).notOk()

});