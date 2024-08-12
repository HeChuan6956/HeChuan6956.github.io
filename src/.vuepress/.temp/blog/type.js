      export const typesMap = {"article":{"/":{"path":"/article/","indexes":[13,0,1,8,7,6,16,17,9,10,11,12,14,15,36,2,3,4,5,37]},"/zh/":{"path":"/zh/article/","indexes":[31,18,23,38,26,25,24,34,35,27,28,29,30,32,33,19,20,21,22,39]}},"star":{"/":{"path":"/star/","indexes":[9,13,14,0]},"/zh/":{"path":"/zh/star/","indexes":[27,31,32,18]}},"timeline":{"/":{"path":"/timeline/","indexes":[1,13,8,7,6,16,17,9,10,11,12,14,15,36,2,3,4,5,37,0]},"/zh/":{"path":"/zh/timeline/","indexes":[23,38,31,26,25,24,34,35,27,28,29,30,32,33,19,20,21,22,39,18]}},"tutorial":{"/":{"path":"/tutorial/","indexes":[0,2,3,1,4,5]},"/zh/":{"path":"/zh/tutorial/","indexes":[18,19,20,23,21,22]}}};
      
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

      