import comp from "C:/Users/22068/Desktop/Projject/vuepress-theme-hope/demo/theme-blog/src/.vuepress/.temp/pages/demo/encrypt.html.vue"
const data = JSON.parse("{\"path\":\"/demo/encrypt.html\",\"title\":\"Encryption Article\",\"lang\":\"en-US\",\"frontmatter\":{\"icon\":\"lock\",\"category\":[\"Guide\"],\"tag\":[\"encryption\"],\"feed\":false,\"seo\":false,\"head\":[[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://theme-hope-blog-demo.vuejs.press/zh/demo/encrypt.html\"}]]},\"headers\":[],\"git\":{\"createdTime\":1623577866000,\"updatedTime\":1663414381000,\"contributors\":[{\"name\":\"Mr.Hope\",\"email\":\"mister-hope@outlook.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.3,\"words\":90},\"filePathRelative\":\"demo/encrypt.md\",\"localizedDate\":\"June 13, 2021\"}")
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
