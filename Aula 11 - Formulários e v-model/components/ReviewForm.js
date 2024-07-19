app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name">

    <label for="review">Review:</label>      
    <textarea id="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>

    <label for="question"> Would you recommend this product?</label>
    <select id="question">
      <option>Yes</option>
      <option>No</option>
    </select>

    <input class="button" type="submit" value="Submit">
  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      question: null,
    }
  },
  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' || this.rating === null || this.question === null ) {
        alert('Review is incomplete. Please fill out every field.')
        return 
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        question: this.question,
      }
      this.$emit('review-submitted', productReview)
 
      
    }
  }

})