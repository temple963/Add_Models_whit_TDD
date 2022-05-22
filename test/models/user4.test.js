const User4 = require ('../../app/models/user4')
describe ("unit test for User classs",() =>{

    test('Add setters',()=>{
        const user=new User4(1,"carlogilmar","Carlo","Bio")
        user.setUsername="Gilmar"
        
        expect(user.username).toBe("Gilmar")
        user.setBio="New bio"
        
        expect(user.bio).toBe("New bio")

            })
})