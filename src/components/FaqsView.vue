<script setup lang="ts">
import TimeLine from './TimeLine.vue';
</script>

<template>
    <div>
        <div
            class="md:pt-[61px] lg:flex-row linked_border lg:items-center space-y-[22.15px] lg:space-x-[40px] lg:space-y-[0px] pt-[29px] pb-[55px] md:pb-[62px] w-full px-[57px] lg:flex md:px-[128px]">
            <div class="lg:w-[50%] w-fit h-fit lg:mx-0 mx-auto">
                <div class="flex items-center w-fit mx-auto lg:mx-0 mb-[9px] md:mb-[16px]">
                    <div id="faqs"
                        class="text-[#fff] mx-auto lg:mx-0 lg:w-[80%] lg:text-left text-center text-[20px] md:text-[32px] font-[700] clashsd">
                        Frequently Ask <span class="text-[#d434fe]">Question</span>
                    </div>
                    <div class="w-fit h-fit">
                    </div>
                </div>
                <div
                    class="text-center mb-[45.69px] md:mb-[68px] font-[400] lg:w-[70%] leading-[27.5px] text-[#fff] md:text-[14px] mont text-[12px] mx-auto lg:mx-0 lg:text-left">
                    We got answers to the questions that you might want to ask about <span class="font-[700]">getlinked
                        Hackathon 1.0</span>
                </div>
                <!--faqs-->
                <div class="mb-[13px] md:mb-[25px]">
                    <div class="flex mb-[9px] md:mb-[13px] items-center w-full">
                        <div
                            class="w-[90%] mont text-[#fff] text-[12px] leading-[18px] font-[400] md:leading-[27.5px] md:text-[14px]">
                            Can I work on a project I started before the hackathon?
                        </div>
                        <div
                            class="w-[10%] text-right text-[#d434fe] cursor-pointer leading-[18px] md:leading-[27.5px] mont font-[400]">
                            +
                        </div>
                    </div>
                    <div class="h-[1px] bg-[#d434fe] w-full"></div>
                </div>
                <div class="mb-[13px] md:mb-[25px]">
                    <div class="flex mb-[9px] md:mb-[13px] items-center w-full">
                        <div
                            class="w-[90%] mont text-[#fff] text-[12px] leading-[18px] font-[400] md:leading-[27.5px] md:text-[14px]">
                            What happens if I need help during the hackathon?
                        </div>
                        <div
                            class="w-[10%] text-right text-[#d434fe] cursor-pointer leading-[18px] md:leading-[27.5px] mont font-[400]">
                            +
                        </div>
                    </div>
                    <div class="h-[1px] bg-[#d434fe] w-full"></div>
                </div>
                <div class="mb-[13px] md:mb-[25px]">
                    <div class="flex mb-[9px] md:mb-[13px] items-center w-full">
                        <div
                            class="w-[90%] mont text-[#fff] text-[12px] leading-[18px] font-[400] md:leading-[27.5px] md:text-[14px]">
                            What happens if I don't have an idea for a project?
                        </div>
                        <div
                            class="w-[10%] text-right text-[#d434fe] cursor-pointer leading-[18px] md:leading-[27.5px] mont font-[400]">
                            +
                        </div>
                    </div>
                    <div class="h-[1px] bg-[#d434fe] w-full"></div>
                </div>
                <div class="mb-[13px] md:mb-[25px]">
                    <div class="flex mb-[9px] md:mb-[13px] items-center w-full">
                        <div
                            class="w-[90%] mont text-[#fff] text-[12px] leading-[18px] font-[400] md:leading-[27.5px] md:text-[14px]">
                            Can I join a team or do I have to come with one?
                        </div>
                        <div
                            class="w-[10%] text-right text-[#d434fe] cursor-pointer leading-[18px] md:leading-[27.5px] mont font-[400]">
                            +
                        </div>
                    </div>
                    <div class="h-[1px] bg-[#d434fe] w-full"></div>
                </div>
                <div class="mb-[13px] md:mb-[25px]">
                    <div class="flex mb-[9px] md:mb-[13px] items-center w-full">
                        <div
                            class="w-[90%] mont text-[#fff] text-[12px] leading-[18px] font-[400] md:leading-[27.5px] md:text-[14px]">
                            What happens after the hackathon ends
                        </div>
                        <div
                            class="w-[10%] text-right text-[#d434fe] cursor-pointer leading-[18px] md:leading-[27.5px] mont font-[400]">
                            +
                        </div>
                    </div>
                    <div class="h-[1px] bg-[#d434fe] w-full"></div>
                </div>
                <div class="mb-[13px] md:mb-[25px]">
                    <div class="flex mb-[9px] md:mb-[13px] items-center w-full">
                        <div
                            class="w-[90%] mont text-[#fff] text-[12px] leading-[18px] font-[400] md:leading-[27.5px] md:text-[14px]">
                            Can I work on a project I started before the hackathon?
                        </div>
                        <div
                            class="w-[10%] text-right text-[#d434fe] cursor-pointer leading-[18px] md:leading-[27.5px] mont font-[400]">
                            +
                        </div>
                    </div>
                    <div class="h-[1px] text-right bg-[#d434fe] w-full"></div>
                </div>
                <!--end faqs-->
            </div>
            <!--second flex end-->
            <div class="lg:w-[50%] mt-[66px] lg:mt-[0px] w-fit h-fit lg:mx-0 mx-auto">
                <img src="/img/faqs.png" class="" />
            </div>
        </div>
        <!---->
        <TimeLine />
    </div>
</template>

<style scoped>
.linked_border {
    border-bottom: 1px solid rgba(255, 255, 255, 0.18)
}
</style>