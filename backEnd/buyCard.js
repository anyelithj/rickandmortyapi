new Vue({   
    el: '#app',
    data: {
        test: [],
        currentLoguedUser: {},
        wholeRegisteredUsers: [],
        optionPayment: "",
        entityToPay: ['Nequi', 'Efecty'],
        quantityPayedForCard: "",
        wholeCardsData: [],
        error: false,
        errorPayment: false,
        CURRENT_USER_LOGUED: "userLoged",
        USERS_REGISTERED: "users",
        DATA_FETCHED_KEY: "data-api",
        code:0,
        modal: false
    },
    created(){
        this.fetchingDataFromApi()
        this.wholeRegisteredUsers = this.getterParsedLocalStorage(this.USERS_REGISTERED)
        this.currentLoguedUser = this.getterParsedLocalStorage(this.CURRENT_USER_LOGUED)
    },
    methods: {
      setterLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
      },
      getterParsedLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key) || "[]");
      },
      validations() {
        if (this.optionPayment === "") {
          this.errorPayment = true;
          this.error = true;
        } else {
          this.errorPayment = false;
        }
      },
      message(icon, title, timer, position, text, button) {
        swal({
          position,
          text,
          icon,
          title,
          dangerMode: false,
          timer,
          button,
        });
      },
      getRandomValue(min = 100, max = 700) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      
      async fetchingDataFromApi() {
        try {
          const URL = "https://rickandmortyapi.com/api/character";
          const request = await fetch(URL);
          const response = await request.json();
          function v4() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16)
            })
          }
          this.setterLocalStorage(
            this.DATA_FETCHED_KEY,
            (this.wholeCardsData = response.results.map(
              ({ id, name, species, gender, image, location }) => ({
                id,
                name,
                species,
                gender,
                image,
                location: location.name,
                price: this.getRandomValue(),
                code: v4(),
                state: "Comparada"
              })
            ))
          );
        } catch (error) {
          console.log(error);
        }
      },
     

      buyCards(card) {
        
    
        let singleLogued = this.wholeRegisteredUsers.filter(
          (users) => this.currentLoguedUser[0].username === users.username
        );
  
        let restUsers = this.wholeRegisteredUsers.filter(
          (users) => singleLogued[0].username !== users.username
        );
        this.wholeRegisteredUsers = [...restUsers];
  
        this.setterLocalStorage(this.USERS_REGISTERED, this.wholeRegisteredUsers);
  
        if (singleLogued[0].rick > card.price) {
          this.message(
            "success",
            "!Enhorabuena!",
            2000,
            "center",
            "¡Compra exitosa. Ahora tienes una nueva card!",
            false
          );
          let discount = card.price;
  
                      singleLogued[0].cards.push(card) 
                      singleLogued[0].history.push(card) 
                      singleLogued[0].rick -= discount
  
                      this.setterLocalStorage(this.CURRENT_USER_LOGUED, singleLogued)
                     
                      const [userWithDiscount] = singleLogued
                      
                      this.wholeRegisteredUsers.push(userWithDiscount)
                      this.setterLocalStorage(this.USERS_REGISTERED, this.wholeRegisteredUsers)
                      setTimeout(function() {location.href="./buyCard.html"}, 800);
              } else{
                  this.message('warning','Oops',2000, 'center','Saldo insuficiente. Por favor recargue su cuenta.',false)
              }
          },
          rechargeRickCoins(value){
  
              let singleLogued = this.wholeRegisteredUsers.filter(users =>  this.currentLoguedUser[0].username ===  users.username  )
  
              let restUsers = this.wholeRegisteredUsers.filter(users =>  singleLogued[0].username !==  users.username  )
              this.wholeRegisteredUsers = [...restUsers]
  
              this.setterLocalStorage(this.USERS_REGISTERED, this.wholeRegisteredUsers)
  
              if(value > 99) {
                  this.message('success','!Enhorabuena!',2000, 'center',`Recarga exitosa. Has recargado ${value} RickCoins !`,false)
                     
                      singleLogued[0].rick += value
  
                      this.setterLocalStorage(this.CURRENT_USER_LOGUED, singleLogued)
                     
                      const [userRechargeUpdated] = singleLogued
                      
                      this.wholeRegisteredUsers.push(userRechargeUpdated)
                      this.setterLocalStorage(this.USERS_REGISTERED, this.wholeRegisteredUsers) 
                      setTimeout(function() {location.href="./rechargeRickPoints.html"}, 2000);
              } else{
                  this.message('warning','Oops',2000, 'center','Monto inválido. Por favor ingresa un valor mayor o igual a 100.',false)
              }
            }  
    },computed:{
      
    }
    
   
})
