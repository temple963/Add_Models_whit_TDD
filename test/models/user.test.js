const User = require ('../../app/models/user')
describe ("unit test for User classs",() =>{

    test('Create User object ', ()=>{
        //aqui estas diciendo que codigo usaras en tu app 
        const user =new User(1,"carlogilmar","Carlo","Bio","dataCreated","lastUpdate")
        //Sigue la validadcion de tu codigo para tu test
         // Aquí validas los resultados de ese código
        // Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha(valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("carlogilmar")
        expect(user.name).toBe("Carlo")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
            })
})