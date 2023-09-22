<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
import FaqsView from './FaqsView.vue';

const goRegister = () => {
    router.push('/register')
    window.scroll(0, 0)
}
</script>

<template>
    <div>
        <div
            class="md:pt-[61px] lg:flex-row linked_border lg:items-center space-y-[22.15px] lg:space-x-[40px] lg:space-y-[0px] pt-[29px] pb-[55px] md:pb-[62px] w-full px-[48px] lg:flex md:px-[128px]">
            <div class="lg:w-[50%] w-fit h-fit lg:mx-0 mx-auto">
                <img src="/img/percircle.png" class="" />
            </div>
            <div class="lg:w-[50%] w-fit h-fit lg:mx-0 mx-auto">
                <div class="flex items-center w-fit mx-auto lg:mx-0 mb-[9px] md:mb-[16px]">
                    <div id="overview"
                        class="text-[#fff] mx-auto lg:mx-0 w-[90%] lg:w-[80%] lg:text-left text-center text-[20px] md:text-[32px] font-[700] clashsd">
                        Judging Criteria <span class="text-[#d434fe]">Key attributes</span>
                    </div>
                    <div class="w-fit h-fit">
                    </div>
                </div>
                <div
                    class="text-center mb-[20px] md:mb-[22px] text-[#fff] md:text-[14px] mont text-[13px] mx-auto lg:mx-0 lg:text-left">
                    <span class="text-[#ff26b9]">Innovation and Creativity:</span> Evaluate the uniqueness and creativity of
                    the solution. Consider
                    whether it
                    addresses a real-world problem in a novel way or introduces innovative features.
                </div>
                <div
                    class="text-center mb-[20px] md:mb-[22px] text-[#fff] md:text-[14px] mont text-[13px] mx-auto lg:mx-0 lg:text-left">
                    <span class="text-[#ff26b9]">Functionality:</span> Assess how well the solution works. Does it perform
                    its intended functions
                    effectively
                    and without major issues? Judges would consider the completeness and robustness of the solution.
                </div>
                <div
                    class="text-center text-[#fff] mb-[20px] md:mb-[22px] md:text-[14px] mont text-[13px] mx-auto lg:mx-0 lg:text-left">
                    <span class="text-[#ff26b9]">Impact and Relevance:</span> Determine the potential impact of the solution
                    in the real world. Does it address
                    a significant problem, and is it relevant to the target audience? Judges would assess the potential
                    social, economic, or environmental benefits.
                </div>
                <div
                    class="text-center text-[#fff] mb-[20px] md:mb-[22px] md:text-[14px] mont text-[13px] mx-auto lg:mx-0 lg:text-left">
                    <span class="text-[#ff26b9]">Technical Complexity:</span> Evaluate the technical sophistication of the
                    solution. Judges would consider the
                    complexity of the code, the use of advanced technologies or algorithms, and the scalability of the
                    solution.
                </div>
                <div
                    class="text-center text-[#fff] mb-[20px] md:mb-[22px] md:text-[14px] mont text-[13px] mx-auto lg:mx-0 lg:text-left">
                    <span class="text-[#ff26b9]">Adherence to Hackathon Rules:</span> Judges will Ensure that the team
                    adhered to the rules and guidelines of
                    the hackathon, including deadlines, use of specific technologies or APIs, and any other
                    competition-specific requirements.
                </div>
                <div @click="goRegister"
                    class="w-fit px-[46px] md:px-[0px] md:w-[172px] mx-auto lg:mx-0 cursor-pointer register_button text-[#fff] mont font-[400] text-[14px] md:text-[16px] text-center md:py-[17px] py-[14.14px] rounded-[4px]">
                    Register
                </div>
            </div>
            <!--second flex end-->
        </div>
        <FaqsView />
        <!---->
    </div>
</template>

<style scoped>
.linked_border {
    border-bottom: 1px solid rgba(255, 255, 255, 0.18)
}

.register_button {
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);

}
</style>