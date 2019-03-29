<template>
    <el-main>
        <div class="blog">
        <Blog msg="====This is an about Blog ==="/>
        <ul>
            <li v-for=" (item, key ) in items " :key="key">{{ key  }} ->{{ item.Topic  }}</li>
        </ul>
        </div>
    </el-main>
</template>

<script>

// @ is an alias to /src
import Blog from "../../components/Blog.vue"

export default {
    name: "blog",
    data() {
        return {
            items: []
        }
    },
    components: {
        Blog
    },
    created() {
        let _this = this
        fetch("http://192.168.33.10:8001/api/thread/list").then(function(res) {
            return res.json()
        }).then(function(res) {
            console.log(res.Data)
            _this.items = res.Data
            console.log(_this.items)
        }).then(function(err) {
            console.log(err)
        })
    }
}
</script>

<style>
.el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>

