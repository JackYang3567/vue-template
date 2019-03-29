<template>
   <footer class="footer">
     <div class="container">
       <div class="footer-main">
         <h4>链接</h4>
         <a href="https://github.com/ElemeFE/element" target="_blank" class="footer-main-link">代码仓库</a>
         <a href="https://github.com/ElemeFE/element/releases" target="_blank" class="footer-main-link">更新日志</a>
         <a href="https://github.com/ElemeFE/element/blob/dev/FAQ.md" target="_blank" class="footer-main-link">常见问题</a>
         <a href="https://github.com/ElementUI/element-starter" target="_blank" class="footer-main-link">脚手架</a>
         <a href="https://github.com/ElementUI/element-theme" target="_blank" class="footer-main-link">自定义主题工具</a>
         <a href="https://github.com/ElementUI/theme-chalk-preview" target="_blank" class="footer-main-link">在线主题生成</a>
         <a href="https://github.com/elemefe/element-react" target="_blank" class="footer-main-link">Element-React</a>
         <a href="https://github.com/ElemeFE/element-angular" target="_blank" class="footer-main-link">Element-Angular</a>
       </div>
       <div class="footer-main">
         <h4>社区</h4>
         <a href="https://gitter.im/ElemeFE/element" target="_blank" class="footer-main-link">在线讨论</a>
         <a href="https://github.com/ElemeFE/element/issues" target="_blank" class="footer-main-link">反馈建议</a>
         <a href="https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.zh-CN.md" target="_blank" class="footer-main-link">贡献指南</a>
         <a href="https://segmentfault.com/t/element-ui" target="_blank" class="footer-main-link">SegmentFault</a>
         <a href="https://github.com/ElementUI/awesome-element" target="_blank" class="footer-main-link">Awesome Element</a>
       </div>
       <div class="footer-social">
         <p class="footer-social-title">Element 2.7 Fullerene</p>
         <span>
           <div role="tooltip" id="el-popover-8982" aria-hidden="true" class="el-popover el-popper footer-popover" style="width: 120px; display: none;">
             <!----><div class="footer-popover-title">饿了么 UED</div>
             <img src="static/qrcode.a88f522.png" alt="">
            </div>
          </span>
          <i class="doc-icon-weixin elementdoc el-popover__reference" aria-describedby="el-popover-8244" tabindex="0"></i>
          <a href="https://github.com/elemefe" target="_blank">
            <i class="doc-icon-github elementdoc"></i>
          </a>
          <a href="https://gitter.im/ElemeFE/element" target="_blank">
           <i class="doc-icon-gitter elementdoc"></i>
           </a>
        </div>
      </div>
    </footer>
</template>

<script>
import "../assets/css/footer.css"
export default {
    name: "FooterNav",
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
