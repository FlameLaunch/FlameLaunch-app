<template>
  <div>
    <div class="w-full bg-cover bg-center lg:h-[780px] bg-no-repeat mb-[100px] md:mb-0"
      style="background-image: url('../imgs/bgBanner.gif');">
      <div class="container h-full flex  px-[27px] pb-[50px] box-border md:px-0 flex-wrap-reverse">
        <div class="h-full flex flex-col   justify-center flex-1 md:flex-[0.5]">
          <div class="title text-[36px]  lg:text-[66px]  font-black ">FLAME LAUNCH</div>
          <div class="lg:mt-[22px] lg:text-[26px] text-tip">{{ $t('topDsc') }}</div>
        </div>
        <div class="w-full h-full flex flex-row   justify-end  items-center mt-[39px] md:flex-[0.5]">
          <img class=" lg:w-[536.36px] " src="~assets/imgs/flame1.gif" alt="" srcset="">
        </div>
      </div>
    </div>
    <div class=" container px-[20px]   box-border md:px-0   ">
      <div
        class=" w-full h-[500px]  p-[20px] md:h-[220px] lg:h-[450px] md:p-[32px]  box-border bg-cover bg-center bg-no-repeat mb-[80px] md:mb-[153px] launch rounded-[16px] overflow-hidden">
        <div
          class="text-[32px]  md:text-[29px] lg:text-[54px] font-black text-white lg:pt-[60px] lg:pl-[80px] lg:mb-[29px]">
          FLAME LAUNCH</div>
        <div
          class=" text-[10px] md:text-[9px] md:leading-[21px]  leading-[23px]  md:w-[698px]  lg:text-[16px] lg:leading-[38px] text-white opacity-50 lg:ml-[80px] break-all">
          {{ $t('launchDsc') }}
        </div>
      </div>

      <!-- launch pad -->
      <div class="mb-[80px] launchPad">
        <div class="text-[24px] font-bold  text-white mb-[28px]">Launchpad</div>
        <div class="grid  grid-cols-1 md:grid-cols-3 gap-[20px]">
          <div class="text-white flex flex-col">
            <div
              class="w-full min-h-[246px] md:flex-1  rounded-[16px] launchBrand flex flex-col items-center justify-center">
              <img class="w-[64px]" src="~assets/imgs/FLT.png" alt="" srcset="">
              <div class="text-[22px]  font-black  mt-[12px]">Flame launch Token</div>
              <div class="mt-[12px] text-[12px] ">1 FIL = 185FLT</div>
            </div>
            <div
              class=" cursor-not-allowed disabled w-full bg-active text-bg h-[58px] mt-[20px] rounded-[10px] flex flex-row items-center justify-center text-[16px] font-medium active:opacity-70">
              <span class="mr-[10px]"> {{ $t('sale') }}</span> <i class="iconfont icon-youjiantou "></i>
            </div>
          </div>

          <div class="md:col-span-2  bg-card rounded-[14px]    overflow-hidden  box-border">
            <div class="px-[16px] pt-[16px]">
              <div class="flex flex-wrap md:flex-nowrap mb-[40px] md:mb-[33px]">
                <div class="w-full order-last md:order-none">
                  <div class="w-full text-tip text-[16px]  mb-[10px]">{{ $t('totalRaise') }}</div>
                  <div class="text-white text-[24px]  font-medium">10000/10000</div>
                </div>
                <div class=" w-full flex flex-row justify-end">
                  <div>
                    <span class=" bg-gren bg-opacity-20 text-gren px-[12px] py-[9px] rounded-full">
                      <i class="iconfont icon-youjiantou "></i>
                      <span>{{ $t('ing') }}</span></span>
                  </div>
                </div>
              </div>

              <div class="w-full  rounded-full h-[20px] bg-bg overflow-hidden mb-[40px] md:mb-[33px]">
                <div class="w-[78%] h-full bg-active rounded-full">
                  <span class="text-[12px] font-medium text-white ml-[10px] leading-[20px]">{{ $t('salesVolume') }}:
                    78%</span>
                </div>
              </div>

              <div class="flex flex-row justify-between items-center mb-[15px] ">
                <span class=" text-active">{{ $t('register') }}</span> <span class="text-white text-[16px]">1111</span>
              </div>
              <div class="flex flex-row justify-between items-center mb-[15px] ">
                <span class=" text-active">{{ $t('price') }}:</span> <span class="text-white text-[16px]">$1,111</span>
              </div>
              <div class="flex flex-row justify-between items-center mb-[15px] ">
                <span class=" text-active">{{ $t('startDate') }}:</span> <span class="text-white text-[16px]">May 1,
                  2022</span>
              </div>

            </div>
            <div class="border-t border-input w-full mt-[35px] flex flex-row justify-between p-[20px] box-border">
              <div class="flex-1 flex flex-row items-center"><i
                  class="iconfont icon-daojishi text-active text-[30px]"></i> <span class="text-tip">{{ $t('endSale')
                  }}</span>
              </div>
              <div class="text-tip text-[12px] flex-1 text-right">
                {{ $t('tokenVol') }}: 1.56 million <br /> {{ $t('tokenSum') }}: 9.87 million
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="grid grid-cols-1 md:grid-cols-1 gap-[10px] mb-[22px]">
          <div class="text-[24px] font-bold  text-white"> {{ $t('understand') }}</div>
          <div class="text-active text-[14px]"><span>{{ $t('viewBlogs') }}</span></div>
        </div>
        <div class="grid grid-cols-1 gap-[16px] mb-[80px] md:grid-cols-11 md:gap-[30px]">


          <div
            class=" w-full min-h-[235px] relative bg-card rounded-[14px] max-h-[510px] md:col-span-7 bg-center bg-no-repeat bg-cover cursor-pointer"
            style="background-image: url('../imgs/bg9.png');  background-size: 80%;" @click="toVideo">
            <div class=" w-full top-0 left-0 pt-[85px] lg:pt-[185px] pl-[14px]">
              <img class="w-[28px] mb-[9px] lg:w-[60px]" src="~assets/imgs/video.png" alt="" srcset="">
              <div class=" text-white  font-black text-[20px] mb-[4px] lg:text-[40px]">{{ $t('understandItem1') }}</div>
              <div class="text-tip lg:text-[20px]">{{ $t('understandItem1Dsc') }}
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-col-2  md:col-span-4 md:gap-[30px] gap-[16px]">
            <a href="https://medium.com/@FlameLaunch/flame-launch-ido-launchpad-new-features-and-flame-launch-how-does-launchpad-become-a-better-91c7caff72f0"
              target="_blank" rel="noopener noreferrer">
              <div
                class=" md:max-h-[244px] box-border px-[13px] py-[8px] w-full flex flex-row justify-between items-center    bg-card rounded-[14px]">
                <div class="flex-[0.5]">
                  <!-- <img class="w-[28px] mb-[7px] lg:w-[60px]" src="~assets/imgs/video.png" alt="" srcset=""> -->
                  <div class="text-white text-[17px]  font-black">{{ $t('understandItem2') }}</div>
                </div>
                <div class="flex-[0.5]">
                  <img src="~assets/imgs/token1.png" alt="" srcset="">
                </div>
              </div>
            </a>

            <a href="https://medium.com/@FlameLaunch/what-is-flame-launch-simple-for-beginnersintroduce-7dd813095834"
              target="_blank" rel="noopener noreferrer">
              <div
                class="md:max-h-[244px] box-border px-[13px] py-[8px] w-full flex flex-row justify-between items-center    bg-card rounded-[14px]">
                <div class="flex-[0.5]">
                  <!-- <img class="w-[28px] mb-[7px] lg:w-[60px]" src="~assets/imgs/video.png" alt="" srcset=""> -->
                  <div class="text-white text-[17px]  font-black">{{ $t('understandItem3') }}</div>
                </div>
                <div class="flex-[0.5]">
                  <img src="~assets/imgs/ido.png" alt="" srcset="">
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>


      <div>
        <div class="grid grid-cols-1 md:grid-cols-1 gap-[10px] mb-[32px]">
          <div class="text-[28px] font-bold  text-white">{{ $t('apply') }}</div>
          <div class="text-active text-[14px]"><span>{{ $t('bring') }}</span></div>
        </div>
        <div class="grid grid-cols-1 gap-[50px] mb-[80px] md:grid-cols-2 lg:grid-cols-3 ">
          <div class=" rounded-[14px] w-full overflow-hidden  ">
            <img src="~assets/imgs/project3.png" alt="" srcset="">
            <!-- <div class="bg-gold bg-opacity-10 text-gold h-[30px] px-[17px] flex flex-row items-center justify-between">
              <span>Ends with</span> <span>March 14, 2022</span>
            </div> -->
            <div class="bg-card">
              <div class="pt-[36px] flex flex-row items-center justify-between px-[17px] box-border ">
                <div class=" text-white text-[28px] font-medium">Web 3.0</div>
                <img class="w-[34px] mb-[19px]" src="~assets/imgs/fil.png" alt="" srcset="">
              </div>
              <div class="text-tip text-[14px] min-h-[160px] leading-[20px] break-all px-[17px] box-border">
                {{ $t('web3') }}
              </div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSexsQ5MEjgIjKuTIfidqKol8JdM1Kf4QDzHDdFgHa7CQSmDow/viewform?usp=sf_link"
                target="_blank" rel="noopener noreferrer">
                <div class="mt-[24px] h-[36px] text-center leading-[36px] text-[16px]  bg-gold bg-opacity-10 text-gold">
                  {{ $t('apply') }}</div>
              </a>
            </div>
          </div>




          <div class=" rounded-[14px] w-full overflow-hidden ">
            <img src="~assets/imgs/project2.png" alt="" srcset="">
            <!-- <div class="bg-cyan bg-opacity-10 text-cyan h-[30px] px-[17px] flex flex-row items-center justify-between">
              <span>Ends with</span> <span>March 14, 2022</span>
            </div> -->
            <div class="bg-card">
              <div class="pt-[36px] flex flex-row items-center justify-between px-[17px] box-border">
                <div class=" text-white text-[28px] font-medium">DEFI</div>
                <img class="w-[34px] mb-[19px]" src="~assets/imgs/fil.png" alt="" srcset="">
              </div>
              <div class="text-tip text-[14px] min-h-[160px] leading-[20px] break-all px-[17px] box-border">
                {{ $t('defi') }}
              </div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSexsQ5MEjgIjKuTIfidqKol8JdM1Kf4QDzHDdFgHa7CQSmDow/viewform?usp=sf_link"
                target="_blank" rel="noopener noreferrer">
                <div class="mt-[24px] h-[36px] text-center leading-[36px] text-[16px]  bg-cyan bg-opacity-10 text-cyan">
                  {{ $t('apply') }}</div>
              </a>
            </div>
          </div>




          <div class=" rounded-[14px] w-full overflow-hidden cursor-pointer">
            <img src="~assets/imgs/project1.png" alt="" srcset="">
            <div class="bg-card">
              <div class="pt-[36px] flex flex-row items-center justify-between px-[17px] box-border">
                <div class=" text-white text-[28px] font-medium">SocialFi</div>
                <img class="w-[34px] mb-[19px]" src="~assets/imgs/fil.png" alt="" srcset="">
              </div>
              <div class="text-tip text-[14px] min-h-[160px]  leading-[20px] break-all px-[17px] box-border">
                {{ $t('metaverse') }}
              </div>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSexsQ5MEjgIjKuTIfidqKol8JdM1Kf4QDzHDdFgHa7CQSmDow/viewform?usp=sf_link"
                target="_blank" rel="noopener noreferrer">

                <div
                  class="mt-[24px] h-[36px] text-center leading-[36px] text-[16px]  bg-purple1 bg-opacity-10 text-purple1">
                  {{ $t('apply') }}</div>
              </a>

            </div>
          </div>
        </div>



        <div class="md:mb-[174px] mb-[80px]">
          <div class="text-[28px] font-bold  text-white"> {{ $t('partner') }}</div>
          <div class="text-active text-[14px] mb-[22px]"><span>{{ $t('partnerDsc') }}</span></div>
          <div class="bg-card rounded-[16px] w-full h-auto overflow-hidden px-[26px] py-[34px] md:px-[55px] md:py-[81px] box-border grid  gap-[34px] md:gap-[80px] grid-rows-5 md:grid-rows-2  grid-flow-col">

            <a href="https://ipfs.tech/" target="_blank" rel="noopener noreferrer">
              <img class="h-[31px] md:h-[56px]" src="~assets/logos/ipfs.png" alt="" srcset="">
            </a>

            <a href="https://www.lens.xyz/" target="_blank" rel="noopener noreferrer">
              <img class="h-[31px] md:h-[56px]" src="~assets/logos/aws.png" alt="" srcset="">
            </a>

            <a href="https://chain.link/" target="_blank" rel="noopener noreferrer">
              <img class="h-[31px] md:h-[56px]" src="~assets/logos/lens.png" alt="" srcset="">
            </a>

            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
              <img class="h-[31px] md:h-[56px]" src="~assets/logos/thegraph.png" alt="" srcset="">
            </a>

            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
              <img class="h-[31px] md:h-[56px]" src="~assets/logos/safe.png" alt="" srcset="">
            </a>

            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
              <img class="h-[31px] md:h-[56px]" src="~assets/logos/chainlink.png" alt="" srcset="">
            </a>

            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
              <img class="h-[31px] md:h-[56px]" src="~assets/logos/dune.png" alt="" srcset="">
            </a>
            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
              <img class="h-[31px] md:h-[56px]" src="~assets/logos/coingecko.png" alt="" srcset="">
            </a>
            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
              <img class="h-[31px] md:h-[56px]" src="~assets/logos/coinmarketcap.png" alt="" srcset="">
            </a>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>


export default {
  name: 'IndexPage',

  data() {
    return {

    }
  },
  methods: {
    toVideo() {
      const w = window.open("about:blank");
      w.location.href = "https://www.youtube.com/watch?v=VJdCJa00qIY";

    }
  }
}
</script>

<style scoped>
.launchBrand {
  background: radial-gradient(circle at 50%, #634C9C, #323976);
}

.launch {
  background-image: url("~static/imgs/bg7.png");
  background-size: 100%;
}

@media (min-width: 768px) {
  .launch {
    background-image: url("~static/imgs/bg2.png");
  }
}

.title {
  background: linear-gradient(270deg, #916BC8 0%, #2CB6F4 52%, #7EDC75 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
