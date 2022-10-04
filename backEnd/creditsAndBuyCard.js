new Vue({
  el: "#app",
  data: {
    currentLoguedUser: {},
    rechargedValue: 0,
    CURRENT_USER_LOGUED: "current-user",
    DATA_FETCHED_KEY: "data-api",
    yeniTest: [{
        name: "Rick",
        species: "humano",
        image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        ubication: "tierra",
        firstSighting: "Cali",
        value:"500"
      },
      {
        name: "Rick",
        species: "humano",
        image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        ubication: "tierra",
        firstSighting: "Cali",
        value:"500"
      },
      

    ],
  },
  methods: {
    setterLocalStorage(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    },
    getterParsedLocalStorage(key) {
      return JSON.parse(localStorage.getItem(key) || "[]");
    },
    buyCards(card, ...user) {
      if (user[0].balance < card.price) {
        return console.log("Saldo insuficiente. Por favor recargue su cuenta.");
      } else {
        this.message("¡Compra exitosa. Ahora tienes una nueva card!");
        let discount = card.price;
        user[0].map((usr) => {
          return {
            ...usr,
            balance: (usr.balance -= discount),
          };
        });
      }
    },
    rechargeRickCoins(value, ...user) {
      let res = user.map((usr) => {
        return {
          ...usr,
          balance: (usr.balance += value),
        };
      });
      return this.setterLocalStorage(this.CURRENT_USER_LOGUED, res);
    },
    
  },
  created() {
    
  },
});
