<template>
<div>
    <v-card
      class="mx-auto"
      max-width="344"
    >
    <v-img
      :src="img"
      height="200px"
    ></v-img>

    <v-card-title>
      {{title}}
    </v-card-title>

    <v-card-subtitle>
      {{price}}
    </v-card-subtitle>
  </v-card>
</div>
  
</template>

<script>
export default {
  name: 'Menu',
  props: ["title", "img", "price"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
