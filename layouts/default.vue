<template>
  <div class="w-full layout">
    <header class="h-[100px] w-full fixed px-[30px] hidden flex-row box-border justify-between items-center  lg:flex "
      style="z-index:999;" :style="topBannerNavBg">
      <div class="h-full flex flex-row items-center ">
        <svg-icon class="w-[130.89px] h-[50px] mr-[60px]" icon-class="logo" />
        <div class="h-full flex flex-row items-center">
          <div
            class="cursor-pointer text-tip text-[16px] flex flex-row items-center relative rounded-[12px]  px-[21px] py-[12px] hover:bg-gray-700 "
            v-for="(item, index) in navItem" :key="index" @click="openLink(item.link)">
            <span class="mr-[3px]">{{ item.name }}</span>
            <i class="iconfont icon-jiantou_liebiaozhankai transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              v-if="item.children.length > 0"></i>
            <div class=" absolute  left-0 top-0   pt-[70px]   h-[40px] overflow-hidden hover:h-auto  ">
              <div class=" p-[10px]  rounded-[12px]   bg-hovers">
                <div
                  class="h-[84px] w-[294px] p-[20px] box-border group  hover:bg-gray-700  flex flex-row justify-between items-center rounded-[10px]"
                  v-for="(ele, idx) in item.children" :key="idx" @click="openLink(ele.link)">
                  <div class="flex flex-row  items-center">
                    <div
                      class=" w-[44px] h-[44px] rounded-[6px] bg-iconBg flex flex-row justify-center items-center mr-[12px]">
                      <img class="w-[24px]" :src="ele.icon" alt="" srcset="">
                    </div>

                    <div class="max-w-[174px]">
                      <div class=" text-white  text-[14px] font-medium">{{ ele.name }}</div>
                      <div class="text-[10px] text-tip clamp2">{{ ele.dsc }}</div>
                    </div>
                  </div>
                  <i
                    class="iconfont icon-youjiantou transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 opacity-0  group-hover:opacity-100"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center text-white">
        <img @click="lang" class="w-[50px] mr-[20px] cursor-pointer active:opacity-70" src="~assets/imgs/switch.png"
          alt="">

        <div @click="get()" v-if="address == '' || address == undefined || address == null"
          class="cursor-pointer px-[16px] py-[18px]  bg-white text-btnText rounded-[12px] text-[16px]  font-medium hover:bg-gray-100 active:opacity-70">
          {{ $t('connectWallet') }}

        </div>
        <div v-else
          class="cursor-pointer px-[16px] py-[18px]  bg-white text-btnText rounded-[12px] text-[16px]  font-medium hover:bg-gray-100 active:opacity-70">
          {{ address | subAccount }}

        </div>
      </div>
    </header>


    <div class="px-6 pb-8 mt-10 flex flex-row justify-between  items-center w-full box-border lg:hidden">
      <svg-icon class="w-24 h-10" icon-class="logo" />
      <div class="flex flex-row items-center">
        <img @click="lang" class="h-9 mr-3.5 cursor-pointer active:opacity-70" src="~assets/imgs/switch.png"
          alt="">
        <div @click="get()" v-if="address == '' || address == undefined || address == null"
          class="  mainColor  hover:bg-gray-100  box-border  bg-white w-36  h-9 rounded-lg text-base flex flex-row  items-center justify-center mr-3.5">
          Connect Wallet
        </div>
        <div v-else
          class="  mainColor  hover:bg-gray-100  box-border  bg-white w-36  h-9 rounded-lg text-base flex flex-row  items-center justify-center mr-3.5">
          {{ address | subAccount }}
        </div>

        <div class="flex flex-row items-center">
         
          <img @click="drawer = true" class="w-9 h-9" src="@/assets/imgs/menu.png" alt="" />
        </div>
       
      </div>
    </div>



    <nuxt />
    <div class="  bg-gradient-to-r  from-from to-to">
      <div class=" container  pt-[50px] px-[20px] box-border grid grid-cols-1 md:grid-cols-2 relative">
        <div class="flex flex-col  justify-center md:h-[378px]">
          <div class="text-active text-[14px] mb-[20px]"><span> {{ $t('block') }}</span></div>
          <div class="text-[36px]  font-bold text-white ">
            {{ $t('achieve') }}
          </div>
        </div>
        <div class="w-full">
          <img class=" min-w-[335px]  md:absolute -top-[74px] md:max-w-[642px]" src="~assets/imgs/art.png" alt=""
            srcset="">
        </div>
      </div>
      <div class="container mx-auto mt-40 pd-16">
        <div class="  ">
          <div class="lg:col-span-1 flex flex-col mb-16  items-center pl-6 md:pl-0   ">
            <div class="footerInfo flex flex-row items-center ">
              <img class="h-[40.05px]" src="@/assets/logo.png" alt="" />
              <i class=" mx-[4px] text-[16px] iconfont  text-white icon-guanbi"></i>
              <img class="h-[40.05px]" src="@/assets/imgs/Filecoin-logo.png" alt="" />
            </div>
            <div class="slogon text-tip mt-[21px]">
              {{ $t('idea') }}
            </div>
          </div>
          <div class=" text-white footerMenuRight  w-full flex flex-row justify-center ">
            <div class="flex flex-row mx-auto justify-between  items-center w-96 ">
              <a href="https://twitter.com/FlameLaunch" target="_blank" rel="noopener noreferrer">
                <div class="w-16 h-16 bg-gray-800 rounded-full flex flex-row justify-center items-center  cursor-pointer">
                  <img class="w-8/12" src="@/assets/imgs/Twitter.png" alt="" srcset="">
                </div>
              </a>

              <a href="https://t.me/FlameLaunch" target="_blank" rel="noopener noreferrer">
                <div class="w-16 h-16 bg-gray-800 rounded-full flex flex-row justify-center items-center">
                  <img class="w-8/12" src="@/assets/imgs/Telegram.png" alt="" srcset="">
                </div>
              </a>

              <a href="https://discord.gg/7VsNUcavBw" target="_blank" rel="noopener noreferrer">
                <div class="w-16 h-16 bg-gray-800 rounded-full flex flex-row justify-center items-center">
                  <img class="w-8/12" src="@/assets/imgs/Discord.png" alt="" srcset="">
                </div>
              </a>

              <a href="https://www.youtube.com/@FlameLaunch" target="_blank" rel="noopener noreferrer">
                <div class="w-16 h-16 bg-gray-800 rounded-full flex flex-row justify-center items-center">
                  <img class="w-8/12" src="@/assets/imgs/youtube.png" alt="" srcset="">
                </div>
              </a>

              <a href="https://medium.com/@FlameLaunch" target="_blank" rel="noopener noreferrer">
                <div class="w-16 h-16 bg-gray-800 rounded-full flex flex-row justify-center items-center">
                  <img class="w-8/12" src="@/assets/imgs/Medium.png" alt="" srcset="">
                </div>
              </a>

            </div>
          </div>

        </div>

      </div>

      <div class=" border-t border-gray-500 text-center text-gray-500 py-7 mt-20 text-base">
        © 2021 - 2022 | All Rights Reserved - FlameLaunch
      </div>
    </div>
    <el-drawer style=" background-color: #0b121e" custom-class="menuMobile" title="我是标题" direction="ltr" size="100%"
      :show-close="showClose" :visible.sync="drawer" :with-header="false">
      <div class="h-full bg-black pt-20 box-border " style="height: 100%;">
        <div class=" px-6  mb-10">
          <div class="w-full flex flex-row justify-end"> <img class="w-10" src="~assets/imgs/menu.png" alt=""
              @click="drawer = false"> </div>
        </div>
        <div class="box-border px-10   " style="color: #8C9CBA;">
          <div class="relative mb-16" v-for="(item, index) in navItem" :key="index">
            <div class="w-full flex flex-row justify-between  text-xl items-center "
              @click="open(item, index, item.state)">
              <div class="">{{ item.name }}</div>
              <div> <span class="iconfont icon-jiantou_liebiaoxiangyou"></span></div>
            </div>

            <transition name="fade">
              <div class="w-full box-border rounded-lg "
                style="background-color: #1D2331;padding: 0.83rem;margin-top: 1.67rem;"
                v-if="item.children.length > 0 && item.state">
                <div class="rounded-lg h-28 w-full box-border  flex flex-row justify-between items-center"
                  style="background-color: #161B28;padding: 1.67rem;" v-for="(ele, idx) in item.children
                                                      " :key="idx" @click="openLink(ele.link)"
                  v-bind:style="{ backgroundColor: activeColor }">
                  <div class="flex flex-row  items-center ">
                    <div class="h-full rounded-lg flex flex-row justify-center items-center mr-8"
                      style="background-color: #1D2331;width: 3.67rem;height: 3.67rem;">
                      <img class="w-8 h-8" :src="ele.icon" alt="" srcset="">
                    </div>
                    <div>
                      <div class="text-white text-xl font-medium"></div>
                      <div class="text-xs">{{ ele.name }}</div>
                    </div>
                  </div>
                  <div> <span class="iconfont icon-youjiantou"></span></div>
                </div>
              </div>

            </transition>

          </div>


        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>


export default {
  data() {
    return {
      flag: false,
      drawer: false,
      showClose: true,
      topBannerNavBg: {
        backgroundColor: ''
      },



      activeColor: '',
    };
  },
  filters: {
    subAccount(val) {
      return val.substring(0, 4) + "***" + val.substring(val.length - 5)
    }
  },
  created() {


  },
  computed: {
    address() {
      return this.$store.state.userId
    },
    navItem() {
      let self = this
      return [
        {
          name: self.$t('resources'),
          link: false,
          state: false,
          children: [
            {
              name: self.$t('blog'),
              state: false,
              icon: require("@/assets/imgs/Blog.png"),
              dsc: this.$t('blogDsc'),
              link: {
                href: "https://medium.com/@FlameLaunch",
                type: "url"
              }
            },
            {
              name: this.$t('whitepaper'),
              state: false,
              icon: require("@/assets/imgs/Support.png"),
              dsc: this.$t('whitepaperDsc'),
              link: {
                href: "https://flamelaunch.github.io/White-Paper/FLAME-Launch-whitepaper.en.pdf",
                type: "url"
              }
            },
          ],
        },
        {
          name: this.$t('community'),
          state: false,
          children: [
            {
              name: "Twitter",
              state: false,
              icon: require("@/assets/imgs/Twitter.png"),
              dsc: this.$t('twitter'),
              link: {
                href: "https://twitter.com/FlameLaunch",
                type: "url"
              }
            },
            {
              name: "Discord",
              state: false,
              icon: require("@/assets/imgs/Discord.png"),
              dsc: this.$t('discord'),
              link: {
                href: "https://discord.gg/7VsNUcavBw",
                type: "url"
              }
            },
            {
              name: "Telegram",
              state: false,
              icon: require("@/assets/imgs/Telegram.png"),
              dsc: this.$t('telegram'),
              link: {
                href: "https://t.me/FlameLaunch",
                type: "url"
              }
            },
          ],
        },
        {
          name: this.$t('withLaunch'),
          state: false,
          children: [],
          link: {
            href: ".launchPad",
            type: "label"
          }
        },

      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    lang() {
      console.log(this.$i18n.locale)
      if (this.$i18n.locale == "zh") {
        this.$i18n.locale = "en"
      } else {
        this.$i18n.locale = "zh"
      }
    },
    open(item, index, state) {
      if (item.children.length > 0) {

        for (let i = 0; i < this.navItem.length; i++) {
          const element = this.navItem[i];
          if (i == index) {
            console.log(1111)
            this.navItem[i].state = !state
          } else {
            this.navItem[i].state = false
          }
        }
      } else {
        if (item.link.type == "label") {

          this.$el
            .querySelector(item.link.href)
            .scrollIntoView({ block: "start", behavior: "smooth" });
          this.drawer = false
        } else {
          console.log(item.link.href)
          window.open(item.link.href, '_blank');
        }
      }

    },
    get() {
      this.$store.dispatch('connectWallet')
    },

    openLink(e) {
      if (!e) {
        return
      }
      this.drawer = false
      if (e.type == "url") {

        window.open(e.href, '_blank');
      }
      if (e.type == "label") {
        this.$el
          .querySelector(e.href)
          .scrollIntoView({ block: "start", behavior: "smooth" });
      }
      if (e.type == "router") {
        this.$router.push({ path: e.href });
      }
    },
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop) {
        this.topBannerNavBg.backgroundColor = '#1e232f'
      } else if (scrollTop === 0) {
        this.topBannerNavBg.backgroundColor = 'transparent'
      }
    },
    // 滚动之前重置
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll)
    },
  },
};
</script>
<style scoped >
.layout {
  margin: 0 auto;
}

.clamp2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>