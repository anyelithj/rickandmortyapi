var app = new Vue({
    el: "#app",
    data: {
      loguedUser:[],
    },
    methods: {       
    },
    computed: {},
    created(){
        this.loguedUser = JSON.parse(localStorage.getItem("userLoged"));
      
    },
  });