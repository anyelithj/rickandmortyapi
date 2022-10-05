var app = new Vue({
    el: "#app",
    
    data: {
        users:[],
        name:"",
        username:"",
        password:"",
        rick:0,
        type:1,
        error: false,
        errors: {
          username: false,
          password: false,
          rickcoins: false,
          name: false,
          rol: false
        },

    },
    methods: {
        

        getData(){
            this.users = JSON.parse(localStorage.getItem("users") || '[]')      
          },
            
        updateLocalStorage(){
            localStorage.setItem("users", JSON.stringify(this.users))
        },
        register(){
          this.validations()? this.error : 
            this.users.push({
                name: this.name,
                username:this.username,
                password: this.password,
                type: this.type,
                rick: this.rick,
                cards: []
                });
                this.updateLocalStorage()
               
        },
        validations(){
          if(this.name === "") {
            this.errors.name = true;
            this.error = true;
          } else {
            this.errors.name = false;
          }
          
          if(this.username === "") {
            this.errors.username = true;
            this.error = true;
          } else {
            this.errors.username = false;
          } 

          if(this.password === "") {
            this.errors.password = true;
            this.error = true;
          } else {
            this.errors.password = false;
          }
          if(this.rick === "" || this.rick<=0 || typeof this.rick !== "number") {
            this.errors.rickcoins = true;
            this.error = true;
          } else {
            this.errors.rickcoins = false;
          }
           if(this.type === "" || this.type<=0 || typeof this.type !== "number") {
            this.errors.rol = true;
            this.error = true;
          } else {
            this.errors.rol = false;
          }
        }, 
            message(title, timer, position, text, icon) {
              Swal.fire({
                position,
                text,
                icon,
                title,
                showConfirmButton: false,
                timer,
              });},
    },
    computed: {},
    created(){
      this.getData();
      
    },
  });