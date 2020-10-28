import page from './pageModel';

fixture('Test con testcade')
    .page('https://the-internet.herokuapp.com/')

test('Probar botones', async t => {
    await t
        .click(page.link6)
    await t
    .expect(page.removeBtn62.visible).notOk()
        
    await t
        
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
       
        
        .expect(page.removeBtn62.visible).ok()
        .wait(3000)

        .click(page.removeBtn62, {speed: 0.1})
        .click(page.removeBtn63, {speed: 0.1})
        .click(page.removeBtn62, {speed: 0.1})
    
    });
    
/*agregar dos pruebas mas para el sabado, TAREAS:
*Separar practica 5 en 3 pruebas.
*Separar y agregar al menos 1 prueba mas a practica 6 */
test('Probar botones de remover', async t => {
    await t
    .click(page.link6)

    await t
    
    .expect(page.removeBtn62.visible).notOk()
    .click(page.addBtn61)
    .click(page.addBtn61)
    .click(page.addBtn61)
    .click(page.addBtn61)
    
    .expect(page.removeBtn62.visible).ok()
    .wait(3000)

    .click(page.removeBtn62)
    .click(page.removeBtn63)
    .click(page.removeBtn63)
    .click(page.removeBtn62)
    .expect(page.removeBtn62.visible).notOk()

});

test('Probar que el texto de los botones exista', async t => { 
    await t
        .click(page.link6)
    
    await t
          .expect(page.text33.innerText).contains('Add', 'prueba exitosa')
    });

