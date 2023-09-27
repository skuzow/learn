const app =  Vue.createApp({
  // template: `
  //   <h1>Hello World</h1>
  //   <p>{{ [1, 2, 3, 4, 5, 6] }}</p>
  // `,
  data() {
    return {
      quote: 'Im batman!!',
      author: 'Bruce Wayne'
    }
  },
  methods: {
    changeQuote() {
      this.quote = 'Im ironman!!';
      this.author = 'Tony Stark';
      this.capitalize();
    },
    capitalize() {
      this.quote = this.quote.toUpperCase();
    }
  }
});

app.mount('#myApp');
