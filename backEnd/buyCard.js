new Vue({   
    el: '#app',
    data: {
        currentLoguedUser: {},
        rechargedValue :0,
        entityToPay: "",
        quantityPayedForCard: 0,
        wholeCardsData: [],
        CURRENT_USER_LOGUED: "current-user",
        DATA_FETCHED_KEY: "data-api"
    },
    created(){
        this.fetchingDataFromApi()
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
                
               this.setterLocalStorage(this.DATA_FETCHED_KEY, this.wholeCardsData = response.results.map(({id,name,species,gender,image, location}) => ({
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
            if(user[0].balance < card.price) {
                return console.log('Saldo insuficiente. Por favor recargue su cuenta.');
            } else{
                this.message('¡Compra exitosa. Ahora tienes una nueva card!')
                let discount = card.price
                let balanceShoppingCard =  user.map(usr => {
                    return {
                        ...usr,
                        balance: usr.balance -= discount
                    }
                })
                console.log(balanceShoppingCard)
            }
        },
        rechargeRickCoins(value,...user){
            let res = user.map(usr => {
                return{
                    ...usr,
                    balance: usr.balance += value
                } 
            })
            return this.setterLocalStorage(this.CURRENT_USER_LOGUED,res) 
        }
    }
})

buyCards()