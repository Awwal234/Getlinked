<script setup lang="ts">
import {reactive, onMounted, ref} from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const buttonShow = ref(false)
const pinField = reactive({
    first: '',
    second: '',
    third: '',
    fourth: ''
})

const focusFirst = () => {
    if(pinField.first.length !== 1){
        const firstPin = document.querySelector('#first') as HTMLInputElement;
        firstPin.focus()
    }
}

//code for auto focus inputs
const focusSecond = () => {
    if(pinField.first.length === 1){
        const secondPin = document.querySelector('#second') as HTMLInputElement;
        secondPin.focus()
    }
}
const focusThird = () => {
    if(pinField.second.length === 1){
        const thirdPin = document.querySelector('#third') as HTMLInputElement;
        thirdPin.focus()
    }
}
const focusFourth = () => {
    if(pinField.third.length === 1){
        const fourthPin = document.querySelector('#fourth') as HTMLInputElement;
        fourthPin.focus()
    }
}

const showButton = () => {
    if(pinField.fourth.length === 1){
        buttonShow.value = true;
    } else {
        buttonShow.value = false;
    }
}

const confirmPayment = () => {
    router.push('/success');
}

onMounted(()=>{
    focusFirst();
})
</script>

<template>
    <div>
        <div class="mx-auto mb-[36px] w-fit text-[#0a0d13] text-[18px] font-[400] leading-[20px]">
            Enter your 4-digit card pin to confirm this payment
        </div>
        <div class="flex mb-[159px] mx-auto w-fit space-x-[24px]">
            <div class="w-fit">
                <input @keyup="focusSecond" id="first" v-model="pinField.first" type="text" class="w-[50px] text-center h-[52px] rounded-[4px] border-[1.5px] border-[#acacac]"/>
            </div>
            <div class="w-fit">
                <input @keyup="focusThird" id="second" v-model='pinField.second' type="text" class="w-[50px] text-center h-[52px] rounded-[4px] border-[1.5px] border-[#acacac]"/>
            </div>
            <div class="w-fit">
                <input @keyup="focusFourth" id="third" v-model="pinField.third" type="text" class="w-[50px] text-center h-[52px] rounded-[4px] border-[1.5px] border-[#acacac]"/>
            </div>
            <div class="w-fit">
                <input @keyup="showButton" id="fourth" v-model="pinField.fourth" type="text" class="w-[50px] text-center h-[52px] rounded-[4px] border-[1.5px] border-[#acacac]"/>
            </div>
        </div>
        <div v-show="buttonShow">
            <button @click="confirmPayment" class="w-full mb-[23px] bg-[#32c770] leading-[12px] text-[16px] font-[700] text-center text-[#f3f3f3] rounded-[4px] py-[20px]">
                Confirm Payment
            </button>
            <div class="text-[#acacac] text-[14px] font-[400] leading-[22px]">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
            </div>
        </div>
    </div>
</template>