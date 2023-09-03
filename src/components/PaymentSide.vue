<script setup lang="ts">
import {ref, reactive, onMounted} from 'vue'
import PinVerify from '@/components/PinVerify.vue'

const amountType = ref('USD')
const amount = ref('59.28')
const paymentFormSection = ref(true)
const pinSection = ref(false)

const paymentForm = reactive({
    cardNumberForm: '',
    expDateForm: '',
    cvvForm: '',
    disable: false,
})
console.log(paymentForm.cardNumberForm.length)

const disableButton = () => {
    if((paymentForm.cardNumberForm.length === 0) || (paymentForm.expDateForm.length === 0) || (paymentForm.cvvForm.length === 0)){
        paymentForm.disable = true;
    }else{
        paymentForm.disable = false;
    }
}

const showPinSection = (e: any) => {
    e.preventDefault();
    pinSection.value = true;
    paymentFormSection.value = false;
}

onMounted(()=>{
    disableButton();
})
</script>

<template>
    <div class="w-[50%] pt-[123px] pr-[66px] pl-[178px] bg-transparent">
        <div class="text-[#0A0D13] mb-[18px] tracking-[-0.48px] leading-[28px] font-[600] text-[24px]">Payment</div>
        <div class="bg-[#acacac] w-full md:mb-[36px] h-[1px]"></div>
        <div class="text-[#0A0D13] mb-[19.5px] leading-[12px] text-[18px] font-[600]">Pay With:</div>

        
        <div class="flex space-x-[42px] mb-[36px]">
            <div class="text-[#0a0d13] cursor-pointer font-[500] text-[12px] leading-[22px]">Card</div>
            <div class="text-[#0a0d13] cursor-pointer font-[500] text-[12px] leading-[22px]">Bank</div>
            <div class="text-[#0a0d13] cursor-pointer font-[500] text-[12px] leading-[22px]">Transfer</div>
        </div>
        
        <div v-show="paymentFormSection">
            <form>
                <div class="text-[18px] mb-[16px] font-[500] leading-[22px] text-[#0a0d13]">
                    <label for="cardNumber">Card Number</label>
                </div>
                <div class="w-full mb-[24px]">
                    <input @keyup="disableButton" v-model="paymentForm.cardNumberForm" id="cardNumber" type="text" 
                        class="rounded-[4px] text-[14px] leading-[22px] text-[#acacac] font-[400] w-full py-[12px] px-[16px] border-[1.5px] border-[#acacac] focus:outline-none"
                        placeholder="1234 5678 9101 1121"/>
                </div>
                <div class="flex w-full mb-[24px] space-x-[18px]">
                    <div class="w-[50%]">
                        <div class="text-[18px] mb-[16px] font-[500] leading-[22px] text-[#0a0d13]">
                            <label for="expDate">Expiration Date</label>
                        </div>
                        <div>
                            <input @keyup="disableButton" v-model="paymentForm.expDateForm" id="expDate" type="text" 
                                class="rounded-[4px] text-[14px] leading-[22px] text-[#acacac] font-[400] w-full py-[12px] px-[16px] border-[1.5px] border-[#acacac] focus:outline-none"
                                placeholder="MM/YY"/>
                        </div>
                    </div>
                    <div class="w-[50%]">
                        <div class="text-[18px] mb-[16px] font-[500] leading-[22px] text-[#0a0d13]">
                            <label for="cvv">CVV</label>
                        </div>
                        <div>
                            <input @keyup="disableButton" v-model="paymentForm.cvvForm" id="cvv" type="text" 
                                class="rounded-[4px] text-[14px] leading-[22px] text-[#acacac] font-[400] w-full py-[12px] px-[16px] border-[1.5px] border-[#acacac] focus:outline-none"
                                placeholder="123"/>
                        </div>
                    </div>
                </div>
                <!--checkbox-->
                <div class="flex items-center mb-[36px] space-x-[32px]">
                    <div><input type="checkbox" class="rounded-[2px] border-[1.5px] border-[#acacac]"/></div>
                    <div class="text-[16px] text-[#acacac] font-[400] leading-[20px]">Save card details</div>
                </div>
                <!--button to pay-->
                <button :class= "paymentForm.disable ? 'opacity-[0.4]' : 'opacity-[1]'" @click="showPinSection" :disabled="paymentForm.disable" class="w-full mb-[23px] bg-[#32c770] leading-[12px] text-[16px] font-[700] text-center text-[#f3f3f3] rounded-[4px] py-[20px]">
                    Pay {{ amountType }}{{ amount }}
                </button>
                <!--security text-->
                <div class="text-[#acacac] text-[14px] font-[400] leading-[22px]">
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                </div>
                <!--form closure-->
            </form>
        </div>
        <PinVerify v-show="pinSection"/>
    </div>
</template>