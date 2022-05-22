class User4 {

    constructor(id,name,username,bio,dateCreated,lastUpdated){

        this.id=id
        this.username=name
        this.name=username
        this.bio=bio
        this.dateCreated= new Date()
        this.lastUpdated= new Date()


      
    }

    get getUsername(){
        return this.username
      }
      get getBio(){
        return this.bio
      }
      get getDateCreated(){
        return this.dateCreated
      }
      get getLastUpdated(){
        return this.lastUpdated
      }

      
   
}

module.exports = User4