import page from './pageModel';

fixture('Test con testcade')
    .page('https://the-internet.herokuapp.com/')
    
test('Pruebas para login1, comprar que existe el titulo', async t => { 
    
    await t
        .click(page.link8)
        .expect(page.text8.innerText).eql('Login Page')


    });

    test('probar que el formularioe existe', async t => { 
    
        await t
            .click(page.link8)
            .expect(page.input81.visible).ok()
            .expect(page.input82.visible).ok()
            .expect(page.btnLogin8.visible).ok()
    
        });

    test('Pruebas para login2, dejar los campos vacios', async t => { 
        await t
            .click(page.link8)
        await t
            .click(page.btnLogin8)
        await t
            .expect(page.textError8.innerText).contains('invalid!')

     });
     test('Pruebas para login3, ingresar las credenciales correctas', async t => { 
        await t
            .click(page.link8)
            
        await t
            .typeText(page.input81, "tomsmith", {speed: 0.1})
            .expect(page.input81.value).eql('tomsmith')
            .typeText(page.input82, "SuperSecretPassword!", {speed: 0.1})
            .expect(page.input82.value).eql('SuperSecretPassword!')
            .click(page.btnLogin8)
        await t
            .expect(page.textsauss8.innerText).contains('secure')
            .expect(page.text83.innerText).contains('Welcome')
            .expect(page.logout8.visible).ok()

     });
