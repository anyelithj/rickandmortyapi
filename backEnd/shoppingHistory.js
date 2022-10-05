var app = new Vue({
    el: "#app",
    data: {
     
      loguedUser:[],
      users:[],
      username:"",
    },
    methods: {
      give( card ){
        let singleLogued = this.wholeRegisteredUsers.filter(users =>  this.currentLoguedUser[0].username ===  users.username  )

        let restUsers = this.wholeRegisteredUsers.filter(users =>  singleLogued[0].username !==  users.username  )
        this.wholeRegisteredUsers = [...restUsers]

        this.setterLocalStorage(this.USERS_REGISTERED, this.wholeRegisteredUsers)

        if(singleLogued[0].rick > card.price) {
            this.message('success','!Enhorabuena!',2000, 'center','¡Compra exitosa. Ahora tienes una nueva card!',false)
            let discount = card.price

                singleLogued[0].cards.push(card) 
                singleLogued[0].history.push(card) 
                singleLogued[0].rick -= discount

                this.setterLocalStorage(this.CURRENT_USER_LOGUED, singleLogued)
               
                const [userWithDiscount] = singleLogued
                
                this.wholeRegisteredUsers.push(userWithDiscount)
                this.setterLocalStorage(this.USERS_REGISTERED, this.wholeRegisteredUsers)
           
        } else{
            this.message('warning','Oops',2000, 'center','Saldo insuficiente. Por favor recargue su cuenta.',false)
            
        }
        
    },
           
             
    },
    computed: {},
    created(){
        this.loguedUser = JSON.parse(localStorage.getItem("userLoged"));
        this.users = JSON.parse(localStorage.getItem("users"));
        console.log(this.loguedUser[0].cards)
    },
  });