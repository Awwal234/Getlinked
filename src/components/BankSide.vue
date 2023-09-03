<script setup lang="ts">
import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router'
const banks = reactive(['Access Bank', 'United Bank for Africa (UBA)', 'Keystone Bank', 'Sterling Bank', 'Zenith Bank', 'Union Bank', 'Kuda Microfinance Bank', 'First Bank'])
const showBanks = ref(false)
const bankValue = ref('')
const enterAccountNumber = ref(false)
const amountType = ref('USD')
const amount = ref('59.28')
const accountInput = ref('')

const router = useRouter()

const toggleBankBoard = () => {
    showBanks.value = !showBanks.value
    enterAccountNumber.value = false
}
const addBankToInput = (e: any) => {
    bankValue.value = ''
    const valueText = e.target.textContent
    bankValue.value = valueText

    if(bankValue.value.length >= 1){
        showBanks.value = false
        enterAccountNumber.value = true
    }
}

const confirmPayment = () => {
    router.push('/success');
}
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

        <div class="flex mb-[16px] justify-between items-center">
            <div class="w-[100%]">
                <input v-model='bankValue' type="text" placeholder="Choose your bank" readonly class="w-full py-[11.5px] text-[#acacac] text-[16px] font-[400] leading-[22px] border-[1.5px] border-[#acacac] px-[16px] rounded-[4px] focus:outline-none" />
            </div>
            <div @click="toggleBankBoard" class="w-fit cursor-pointer relative right-[32px]"><img src="/images/chevron.svg" class=""/></div>
        </div>
        <div draggable="false" v-if="showBanks" class="w-[95%] bankboard overflow-y-scroll h-[150px] space-y-[23px] rounded-[8px] py-[12px] px-[16px] bg-[#f9fafa]">
            <div @click="addBankToInput" class="cursor-pointer select-none bank font-[400] text-[#acacac] text-[16px] leading-[22px]" v-for="bank in banks" :key="bank">
                {{  bank }}
            </div>
        </div>
        <div v-show="enterAccountNumber" class="mt-[24px] mb-[115px]">
            <div class="text-[18px] mb-[16px] leading-[22px] font-[600] text-[#0a0d13]">
                Enter Your Bank Account Number
            </div>
            <div class="w-[100%]">
                <input v-model="accountInput" type="text" placeholder="00250053987" class="w-full py-[11.5px] text-[#acacac] text-[16px] font-[400] leading-[22px] border-[1.5px] border-[#acacac] px-[16px] rounded-[4px] focus:outline-none" />
            </div>
        </div>
        <!---->
        <div v-show="enterAccountNumber">
            <button @click="confirmPayment" :class="accountInput.length < 11 ? 'opacity-[0.4]' : 'opacity-[1]'" class="w-full mb-[23px] bg-[#32c770] leading-[12px] text-[16px] font-[700] text-center text-[#f3f3f3] rounded-[4px] py-[20px]">
                Pay {{ amountType }}{{ amount }}
            </button>
            <!--security text-->
            <div class="text-[#acacac] text-[14px] font-[400] leading-[22px]">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
            </div>
        </div>
        <!---->
    </div>
</template>

<style>
.bankboard::-webkit-scrollbar{
  width:4px;
}
.bankboard::-webkit-scrollbar-track{
  width:3px;
  background:transparent;
}
.bankboard::-webkit-scrollbar-thumb{
  width:3px;
  background:#32C770;
  border-radius: 10px;
}
</style>