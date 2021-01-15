//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
let bannerimg =[
    "url(https://cdn.jsdelivr.net/gh/ql-isaac/CDN1/banner-images/AugustStargazing_ZH-CN9929724138_1920x1080.jpg)",
    "url(https://cdn.jsdelivr.net/gh/ql-isaac/CDN1/banner-images/ColoradoColumbine_ZH-CN0901580141_1920x1080.jpg)",
    "url(https://cdn.jsdelivr.net/gh/ql-isaac/CDN1/banner-images/jhk-1609480907329.jpg)",
    "url(https://cdn.jsdelivr.net/gh/ql-isaac/CDN1/banner-images/MischwaldFuessen_ROW2474656135_1920x1080.jpg)",
    "url(https://cdn.jsdelivr.net/gh/ql-isaac/CDN1/banner-images/IbonPlan_ZH-CN8564017247_1920x1080.jpg)",
    "url(https://cdn.jsdelivr.net/gh/ql-isaac/CDN1/banner-images/4.png)",
    "url(https://cdn.jsdelivr.net/gh/ql-isaac/CDN1/banner-images/5.jpg)",
    "url(https://cdn.jsdelivr.net/gh/ql-isaac/CDN1/banner-images/ChateauBeynac_ZH-CN8777586167_1920x1080.jpg)",
    "url(https://cdn.jsdelivr.net/gh/ql-isaac/CDN1/banner-images/DerwentIsle_ZH-CN9777894186_1920x1080.jpg)",
    "url(https://cdn.jsdelivr.net/gh/ql-isaac/CDN1/banner-images/FinancialTowers_ZH-CN6494148642_1920x1080.jpg)",
    "url(https://cdn.jsdelivr.net/gh/ql-isaac/CDN1/banner-images/LionDay_ZH-CN5594846597_1920x1080.jpg)",
    "url(https://cdn.jsdelivr.net/gh/ql-isaac/CDN1/banner-images/SeaFireflies_ZH-CN5748822339_1920x1080.jpg)",
  ];
  //获取banner图片总数，生成随机数
  let bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];