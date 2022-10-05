new Vue({   
    el: '#app',
    data: {
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
    },
    methods: {
        setterLocalStorage(key, data){
            localStorage.setItem(key, JSON.stringify(data))
        },
        getterParsedLocalStorage(key) {
            return JSON.parse(localStorage.getItem(key) || "[]")
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
        buyCards(card,...user){
            if(user[0].rick < card.price) {
                return console.log('Saldo insuficiente. Por favor recargue su cuenta.');
            } else{
                this.message('¡Compra exitosa. Ahora tienes una nueva card!')
                let discount = card.price
                let balanceShoppingCard =  user.map(usr => {
                    return {
                        ...usr,
                        rick: usr.rick -= discount
                    }
                })
                console.log(balanceShoppingCard)
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
            return this.setterLocalStorage(this.CURRENT_USER_LOGUED,userUpdated) 
        }
    }
})
