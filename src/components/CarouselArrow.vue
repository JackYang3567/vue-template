<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 6" :key="item">
     <img src="../assets/img/work1.jpg" v-if="item == 1" class="media" alt=""  />
     <img src="../assets/img/work2.jpg" v-if="item == 2" class="media" alt=""  />
     <img src="../assets/img/work3.jpg" v-if="item == 3" class="media" alt=""  />
     <img src="../assets/img/work4.jpg" v-if="item == 4" class="media" alt=""  />
     <img src="../assets/img/work5.jpg" v-if="item == 5" class="media" alt=""  />
     <img src="../assets/img/work6.jpg" v-if="item == 6" class="media" alt=""  />

    </el-carousel-item>
  </el-carousel>
</template>

<script>


export default {
    name: "CarouselArrow",
    props: {
        item: String
    }

}
</script>



<style>
.media {
    width: 100%;
    height: inherit;
    min-height: 360px;
    min-width: 1400px;
 }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
