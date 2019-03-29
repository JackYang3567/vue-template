<template>

      <div id="app">
         <Header />

         <div class="main-cnt">
               <router-view/>
         </div>
         <Footer />
      </div>



</template>

<script>
import Header from "./components/HeaderNav.vue"
import Footer from "./components/FooterNav.vue"
export default {
    name: "App",
    components: {
        Header,
        Footer
    }
}
</script>

<style lang="less">
 #app {
        height: 100%;
    }

    div {
        display: block;
    }
.main-cnt {
    margin-top: -80px;
    padding: 80px 0 340px;
    box-sizing: border-box;
    min-height: 100%;
}

</style>
