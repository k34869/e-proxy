new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: () => ({}),

  methods: {
    backtohome() {
      //   window.location.href = "../../index.html";
      console.log("back home");
    },
    jump(id) {
      console.log(id);
    },
  },
  computed: {},
  async mounted() {},
  beforeDestroy() {},
});
