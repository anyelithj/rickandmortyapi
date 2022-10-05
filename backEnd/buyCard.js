new Vue({   
    el: '#app',
    data: {
        test: [],
        currentLoguedUser: {},
        wholeRegisteredUsers: [],
        rechargedValue :0,
        entityToPay: ['Nequi', 'Efecty'],
        quantityPayedForCard: "",
        wholeCardsData: [],
        CURRENT_USER_LOGUED: "userLoged",
        USERS_REGISTERED: "users",
        DATA_FETCHED_KEY: "data-api"
    },
    created(){
        this.fetchingDataFromApi()
        this.wholeRegisteredUsers = this.getterParsedLocalStorage(this.USERS_REGISTERED)
        this.currentLoguedUser = this.getterParsedLocalStorage(this.CURRENT_USER_LOGUED)
       

    },
    methods: {
        setterLocalStorage(key, data){
            localStorage.setItem(key, JSON.stringify(data))
        },
        getterParsedLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key) || "[]")
        },
        updateLocalStorage(){
            localStorage.setItem( "userLoged", JSON.stringify(this.test))
        },
        getRandomValue(min = 100, max = 700){
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min + 1)) + min
        },
        async fetchingDataFromApi () {
            try{
                const URL =  'https://rickandmortyapi.com/api/character'
                const request = await fetch(URL)
                const response = await request.json()
                
               this.setterLocalStorage(this.DATA_FETCHED_KEY, this.wholeCardsData = response.results.map(({id,name,species,gender,image,location}) => ({
                    id,
                    name,
                    species,
                    gender,
                    image,
                    location: location.name,
                    price: this.getRandomValue()
                }) ))
            } catch(error) {
                console.log(error)
            }
        },
        btn(a,b){
            console.log(a);
            console.log(b);
        },
        buyCards( card, user ){
            if(user[0].rick > card.price) {
                console.log('¡Compra exitosa. Ahora tienes una nueva card!')
                let discount = card.price

                    user[0].cards.push(card) 
                    user[0].history.push(card) 
                    user[0].rick -= discount
                    console.log(user[0].rick);
                    this.test = user[0]
                    alert(this.test)
                    this.updateLocalStorage()
                    console.log(this.test);
                    
            } else{
                console.log('Saldo insuficiente. Por favor recargue su cuenta.');
                
            }
           
        },
        rechargeRickCoins(value,...user){
            let res = user.map(usr => {
                return{
                    ...usr,
                    rick: usr.rick += value
                } 
            })
            let [userUpdated] = res
            
        },
        
    }
})
