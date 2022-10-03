var app = new Vue({
    el: "#app",
    
    data: {
        userCredentials:[{username:"admin",password:"admin",rick:0,name:"Oscar",type:"1"}],
        users:[],
        name:"",
        username:"",
        password:"",
        typeUser:"",
        rick:0,
        type:1,

    },
    methods: {
        

        getData(){

            this.user = JSON.parse(localStorage.getItem("user") || '[]')
          },
            
        updateLocalStorage(){
            localStorage.setItem("users", JSON.stringify(this.users))
        },
        register(){
            this.users.push({
                name: this.name,
                option:this.option,
                sells: this.sells,
                commission: this.commission,
                bonus: this.bonus,
                sellPrice:this.sellPrice,
                total:this.total,
                });
                this.updateLocalStorage();
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