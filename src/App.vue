<template>
    <div id="app" class="is-component">
        <el-container>

            <el-header>
                <Header />
            </el-header>

            <router-view/>


            <Footer />


        </el-container>
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
    body {
        display: block;
        margin: 0;
    }
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;

    }
    .el-header{line-height: 60px;}


    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
       /* line-height: 160px;*/
    }

     body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
