<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
import FooterSection from './FooterSection.vue'

const goRegister = () => {
    router.push('/register')
}
</script>

<template>
    <div>
        <div
            class="md:pt-[61px] bg_space lg:flex-row linked_border lg:items-center space-y-[22.15px] lg:space-x-[40px] lg:space-y-[0px] pt-[29px] pb-[55px] md:pb-[62px] w-full px-[48px] lg:flex md:px-[128px]">
            <div class="lg:w-[50%] w-fit h-fit lg:mx-0 mx-auto">
                <div class="flex items-center w-fit mx-auto lg:mx-0 mb-[9px] md:mb-[17px]">
                    <div
                        class="text-[#fff] mx-auto lg:mx-0 lg:w-[80%] lg:text-left text-center text-[20px] md:text-[32px] font-[700] clashsd">
                        Privacy Policy and <span class="text-[#d434fe]">Terms</span>
                    </div>
                    <div class="w-fit h-fit">
                        <img src="/img/star.png"
                            class="w-[8px] relative lg:top-[-60px] left-[40px] opacity-[0.5] h-[10px] md:w-[26px] md:h-[32px]" />
                    </div>
                </div>
                <div
                    class="text-center mb-[9px] md:mb-[16px] text-[#fff] md:text-[14px] mont text-[13px] mx-auto lg:mx-0 lg:text-left">
                    Last updated on September 12, 2023
                </div>
                <div
                    class="text-center mb-[30px] md:mb-[69px] text-[#fff] md:text-[14px] mont text-[13px] mx-auto lg:mx-0 lg:text-left">
                    Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our
                    participant
                </div>
                <!---->
                <div
                    class="rounded-[5px] py-[45px] px-[15px] md:py-[59px] md:px-[72px] privacy_board border-[1px] border-[#d434fe]">
                    <div
                        class="text-[#fff] leading-[216.4%] mb-[21px] md:mb-[24px] text-center lg:text-left text-[12px] mont md:text-[14px] font-[400] md:leading-[216.4%]">
                        At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal
                        information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data
                        when you participate in our tech hackathon event. By participating in our event, you consent to the
                        practices described in this policy.
                    </div>
                    <div class="mb-[20px] md:mb-[18px]">
                        <div class="mont text-[#d434fe] md:text-[16px] text-[13px] leading-[216.4%] font-[700]">
                            Licensing Policy
                        </div>
                        <div class="text-[#fff] mont md:text-[14px] text-[12px] font-[700] leading-[216.4%]">
                            Here are terms of our Standard License:
                        </div>
                    </div>
                    <div class="flex mb-[24px] md:mb-[18px] items-baseline space-x-[14px]">
                        <div class="w-[8%]"><img src="/img/check.svg" class="" /></div>
                        <div
                            class="text-[#fff] w-[100%] mont text-[12px] md:text-[14px] leading-[175.9%] md:leading-[216.4%]">
                            The Standard License grants you a non-exclusive right to navigate and register for our event
                        </div>
                    </div>
                    <div class="flex items-baseline space-x-[14px]">
                        <div class="w-[8%]"><img src="/img/check.svg" class="" /></div>
                        <div
                            class="text-[#fff] w-[100%] mont text-[12px] md:text-[14px] leading-[175.9%] md:leading-[216.4%]">
                            You are licensed to use the item available at any free source sites, for your project
                            developement
                        </div>
                    </div>
                    <div @click="goRegister"
                        class="w-fit px-[46px] mt-[20px] md:px-[0px] md:w-[172px] mx-auto cursor-pointer register_button text-[#fff] mont font-[400] text-[14px] md:text-[16px] text-center md:py-[17px] py-[14.14px] rounded-[4px]">
                        Register
                    </div>
                </div>
                <!---->
            </div>
            <!--second flex end-->
            <div class="lg:w-[50%] w-fit h-fit lg:mx-0 mx-auto">
                <img loading="lazy" src="/img/lockboy.png" class="h-[447px] object-contain md:h-[952px]" />
            </div>
        </div>
        <!---->
        <FooterSection />
    </div>
</template>

<style scoped>
.linked_border {
    border-bottom: 0px solid rgba(255, 255, 255, 0.18)
}

.bg_space {
    background-image: url("/img/privacybg.png");
    background-repeat: no-repeat;
    background-position: bottom left;
    object-fit: contain;
    background-size: 100% 100%;
}

.privacy_board {
    background: rgba(217, 217, 217, 0.03);
}

.register_button {
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);

}
</style>