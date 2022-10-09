var app = new Vue({
    el: "#app",
    data: {
     
      loguedUser:[],
      users:[],
      username:"",
    },
    methods: {
        
           
             
    },
    computed: {},
    created(){
        this.loguedUser = JSON.parse(localStorage.getItem("userLoged"));
        this.users = JSON.parse(localStorage.getItem("users"));
        console.log(this.loguedUser[0].cards)
    },
  });