import page from './PageObjectModel';
import { data } from  './data'

/*
let rndNumber = Math.random().toString(36).substr(1,4);
const email = 'fer95' + rndNumber + '@mailinator.com'
const firstName = "Fernando"
const lastName = "Espinoza"
const password = '888225'
*/


fixture('Preuba de modulo de cuenta')
    .page('http://automationpractice.com/');

    test('Crear una cunenta', async t => {

        await t
            .click(page.signIn_link)

            console.log("Correo: ", data.email)
            console.log("firstName: ", data.firstName)
            console.log("LastName: ", data.lastName)
        
        await t
            .typeText(page.email_input,data.email)
            .click(page.createAccout_btn)

        await t
            .expect(page.email_form.value).contains(data.email)
            .expect(page.email_form.hasAttribute('readonly')).notOk()
            //

        .typeText(page.firsname_input, data.firstName)
        .typeText(page.lastname_input, data.lastName)

        .expect(page.firstname_Address.value).contains(data.firstName)
        .expect(page.lastname_Address.value).contains(data.lastName)

        .typeText(page.password_input, data.password)
        .typeText(page.address, data.pBox)
        .expect(page.address.value).contains(data.pBox)
        
        .typeText(page.city, data.city)
        .expect(page.city).contains(data.city)

        typeText(page.address,data.pBox)



    });




    test('Logease con una cuentanueva', async t => {});
    test('Logout', async t => {});
    test('Crear una cuenta con un correo existe', async t => {});
    test('Validar recuperar el passoword con un correo valido', async t => {});
    test('Validar recuperar el passoword con un correo no valido', async t => {});
    test('Cambiar informacion de mi cuenta', async t => {});