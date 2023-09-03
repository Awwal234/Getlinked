<script setup lang="ts">
import {ref, onMounted} from 'vue'
const loadSVG = ref(true)
const successContent = ref(false)

const loadAnime = () => {
    setTimeout(() => {
        loadSVG.value = false;
        successContent.value = true;
    }, 7000);
}

onMounted(()=>{
    loadAnime()
})
</script>

<template>
    <main class="bg-[#f3f3f3]">
        <div v-show="loadSVG" class="w-fit mx-auto pt-[280px]">
            <img src="/images/load.svg" class="load"/>
        </div>
        <div v-show="successContent" class="w-[80%] mx-auto pt-[178px]">
            <div class="text-[#000] text-center mx-auto mb-[267px] text-[16px] font-[400] leading-[12px]">Thank You For Your Purchase</div>
            <div class="text-[30px] mb-[53px] text-center mx-auto text-[#0a0d13] font-[500] leading-[28px]">
                Order #123RGR231567Y Confirmed
            </div>
            <div class="w-fit mb-[20.5px] mx-auto">
                <button class="w-[500px] justify-center mb-[23px] bg-[#32c770] leading-[12px] text-[16px] font-[700] text-center text-[#f3f3f3] rounded-[4px] py-[20px]">
                    Track Order
                </button>
            </div>
            <div class="text-[#9da3a1] mx-auto w-fit cursor-pointer text-[16px] font-[700] leading-[12px]">
                Generate Receipt
            </div>
        </div>
    </main>
</template>

<style>
.load{
    animation: rotate 3s reverse infinite;
}
@keyframes rotate {
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(360deg)
    }
}
</style>