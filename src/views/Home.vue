<template>
  <div class="home">
    <div>
      <img
        :src="cat.img"
        class="img"
      >
    </div>
    <div
      v-for="rating in 5"
      :key="rating"
      @click="setRating(rating)"
      class="rating"
    >
      {{ rating }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      cat: {
        img: '',
        rating: ''
      },
      descriptions: []
    }
  },
  async mounted () {
    // const descriptions = axios.get('hhttps://cat-fact.herokuapp.com/facts')
    // this.$set(this, 'descriptions', descriptions.data)
    this.getCat()
  },
  methods: {
    ...mapActions(['pushInHistory']),
    async getCat () {
      console.log('object')
      const image = await axios.get('https://aws.random.cat/meow')
      this.cat.img = image.data.file
      // const description = await axios.get('https://aws.random.cat/meow')
    },
    async setRating (rating) {
      this.cat.rating = rating
      await this.pushInHistory({ ...this.cat })
      this.getCat()
    }
  }
}
</script>

