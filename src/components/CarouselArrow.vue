<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <div v-if="item == 1" class="media bg-image-1" alt=""  ></div>
      <div v-if="item == 2" class="media bg-image-2" alt=""  ></div>
      <div v-if="item == 3" class="media bg-image-3" alt=""  ></div>
      <div v-if="item == 4" class="media bg-image-4" alt="" ></div>
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
    min-height: 400px;
    min-width: 1400px;
 }

 .bg-image-1 {
   background: url(../assets/img/img1.jpg) no-repeat;
 }
 .bg-image-2 {
   background: url(../assets/img/img2.jpg) no-repeat;
 }
 .bg-image-3 {
   background: url(../assets/img/img3.jpg) no-repeat;
 }
 .bg-image-4 {
   background: url(../assets/img/img4.jpg) no-repeat;
 }
 .bg-image-1,.bg-image-2,.bg-image-3,.bg-image-4{
   background-position-y: center;
    background-position-x: center;
    background-size: cover;
    background-attachment: fixed;
 }
 .el-carousel__container {
    position: relative;
    height: 400px;
}
img{
      max-width:100%;
      height:auto;
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

  @media only screen and (max-width: 768px){
    .el-carousel {
       overflow-x: visible;
    }
    .el-carousel__button {
      width: 10px;
      height: 10px;
      border-radius: 5px;
    }
    .el-carousel__container {
        height: 219.428px;
    }
    .media {
        max-width: 54.4857143%;

    }

}
</style>
