/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "750c1546c282a42b134989b187b4e70b"
  },
  {
    "url": "about.html",
    "revision": "9af825eed78848ff28a2f70584951a47"
  },
  {
    "url": "assets/css/0.styles.12d0744c.css",
    "revision": "17863ffb47abf34be8086829038be229"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6c160eac.js",
    "revision": "ed935520b1705a4d4e6937d2575285e5"
  },
  {
    "url": "assets/js/11.0409c95e.js",
    "revision": "595163f1af7d970f1a22c3e137513bd3"
  },
  {
    "url": "assets/js/12.27d6c98f.js",
    "revision": "e3b854ba1f62b836d206ee0f3e017edf"
  },
  {
    "url": "assets/js/13.a3c07268.js",
    "revision": "17f092de192995da24ae938869f03697"
  },
  {
    "url": "assets/js/14.14e019d3.js",
    "revision": "22c06e9ebc445edb333d09337342f32f"
  },
  {
    "url": "assets/js/15.e322c637.js",
    "revision": "33617ace758c8593f35354c3a756da25"
  },
  {
    "url": "assets/js/16.e9949b27.js",
    "revision": "673ca71b9e39bebaa1860a34e8fa05c5"
  },
  {
    "url": "assets/js/17.c293b89d.js",
    "revision": "ba0a9f2bb0f05d9414e56b689e3e11a9"
  },
  {
    "url": "assets/js/18.48f3c7a8.js",
    "revision": "0d665ee34a4fda4dfd8369076a5601c0"
  },
  {
    "url": "assets/js/19.16b0c7e6.js",
    "revision": "eaa8d974f5e86f81569a26bece8e14e3"
  },
  {
    "url": "assets/js/2.1025e516.js",
    "revision": "341999e518f9cb42abdad44120764fda"
  },
  {
    "url": "assets/js/20.0e2c8922.js",
    "revision": "e07f4b38ac0ec703ca02f5666faeef77"
  },
  {
    "url": "assets/js/21.8ff8bbb2.js",
    "revision": "b3975b47ddc6d7862104b730162679bd"
  },
  {
    "url": "assets/js/22.32de6686.js",
    "revision": "ac569e05c67d49e91b2971f40d0b9cdb"
  },
  {
    "url": "assets/js/23.4fd34717.js",
    "revision": "868a5faaa736007b4d396c4b3baf69fb"
  },
  {
    "url": "assets/js/24.e3a3c0b9.js",
    "revision": "84afb798b876ef6c8eadd623790815e4"
  },
  {
    "url": "assets/js/25.268d5185.js",
    "revision": "10c6bd2eb5b929a16506c3d52434e680"
  },
  {
    "url": "assets/js/26.4c76b643.js",
    "revision": "5bda04fecfbc889c1935f3d4a7b8a4b6"
  },
  {
    "url": "assets/js/27.b230c0dd.js",
    "revision": "0ccba0eae0d175c40c81e2a427352b85"
  },
  {
    "url": "assets/js/28.e69327d1.js",
    "revision": "7faafa84e277853b075f8a0cd8b12970"
  },
  {
    "url": "assets/js/29.1c961335.js",
    "revision": "95c9a995463d861c62f3e92c370edeb5"
  },
  {
    "url": "assets/js/3.6736e6ee.js",
    "revision": "8b08f679eb1cd8efbb0c546201b919e2"
  },
  {
    "url": "assets/js/4.a41aa6be.js",
    "revision": "0b4014143777262ee1a69abcf6874c7a"
  },
  {
    "url": "assets/js/5.d789b75a.js",
    "revision": "497a75bb51c716ddbecd6bf42da283d9"
  },
  {
    "url": "assets/js/6.b8dcb539.js",
    "revision": "f2651ec0cabb3cc10533c541f7c29bae"
  },
  {
    "url": "assets/js/7.6568cc16.js",
    "revision": "7b398d65a98a8033e5ad033a72db40c3"
  },
  {
    "url": "assets/js/8.5c21f5be.js",
    "revision": "bf9b895683b03e38d267601a2c951743"
  },
  {
    "url": "assets/js/9.5dc0d465.js",
    "revision": "b45530ac26d17b170096622fa550efac"
  },
  {
    "url": "assets/js/app.a4333ab8.js",
    "revision": "14d18844f4d4b8074649aae407bf7c5c"
  },
  {
    "url": "demo.html",
    "revision": "41f1f8b6d194bf45fb2e713177a363b3"
  },
  {
    "url": "en/about.html",
    "revision": "5a4ec446c9f28c671b8c6d49deadff96"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "994d12b8da49aafdb37504c52b9a9a3a"
  },
  {
    "url": "en/guide/config.html",
    "revision": "c14d0c100be08ba9564bae5068010359"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "70deca3b91d4dfbc90b4e0424f0c1981"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "29a7b834e1ceca760a7f797b9abc1c46"
  },
  {
    "url": "en/guide/index.html",
    "revision": "9dd4fce7536e343a1200b978b17619df"
  },
  {
    "url": "en/guide/page.html",
    "revision": "29621864fdfc7a65104204f880548f74"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "5dbe1c31e1787e685eb569b3648d5c5b"
  },
  {
    "url": "en/guide/Todo.html",
    "revision": "c5fedc3264248e3359e11027f1892359"
  },
  {
    "url": "en/index.html",
    "revision": "cae6f3e45f0190961c90c99680d44d38"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "b84cf678b4af7aacdd004bebabe80448"
  },
  {
    "url": "guide/config.html",
    "revision": "2a40235ca3ba0e9e01ac99e0d059bc8c"
  },
  {
    "url": "guide/faq.html",
    "revision": "4fc83734289e656206eaf8557e7dde5c"
  },
  {
    "url": "guide/icon.html",
    "revision": "8e96762ad77027f67c576dcf47219269"
  },
  {
    "url": "guide/index.html",
    "revision": "8b40b73b44aea2df35ffa2094f8fc058"
  },
  {
    "url": "guide/page.html",
    "revision": "02694ce2b396bb5bda3e83a93158dd66"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "fdfb5d66c4460c813bceb1d121965992"
  },
  {
    "url": "guide/Todo.html",
    "revision": "a1503a027cec44c1707483a3e53b8d1c"
  },
  {
    "url": "index.html",
    "revision": "91a11735fb961c8bc59003ef9c568689"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "sponsor.html",
    "revision": "fef19aefbe6d4e60072cd248dd52ef92"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
