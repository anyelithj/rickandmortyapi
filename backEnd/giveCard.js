var app = new Vue({
  el: "#app",
  data: {
   
    loguedUser:[],
    users:[],
    users2:[],
    username:"",
    singleLogued:[],
    singleLogued2:[],
    card:[],
    cards2:[],
    userLogedGC:"",
    userLogedGC2:[],
    userLogedGC3:{},
    userLogedGC4:[],
    test4:"",
    test5:"",
    history:[],
    history2:[],
    update:[]
  },
  methods: {
       selectCards( card ){
         
      
          //datos sin el usuario logeado
          this.singleLogued = this.users.filter(users =>  this.loguedUser[0].username !==  users.username  )
          this.users= this.singleLogued 
          this.users2 = this.users.filter(users =>  users.type !==  "1" && users.type !==  1 )
          //Datos de usuario logeado
          this.singleLogued2 = this.users.filter(users =>  this.loguedUser[0].username ===  users.username  )
          this.cards2 = this.loguedUser[0].cards
          this.history2 = this.loguedUser[0].history
          
          //quitamos la carta a regalar
          this.userLogedGC =  this.cards2.filter(users2 =>  users2.code !== card.code )
          this.history =  this.history2.filter(users2 =>  users2.code !== card.code )

          
         // carta a regalar
         let[test4]= this.userLogedGC2 =  this.cards2.filter(users2 =>  users2.code == card.code )
         let[test5] =  this.history2.filter(users2 =>  users2.code == card.code )
         this.test4 = test4
         this.test5 = test5
         console.log(test4)
         this.test5.state = "Regalada"
         console.log("Hola")
       
        
      
         this.history.push(this.test5)
         console.log(this.test5)
        
     
          
        
          
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
        console.log("prueba")
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
        setTimeout(function() {location.href="./giveAwayCard.html"}, 2000);
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
   
  },
});