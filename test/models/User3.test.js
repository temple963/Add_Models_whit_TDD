const User3 = require ('../../app/models/user3')
describe ("unit test for User classs",() =>{

    test('add getters', ()=>{
        //aqui estas diciendo que codigo usaras en tu app 
        const user =new User3(1,"carlogilmar","Carlo","Bio")
       
        expect(user.getUsername).toBe("carlogilmar")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        //esto arriba verifica que el valor no sea undefined
        expect(user.getLastUpdated).not.toBeUndefined()

            })
})