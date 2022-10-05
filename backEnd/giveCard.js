var app = new Vue({
  el: "#app",
  data: {
   
    loguedUser:[],
    users:[],
    username:"",
    singleLogued:[],
    singleLogued2:[],
    card:[],
    cards2:[],
    userLogedGC:"",
    userLogedGC2:[],
    userLogedGC3:{},
    userLogedGC4:[],
    test4:""
  },
  methods: {
       selectCards( card ){
         
      
          //datos sin el usuario logeado
          this.singleLogued = this.users.filter(users =>  this.loguedUser[0].username !==  users.username  )
          this.users= this.singleLogued 
 
          //Datos de usuario logeado
          this.singleLogued2 = this.users.filter(users =>  this.loguedUser[0].username ===  users.username  )
          this.cards2 = this.loguedUser[0].cards
         
          //quitamos la carta a regalar
          this.userLogedGC =  this.cards2.filter(users2 =>  users2.name !== card.name )

          
         // carta a regalar
         let[test4]= this.userLogedGC2 =  this.cards2.filter(users2 =>  users2.name == card.name )
         this.test4 = test4
          
        
          
      },
      updateLocalStorage(){
        localStorage.setItem("users", JSON.stringify(this.users))
        localStorage.setItem("userLoged", JSON.stringify(this.loguedUser))
       
       },

      giveCards(){
        //seleccionamos el usuario a regalar 
        
        this.userLogedGC3 = this.users.filter(users =>  this.username ===  users.username  )

        //traemos el array sin el usuario a regalar
        this.userLogedGC4= this.users.filter(users =>  this.username !==  users.username  )
        this.users = this.userLogedGC4
       
        //le agregamos la carta a regalar
       
        this.userLogedGC3[0].cards.push(this.test4)
        let[test3] = this.userLogedGC 
        this.loguedUser[0].cards = this.userLogedGC 
     
        let[test] = this.loguedUser
        let[test2] = this.userLogedGC3
        console.log("first")
        console.log(test)
       
        this.users.push(test)
        this.users.push(test2)

        this.updateLocalStorage() 
        this.message(
          "🥳",
          2200,
          "center",
          "La carta ha sido enviada",
          "success"
        );
        setTimeout(function() {location.href="../frontEnd/giveAwayCard.html"}, 2000);
      },
      message(title, timer, position, text, icon)  {
        Swal.fire({
          position,
          text,
          icon,
          title,
          showConfirmButton: false,
          timer,
         
      });
    },         
  },
  computed: {},
  created(){
      this.loguedUser = JSON.parse(localStorage.getItem("userLoged"));
      this.users = JSON.parse(localStorage.getItem("users"));
      console.log(this.loguedUser[0].cards)
  },
});