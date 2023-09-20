<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute
const board = ref(false)
const contactCheck = ref(false)
const goContact = () => {
    router.push('/contact')
    window.scroll(0, 0)
    if (board) {
        board.value = false;
    }
}
const goHome = () => {
    router.push('/')
    window.scroll(0, 0)
}
const goRegister = () => {
    router.push('/register')
}
const check = () => {
    if (window.location.pathname == '/contact' || window.location.pathname == '/register') {
        contactCheck.value = true;
    }
}
onMounted(() => {
    check();
})
</script>

<template>
    <div :class="contactCheck ? 'hidden lg:block' : 'block'" class="w-full z-[100] fixed top-0 h-fit">
        <div :class="contactCheck ? 'bg-[#150E2A]' : 'bg-[#150328]'"
            class="md:pt-[67px] px-[54px] items-center pt-[28px] pb-[28px] flex justify-between md:px-[128px] md:pb-[30px] ">
            <div @click="goHome" class="clashmd cursor-pointer text-[#fff] font-[700] text-[15px] md:text-[36px]">
                get<span class="text-[#d434fe]">linked</span>
            </div>
            <div class="items-center nav_hold">
                <div class="flex relative left-[-121px] space-x-[56px]">
                    <div :class="contactCheck ? 'hidden' : 'block'" class="text-[#fff] mont text-[16px] font-[400]">
                        <a href="#timeline">Timeline</a>
                    </div>
                    <div :class="contactCheck ? 'block' : 'hidden'" class="text-[#fff] mont text-[16px] font-[400]">
                        <a href="https://getlinked-orpin.vercel.app/#timeline">Timeline</a>
                    </div>
                    <div :class="contactCheck ? 'hidden' : 'block'" class="text-[#fff] mont text-[16px] font-[400]">
                        <a href="#overview">Overview</a>
                    </div>
                    <div :class="contactCheck ? 'block' : 'hidden'" class="text-[#fff] mont text-[16px] font-[400]">
                        <a href="https://getlinked-orpin.vercel.app/#overview">Overview</a>
                    </div>
                    <div :class="contactCheck ? 'hidden' : 'block'" class="text-[#fff] mont text-[16px] font-[400]">
                        <a href="#faqs">FAQs</a>
                    </div>
                    <div :class="contactCheck ? 'block' : 'hidden'" class="text-[#fff] mont text-[16px] font-[400]">
                        <a href="https://getlinked-orpin.vercel.app/#faqs">FAQs</a>
                    </div>
                    <div @click="goContact" :class="contactCheck ? 'contact' : 'text-[#fff]'"
                        class="cursor-pointer mont text-[16px] font-[400]">
                        Contact
                    </div>
                </div>
                <!--register button-->
                <div @click="goRegister"
                    class="w-[172px] cursor-pointer register_button text-[#fff] mont font-[400] text-[16px] text-center py-[17px] rounded-[4px]">
                    Register
                </div>
            </div>
            <div @click="board = !board" class="nav">
                <img src="/toggle.svg" class="" />
            </div>
            <!---->
        </div>
        <div :class="contactCheck ? '' : 'header_line'" class="h-[1px] w-full"></div>
        <!--drop-->
        <div v-show="board" class="fixed overflow-y-scroll drop_board px-[22px] md:px-[128px] w-full h-full top-0">
            <div
                class="drop_board mt-[20px] px-[47px] pt-[39px] pb-[141px] rounded-[8px] top-0 w-full h-fit left-0 bg-[#150e28]">
                <div class="flex mb-[57px] items-center justify-between">
                    <div></div>
                    <div @click="board = !board" class="w-fit h-fit">
                        <img src="/img/X.png" class="w-[23px] h-[23px]" />
                    </div>
                </div>
                <!---->
                <div class="space-y-[20px]">
                    <div @click="board = !board"
                        class="text-[#fff] cursor-pointer inter tracking-[-1px] text-[18px] font-[500]">
                        <a href="#timeline">Timeline</a>
                    </div>
                    <div @click="board = !board"
                        class="text-[#fff] cursor-pointer inter tracking-[-1px] text-[18px] font-[500]">
                        <a href="#overview">Overview</a>
                    </div>
                    <div @click="board = !board"
                        class="text-[#fff] cursor-pointer inter tracking-[-1px] text-[18px] font-[500]">
                        <a href="#faqs">FAQs</a>
                    </div>
                    <div @click="goContact" class="text-[#fff] cursor-pointer inter tracking-[-1px] text-[18px] font-[500]">
                        Contact
                    </div>
                    <div @click="goRegister"
                        class="w-fit mt-[9px] px-[52px] md:px-[0px] md:w-[172px] cursor-pointer register_button text-[#fff] inter font-[400] text-[14px] md:text-[16px] text-center md:py-[17px] py-[15px] rounded-[4px]">
                        Register
                    </div>
                </div>
                <!---->
            </div>
        </div>
        <!---->
    </div>
</template>

<style>
.register_button {
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);

}

.header_line {
    background: rgba(255, 255, 255, 0.18);
}

.drop_board {
    backdrop-filter: blur(30px);
}

.nav_hold {
    display: flex;
}

@media only screen and (max-width: 1279px) {
    .nav_hold {
        display: none;
    }
}

.nav {
    display: none;
}

@media only screen and (max-width: 1279px) {
    .nav {
        display: flex;
    }
}

.contact {
    background: linear-gradient(90deg, #903AFF 3.08%, #FF26B9 93.85%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}
</style>