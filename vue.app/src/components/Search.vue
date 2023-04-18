<script>
import axios from "axios";
 
 
export default {
  data() {
    return {
      term: "",
    }
  },
  methods: {
    async exe() {
      this.$emit("loadStart")
      const { data } = await axios.get(`//itunes.apple.com/search?term=${this.term}&country=jp&entity=musicVideo`);
      this.$emit("loadComplete", { results: data.results })
    },
  },
};
</script>

<template>
  <div>
    <div class="container">
      <input type="text" class="text" v-model="term" @keyup.enter="exe">
      <input type="submit" class="submit" value="Search" @click="exe">
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  height: 70px;
  padding: 20px;
  background-color: #35495e;
  box-sizing: border-box;
}
.text {
  width: 50%;
  max-width: 300px;
  padding: .5em;
  border: none;
}
.submit {
  padding: .5em 2em;
  margin-left: 10px;
  color: #fff;
  background-color: #42b883;
  border: none;
  border-radius: 20px;
}
</style>