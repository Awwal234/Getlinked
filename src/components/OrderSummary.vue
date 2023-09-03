<script setup lang="ts">
import {ref} from 'vue'
const orderTitle = ref('Taxmax Leather Bag')
const orrderSubTitle = ref('Brown Vegan Leather')
const orderAmount = ref('$49.80')
const quantityNumber = ref('2')

</script>

<template>
    <div class="w-[50%] bg-[#f9fafa] pt-[123px] px-[66px] relative pb-[387px] border border-[#d9d9d9]">
        <div class="text-[#0A0D13] mb-[18px] tracking-[-0.48px] leading-[28px] font-[600] text-[24px]">Order Summary</div>
        <div class="bg-[#acacac] w-full md:mb-[36px] h-[1px]"></div>
        <div class="flex mb-[36px]">
            <div class="flex w-[70%] space-x-[16px]">
                <div class="w-[20%] h-[70px] border border-[#acacac] rounded-[4px]"></div>
                <div class="space-y-[4px]">
                    <div class="text-[18px] text-[#0a0d13] font-[500] leading-[22px]">
                        {{ orderTitle }}
                    </div>
                    <div class="text-[16px] font-[500] leading-[12px] text-[#acacac]">
                        {{ orrderSubTitle }}
                    </div>
                </div>
            </div>
            <div class="w-[30%] space-y-[4px] text-right">
                <div class="text-[18px] text-[#0a0d13] font-[500] leading-[22px]">
                    {{ orderAmount }}
                </div>
                <div class="text-[16px] font-[500] leading-[12px] text-[#acacac]">
                    Qty: {{ quantityNumber }}
                </div>
            </div>
        </div>
        <!---->
        <div class="bg-[#acacac] w-full md:mb-[36px] h-[1px]"></div>
        <div class="flex mb-[36px] space-x-[16px]">
            <div class="w-[70%]">
                <input id="discountInput" type="text" 
                    class="rounded-[4px] text-[14px] leading-[22px] text-[#acacac] font-[400] w-full py-[12px] px-[16px] border-[1.5px] border-[#acacac] focus:outline-none"
                    placeholder="Gift or discount code"/>
            </div>
            <button class="w-[30%] text-[#f3f3f3] text-[16px] font-[500] leading-[12px] text-center py-[13px] bg-[#acacac] border border-[#acacac] rounded-[4px]">
                Apply
            </button>
        </div>
        <div class="bg-[#acacac] w-full md:mb-[36px] h-[1px]"></div>
        <div class="space-y-[16px] mb-[36px]">
            <div class="flex justify-between">
                <div class="text-[#0a0d13] text-[16px] font-[500] leading-[12px]">Subtotal</div>
                <div class="text-[16px] text-[#0a0d13] font-[500] leading-[12px]">$49.80</div>
            </div>
            <div class="flex justify-between">
                <div class="text-[#0a0d13] text-[16px] font-[500] leading-[12px]">Shipping</div>
                <div class="text-[16px] text-[#0a0d13] font-[500] leading-[12px]">$7.24</div>
            </div>
        </div>
        <div class="bg-[#acacac] w-full md:mb-[36px] h-[1px]"></div>
        <div class="flex items-bottom justify-between">
            <div class="space-y-[4px]">
                <div class="text-[#0a0d13] text-[16px] font-[500] leading-[12px]">Total</div>
                <div class="text-[#acacac] text-[14px] font-[400] leading-[22px]">
                    Including $2.24 in taxes
                </div>
            </div>
            <div class="text-[36px] text-[#0a0d13] font-[500] leading-[18px]">
                $59.28
            </div>
        </div>
        <!---->
    </div>
</template>