<script setup lang="ts">
import PartnersSector from './PartnersSector.vue'
</script>

<template>
    <div>
        <div class="md:pt-[61px] pt-[29px] bg_space pb-[55px] md:pb-[62px] w-full px-[57px] md:px-[128px]">
            <div class="lg:flex mb-[40px] md:mb-[70px] w-full">
                <div class="hidden w-[60%] lg:block"></div>
                <div class="lg:w-[40%] w-fit mx-auto lg:mx-0">
                    <div>
                        <div
                            class="text-[#fff] mb-[3px] md:mb-[7px] mx-auto lg:mx-0 lg:w-[60%] lg:text-left text-center text-[20px] md:text-[32px] font-[700] clashmd">
                            Prizes and<span class="text-[#d434fe]"> Rewards</span>
                        </div>
                        <div
                            class="w-fit leading-[172.4%] lg:text-left text-[14px] text-center md:w-[60%] mont text-[#fff] lg:mx-0 mx-auto h-fit">
                            Highlight of the prizes or rewards for winners and for participants.
                        </div>
                    </div>
                </div>
            </div>
            <!---->
            <div class="flex flex-col lg:flex-row space-y-[51px] lg:space-y-[0px] lg:space-x-[37px]">
                <div class="lg:w-[40%] h-fit lg:mx-0 w-fit mx-auto">
                    <img loading="lazy" src="/img/trophy.png" class="md:h-[482px] object-contain h-[282px]" />
                </div>
                <div class="lg:w-[60%] h-fit md:w-[60%] w-fit mx-auto lg-mx-0">
                    <img loading="lazy" src="/img/Rewards.png"
                        class="lg:w-full md:h-[494px] w-full h-[209.733px] object-contain" />
                </div>
            </div>
            <!---->
        </div>
        <!---->
        <PartnersSector />
    </div>
</template>

<style scoped>
.bg_space {
    background-image: url("/img/photoburn.png"), lightgray 0px -0.093px / 100% 109.967%;
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
    background-size: 100% 100%;
    background-blend-mode: color-burn;
}
</style>