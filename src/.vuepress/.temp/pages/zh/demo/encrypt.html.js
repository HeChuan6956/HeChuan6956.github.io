import comp from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/demo/theme-blog/src/.vuepress/.temp/pages/zh/demo/encrypt.html.vue"
const data = JSON.parse("{\"path\":\"/zh/demo/encrypt.html\",\"title\":\"密码加密的文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"lock\",\"category\":[\"使用指南\"],\"tag\":[\"加密\"],\"feed\":false,\"seo\":false,\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"en-us\",\"href\":\"https://theme-hope-blog-demo.vuejs.press/demo/encrypt.html\"}]]},\"headers\":[],\"git\":{\"createdTime\":1623577866000,\"updatedTime\":1702639822000,\"contributors\":[{\"name\":\"Mr.Hope\",\"email\":\"mister-hope@outlook.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":0.51,\"words\":154},\"filePathRelative\":\"zh/demo/encrypt.md\",\"localizedDate\":\"2021年6月13日\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
