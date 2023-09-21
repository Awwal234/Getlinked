<script setup lang="ts">
import { useRouter } from 'vue-router'
import IntroHack from './IntroHack.vue'
const router = useRouter()

const goRegister = () => {
    router.push('/register')
}
</script>

<template>
    <div class="">
        <div class="w-full bg_space">
            <div class="md:flex mb-[0px] lg:pt-[210px] md:pt-[210px] w-full hidden justify-between">
                <div class="w-fit anime_star relative left-[185px] h-fit">
                    <img src="/img/star.png" class="object-contain w-[26px] h-[32px]" />
                </div>
                <div>
                    <div
                        class="text-[#fff] top-[-20px] mb-[2px] relative right-[55px] italic mont text-[25px] lg:text-[36px] font-[700]">
                        Igniting a Revolution in HR Innovation
                    </div>
                    <div class="flex relative top-[-28px] items-center justify-between">
                        <div></div>
                        <div class="w-fit lg:flex h-fit relative right-[55px]">
                            <img src="/img/stroke.svg" class="" />
                        </div>
                    </div>
                </div>
            </div>
            <!--mobile-->
            <div class="md:hidden mb-[10px] pt-[110px] px-[33px]">
                <div class="text-[#fff] mb-[5px] text-center mx-auto mont text-[16px] italic font-[700]">
                    Igniting a Revolution in HR Innovation
                </div>
                <div class="flex mb-[18px] justify-between items-center">
                    <div></div>
                    <div class="relative right-[9px]">
                        <img src="/img/stroketwo.svg" class="" />
                    </div>
                </div>
                <div class="w-fit anime_star h-fit relative left-[90px]">
                    <img src="/img/star.png" class="object-contain w-[10px] h-[12px]" />
                </div>
            </div>
            <!--end mobile-->
            <div
                class="w-full linked_border lg:items-top lg:flex pb-[0px] pl-[0px] pr-[0px] md:pr-[128px] md:pl-[128px] lg:pl-[128px] lg:pr-[0px]">
                <div class="w-full pl-[33px] pr-[33px] md:pr-[0px] md:pl-[0px] mx-auto lg:mx-0 lg:w-[50%]">
                    <div class="flex flex-row w-[100%] justify-between">
                        <div>
                            <div></div>
                        </div>
                        <div class="w-fit relative right-[45px] h-fit">
                            <img src="/img/creative.png" class="md:w-[53px] object-contain md:h-[73px] w-[18px] h-[26px]" />
                        </div>
                    </div>
                    <div>
                        <div class="w-full">
                            <div
                                class="font-[700] leading-[normal] z-[10] relative text-center lg:text-left mx-auto lg:mx-0 text-[#fff] text-[32px] md:text-[60px] lg:text-[80px] clashbd">
                                getlinked Tech Hackathon <span class="text-[#d434fe]">1.0</span>
                            </div>
                        </div>
                        <div class="flex w-full justify-between">
                            <div></div>
                            <div
                                class="flex top-[-40px] relative lg:top-[-100px] lg:left-[90px] md:top-[-80px] items-center">
                                <img src="/img/chain.png"
                                    class="md:w-[86px] object-contain md:h-[86px] w-[32.797px] h-[32.797px]" />
                                <img src="/img/fire.png"
                                    class="md:w-[58px] object-contain md:h-[58px] w-[22.119px] h-[22.119px]" />
                            </div>
                        </div>
                    </div>
                    <div
                        class="relative lg:leading-[166%] lg:w-[75%] lg:mb-[-45px] w-[80%] md:w-[85%] text-center lg:text-left text-[13px] mx-auto lg:mx-0 md:text-[20px] text-[#fff] font-[400] mont top-[-25px] md:top-[-40px] lg:top-[-80px]">
                        Participate in getlinked tech Hackathon 2023
                        stand a chance to win a Big prize
                    </div>
                    <div @click="goRegister"
                        class="w-fit px-[46px] md:px-[0px] md:w-[172px] mx-auto lg:mx-0 cursor-pointer register_button text-[#fff] mont font-[400] text-[14px] md:text-[16px] text-center md:py-[17px] py-[14.14px] rounded-[4px]">
                        Register
                    </div>
                    <div
                        class="mx-auto mb-[11.77px] lg:mb-[0px] lg:pt-[50px] md:pt-[77px] space-x-[20px] md:space-x-[20px] flex w-fit lg:mx-0">
                        <div class="text-[#fff] unica md:leading-[133%] text-[48px] md:text-[64px] font-[400]">
                            00<span class="mont text-[14px]">H</span>
                        </div>
                        <div class="text-[#fff] unica md:leading-[133%] text-[48px] md:text-[64px] font-[400]">
                            00<span class="mont text-[14px]">M</span>
                        </div>
                        <div class="text-[#fff] unica md:leading-[133%] text-[48px] md:text-[64px] font-[400]">
                            00<span class="mont text-[14px]">S</span>
                        </div>
                    </div>
                </div>
                <!--line 2 or flex-->
                <div class="lg:w-[50%] blend h-fit">
                    <img loading="lazy" src="/img/versemannew.png"
                        class="w-full hidden lg:relative lg:block z-[15] bg-blend-hard-light object-contain lg:h-full h-full" />
                    <img loading="lazy" src="/img/hackguy.png"
                        class="w-full lg:hidden bg-blend-hard-light object-contain lg:h-fit h-full" />
                </div>
            </div>
        </div>
        <!--real seaction-->
        <IntroHack />
    </div>
</template>

<style scoped>
.register_button {
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);

}

.blend {
    background-blend-mode: hard-light;
}

.linked_border {
    border-bottom: 1px solid rgba(255, 255, 255, 0.18)
}

.anime_star {
    animation: 2s glow infinite backwards;
}

@keyframes glow {
    0% {
        opacity: 0.3;
    }

    40% {
        opacity: 0.6;
    }

    100% {
        opacity: 1;
    }
}

.bg_space {
    background-image: url("../../img/Bherobg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    background-blend-mode: hard-light;
}
</style>