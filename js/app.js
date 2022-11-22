new Vue({
  el: "#app",
  data: {
    arrEmail: [],
  },
  computed: {
    getRandomEmails() {
      this.arrEmail = [];
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((axiosResponse) => {
            this.arrEmail.push(axiosResponse.data.response);
          });
      }
    },
  },
});
