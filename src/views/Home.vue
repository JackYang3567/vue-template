<template>

  <div class="home">
       <CarouselArrow />
        <el-main>
           <img alt="Vue logo" src="../assets/logo.png">
           <HelloWorld msg="Welcome to Your Vue.js App"/>
        </el-main>
        <CarouselCard />
  </div>

</template>

<script>

// @ is an alias to /src
import HelloWorld from "../components/HelloWorld.vue"
import CarouselCard from "../components/CarouselCard.vue"
import CarouselArrow from "../components/CarouselArrow.vue"

export default {
    name: "home",
    components: {
        HelloWorld,
        CarouselCard,
        CarouselArrow
    }
}
</script>
