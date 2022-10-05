var app = new Vue({
    el: "#app",
    
    data: {
        users:[],
        userLoged:[],
        name:"",
        username:"",
        password:"",
        rick:0,
        type:1,

    },
    methods: {
        

        getData(){
            this.users = JSON.parse(localStorage.getItem("users") || '[]')
          
           
          
          },
            
        updateLocalStorage(){
            localStorage.setItem("users", JSON.stringify(this.users))
        },
        register(){
        
            this.users.push({
                name: this.name,
                username:this.username,
                password: this.password,
                type: this.type,
                rick: this.rick,
                cards: []
                });
                console.log(this.users)
                this.updateLocalStorage()
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