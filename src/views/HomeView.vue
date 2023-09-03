<script setup lang="ts">
import PaymentSide from '@/components/PaymentSide.vue'
import OrderSummary from '@/components/OrderSummary.vue';
</script>

<template>
  <div class="bg-[#fff] space-x-[18px] hidden lg:flex w-[100%]">
    <PaymentSide/>
    <OrderSummary/>
  </div>
</template>
