<template>
  <div>
       <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
          class="grey lighten-5"
          style="height: 300px;"
        >
        <Menu
        class="ma-3 pa-6"
            v-for = "menu in menus" 
            :key = menu
            :img = menu.img
            :title = menu.title
            :price= menu.price
        ></Menu>

        </v-row>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
<script>
import Menu from "./Menu.vue";
export default {
  name: "Home",
  components: {
    Menu
  },
  props: {
    msg: String
  },
  data(){
      return {
          menus: [{
                img: "https://proxumer-titan.s3.ap-southeast-1.amazonaws.com/v1/images/2019/01/29/94xs01okl7dw.jpg",
                title:"อร่อยจนเคลิ้มหลับ",
                price:"500 THB"
          },{
                img: "https://www.sentangsedtee.com/wp-content/uploads/2017/11/Two-Dogs-Eating.jpg",
                title:"อร่อย ดึงหูไม่ออก",
                price:"100 THB"
          },{
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW321A66JVnu1lQb_5OfEuaYFn9gYHVaLFjA&usqp=CAU",
                title:"แครอท สำหรับหมา",
                price:"10 THB"
          },{
                img: "https://pbs.twimg.com/profile_images/488631918573801472/oYpt2NDe.jpeg",
                title:"ขายหมาบูมถูกๆ ราคากันเอง",
                price:"0.25 THB"
          }]
      }
  }
};
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
