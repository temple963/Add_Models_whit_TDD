const User2 = require ('../../app/models/user2')
describe ("unit test for User classs",() =>{

    test('Create User object ', ()=>{
        //aqui estas diciendo que codigo usaras en tu app 
        const user =new User2(1,"carlogilmar","Carlo","Bio")
        //Sigue la validadcion de tu codigo para tu test
         // Aquí validas los resultados de ese código
        // Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha(valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        //esto arriba verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined()

            })
})