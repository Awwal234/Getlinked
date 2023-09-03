<script setup lang="ts">
import BankSide from '../../components/BankSide.vue'
import OrderSummary from '../../components/OrderSummary.vue';
</script>

<template>
  <div class="bg-[#fff] space-x-[18px] hidden lg:flex w-[100%]">
    <BankSide/>
    <OrderSummary/>
  </div>
</template>