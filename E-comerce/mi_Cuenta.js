import page from './PageObjectModel';

let rndNumber = Math.random().toString(36).substr(1,4);
const email = 'fer95' + rndNumber + '@mailinator.com'
const firstName = "Fernando"
const lastName = "Espinoza"
const password = '888225'


fixture('Preuba de modulo de cuenta')
    .page('http://automationpractice.com/');

    test('Crear una cuneta', async t => {

        await t
            .click(page.signIn_link)

            console.log("Correo: ", email)
        
        await t
            .typeText(page.email_input,email)
            .click(page.createAccout_btn)

        await t
            .expect(page.email_form.value).contains(email)
            .expect(page.email_form.hasAttribute('readonly')).notOk()
            //

        .typeText(page.firsname_input, firstName)
        .typeText(page.lastname_input, lastName)

        .expect(page.firstname_Address.value).contains(firstName)
        .expect(page.lastname_Address.value).contains(lastName)

        typeText(page.password_input, password)
        .typeText(page.address, ' P.O. BOX 5056')



    });




    test('Logease con una cuentanueva', async t => {});
    test('Logout', async t => {});
    test('Crear una cuenta con un correo existe', async t => {});
    test('Validar recuperar el passoword con un correo valido', async t => {});
    test('Validar recuperar el passoword con un correo no valido', async t => {});
    test('Cambiar informacion de mi cuenta', async t => {});