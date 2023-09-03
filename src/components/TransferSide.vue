<script setup lang="ts">
import {reactive, ref, onMounted} from 'vue'
const bankInfo = reactive({
    name: 'Polaris Bank',
    account: '0123456781'
})
const copiedBoard = ref(false)
const mins = ref(10 as number)
const secs = ref(60 as number)
const copyFunction=(text: string)=>{
    navigator.clipboard.writeText(text)
    copiedBoard.value = true
    setTimeout(()=>{
        copiedBoard.value = false;
    }, 2000)
}

const countTimer = () => {
    mins.value = 10;
    secs.value = 60;
    const timer = setInterval(()=>{
        secs.value--
        if(secs.value == 0){
            secs.value = 60
            mins.value--
        }

        if((mins.value == 0 && secs.value == 1)){
            mins.value = 0
            secs.value = 0
            clearInterval(timer)
        }
    }, 1000)
}
onMounted(()=>{
    countTimer()
})
</script>

<template>
    <div class="w-[50%] pt-[123px] pr-[66px] pl-[178px] bg-transparent">
        <div class="text-[#0A0D13] mb-[18px] tracking-[-0.48px] leading-[28px] font-[600] text-[24px]">Payment</div>
        <div class="bg-[#acacac] w-full md:mb-[36px] h-[1px]"></div>
        <div class="text-[#0A0D13] mb-[19.5px] leading-[12px] text-[18px] font-[600]">Pay With:</div>

        
        <div class="flex space-x-[42px]">
            <div class="text-[#0a0d13] cursor-pointer font-[500] text-[12px] leading-[22px]">Card</div>
            <div class="text-[#0a0d13] cursor-pointer font-[500] text-[12px] leading-[22px]">Bank</div>
            <div class="text-[#0a0d13] cursor-pointer font-[500] text-[12px] leading-[22px]">Transfer</div>
        </div>

        <div class="text-[16px] mb-[21px] text-center mt-[58px] h-fit mx-auto w-fit text-[#acacac] font-[400] leading-[22px]">
            Transfer USD49.80 to:
        </div>
        <div class="mx-auto w-fit">
            <div class="text-[18px] mb-[3px] w-fit text-[#0a0d13] leading-[21px] font-[600] mx-auto">
                {{ bankInfo.name }}
            </div>
            <div class="w-fit mx-auto flex items-top">
                <div class="text-[24px] text-[#0a0d13] leading-[28px] font-[600]">
                    {{ bankInfo.account }}
                </div>
                <div @click="copyFunction(bankInfo.account)" class="w-fit h-fit">
                    <img loading="eager" src="/images/copy.svg" class="w-fit cursor-pointer h-fit"/>
                </div>
            </div>
        </div>
        <div v-if="copiedBoard" class="mt-[8px] w-fit text-[12px] text-[#fff] font-[500] bg-[#32c770] py-[3px] px-[5px] rounded-[3px]">
            Copied !
        </div>
        <div class="w-fit mb-[70px] text-[16px] text-[#acacac] leading-[12px] font-[400] mx-auto mt-[36px]">
            Expires in <span class="text-[#ff3d3d]">{{ mins }}:{{ secs }}</span> minutes
        </div>
        <button class="w-full mb-[23px] bg-[#32c770] leading-[12px] text-[16px] font-[700] text-center text-[#f3f3f3] rounded-[4px] py-[20px]">
            Confirm Payment
        </button>
        <!--security text-->
        <div class="text-[#acacac] text-[14px] font-[400] leading-[22px]">
            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
        </div>
        <!---->
    </div>
</template>