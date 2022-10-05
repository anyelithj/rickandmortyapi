var app = new Vue({
  el: "#app",
  data: {
    loguedUser: [],
  },
  methods: {
    showFormatedNumber(value) {
      function thousandSeparator(number = 0, decimalsQuantity = 2) {
        return Number(number)
          .toFixed(decimalsQuantity)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      return thousandSeparator(value);
    },
  },
  computed: {},
  created() {
    this.loguedUser = JSON.parse(localStorage.getItem("userLoged"));
  },
});
