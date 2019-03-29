<template>

  <div class="blog">
    <h1>{{ msg }}</h1>
  </div>


</template>

<script>
export default {
    name: "Blog",
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.blog {
  margin: 40px 0 0;
  color: #42b983;
}
</style>
