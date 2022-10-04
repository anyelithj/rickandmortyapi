var app = new Vue({
    el: "#app",
    data: {
      username:"",
      users:[],
      password:"",
      userCredentials:[{username:"admin",password:"admin",rick:0,name:"Oscar",type:"1",cards:[]}],
      loguedUser:[],
      error:false,
      error2:false,
      image:"https://i.ibb.co/vd1kyxW/pngwing-com-1.png",
      name:"",
    },
    methods: {
   
             getError() {
              if (this.username == "") {
                this.error = true;
              } else {
                this.error = false;
              }
      
              if (this.password == "") {
                  this.error2 = true;
                } else {
                  this.error2 = false;
                }
            },
            
             updateLocalStorage(){
              localStorage.setItem("users", JSON.stringify(this.userCredentials))
              localStorage.setItem("userLoged", JSON.stringify(this.loguedUser))
             },
             login() {
              this.getError();
              if (this.error == true || this.error2 == true) {
              } else {
              }
            },
            validateCredentials(user, key) {

              let loguedUser = [];
              let res = this.userCredentials.filter(
                (usr) => usr.username === user && usr.password === key
              );
              loguedUser = [...res];
              this.loguedUser = [...res]
              console.log(this.loguedUser)
             if(loguedUser[0].type=='1'){
                if(loguedUser.length === 0){
                    this.message(
                      "Oops",
                      2200,
                      "center",
                      "Verifique que los datos sean correctos",
                      "error"
                    );
                    }else{
                      this.updateLocalStorage()
                      this.message(
                        "¡Enhorabuena!",
                        2200,
                        "center",
                        "Ingreso exitoso",
                        "success"
                      ) ;
                     
                     
        
                      setTimeout(function() {location.href="./frontEnd/administrator.html"}, 2000);
                    }
                    
             } else if(loguedUser[0].type=='2'){
                if(loguedUser.length === 0){
                    this.message(
                      "Oops",
                      2200,
                      "center",
                      "Verifique que los datos sean correctos",
                      "error"
                    );
                    }else{
                      this.updateLocalStorage()
                      this.message(
                        "¡Enhorabuena!",
                        2200,
                        "center",
                        "Ingreso exitoso",
                        "success"
                      ) ;
                     
                     
        
                      setTimeout(function() {location.href="./frontEnd/main.html"}, 2000);
                    }
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
        this.userCredentials = JSON.parse(localStorage.getItem("users"));
      
    },
  });