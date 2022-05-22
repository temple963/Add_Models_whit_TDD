class User2 {

    constructor(id,name,username,bio,dateCreated,lastUpdated){

        this.id=id
        this.username=name
        this.name=username
        this.bio=bio
        this.dateCreated= new Date()
        this.lastUpdated= new Date()

    }
}

module.exports = User2