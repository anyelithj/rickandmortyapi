var app = new Vue({
  el: "#app",
  
  data: {
      users:[],
      name:"",
      username:"",
      password:"",
      rick:0,
      optionType: "",
      type:1,
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
      saveRegister() {
         this.validations() ? this.errorValidations() : this.register()
        
      },
      register(){
        this.users.push({
              name: this.name,
              username:this.username,
              password: this.password,
              type: this.type,
              rick: this.rick,
              history:[],
              cards: []
              });
              this.updateLocalStorage()
              this.message("https://media1.giphy.com/media/J1XU9sjU2K2pCluvXo/200w.webp","¡Enhorabuena!", 2200, "center","Ingreso exitoso","success") ;
              this.clear()
      },
      errorValidations(){
         this.error
         this.message('https://media2.giphy.com/media/jSQCODNIa6k5myYjyL/200w.webp',"Oops",2200,"center", "Verifique que los datos sean correctos", "error");
      },
      validations(){
        error = false;
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
          error = true;
        } else {
          this.errors.password = false;
        }
        if(this.rick === "" || this.rick<=0 ) {
          this.errors.rickcoins = true;
          error = true;
        } else {
          this.errors.rickcoins = false;
        }
        return error;
      }, 
      clear(){
        this.name = "",
        this.username = "",
        this.password = "",
        this.type = "",
        this.rick = ""
      },
      message(imageUrl,title, timer, position, text, icon)  {
        Swal.fire({
          imageUrl,
          position,
          text,
          icon,
          title,
          showConfirmButton: false,
          timer,
         
      });
    },
  },
  computed: {},
  created(){
    this.getData();
    
  },
});