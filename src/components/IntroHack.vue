<script setup lang="ts">
import RulesSection from './RulesSection.vue';
</script>

<template>
    <div>
        <div
            class="md:pt-[61px] linked_border lg:items-center space-y-[22.15px] lg:space-x-[40px] lg:space-y-[0px] pt-[29px] pb-[55px] md:pb-[62px] w-full px-[57px] lg:flex md:px-[128px]">
            <div class="lg:w-[50%] w-fit h-fit lg:mx-0 mx-auto">
                <img src="/img/globe.png" class="" />
            </div>
            <div class="lg:w-[50%] w-fit h-fit lg:mx-0 mx-auto">
                <div class="flex lg:w-full items-center w-fit mx-auto lg:mx-0 mb-[9px] md:mb-[16px]">
                    <div
                        class="text-[#fff] lg:w-[85%] mx-auto lg:mx-0 lg:text-left text-center text-[20px] md:text-[32px] font-[700] clashsd">
                        Introduction to getlinked <span class="text-[#d434fe]">tech Hackathon 1.0</span>
                    </div>
                    <div class="w-fit h-fit">
                        <img src="/img/starpu.png" class="w-[8px] h-[10px] md:w-[30px] md:h-[36px]" />
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
        </div>
        <!---->
        <RulesSection />
    </div>
</template>

<style scoped>
.linked_border {
    border-bottom: 1px solid rgba(255, 255, 255, 0.18)
}
</style>