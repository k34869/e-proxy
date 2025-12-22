new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: () => ({
    title: "",
    color: "#1976d2",
  }),

  methods: {
    backtohome() {
      window.location.href = "../index_s5.html";
    },
    jump(id) {
      console.log(id);
    },
  },
  computed: {},
  async mounted() {},
  beforeDestroy() {},
});
