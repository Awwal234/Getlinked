<script setup lang="ts">
import JudgingView from './JudgingView.vue';
</script>

<template>
    <div>
        <div
            class="md:pt-[61px] bg_space flex flex-col-reverse lg:flex-row linked_border lg:items-center space-y-[22.15px] lg:space-x-[40px] lg:space-y-[0px] pt-[29px] pb-[55px] md:pb-[62px] w-full px-[57px] lg:flex md:px-[128px]">
            <div class="lg:w-[50%] w-fit h-fit lg:mx-0 mx-auto">
                <div class="flex items-center w-fit mx-auto lg:mx-0 mb-[9px] md:mb-[16px]">
                    <div
                        class="text-[#fff] mx-auto lg:mx-0 lg:w-[80%] lg:text-left text-center text-[20px] md:text-[32px] font-[700] clashsd">
                        Rules and <span class="text-[#d434fe]">Guidelines</span>
                    </div>
                    <div class="w-fit h-fit">
                        <img src="/img/star.png"
                            class="w-[8px] relative lg:top-[-60px] left-[40px] opacity-[0.5] h-[10px] md:w-[26px] md:h-[32px]" />
                    </div>
                </div>
                <div class="text-center text-[#fff] md:text-[14px] mont text-[13px] mx-auto lg:mx-0 lg:text-left">
                    Our tech hackathon is a melting pot of visionaries, and
                    its purpose is as clear as day: to shape the future.
                    Whether you're a coding genius, a design maverick, or a
                    concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world
                    problems, pushing the boundaries of technology, and creating solutions that can change the world, that's
                    what we're all about!
                </div>
            </div>
            <!--second flex end-->
            <div class="lg:w-[50%] w-fit h-fit lg:mx-0 mx-auto">
                <img src="/img/womanverify.png" class="" />
            </div>
        </div>
        <!---->
        <JudgingView />
    </div>
</template>

<style scoped>
.linked_border {
    border-bottom: 1px solid rgba(255, 255, 255, 0.18)
}

.bg_space {
    background-image: url("/img/pbgone.png");
    background-repeat: no-repeat;
    background-position: cover;
    background-size: 100% 100%;
}
</style>