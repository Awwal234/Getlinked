<script setup lang="ts">
import TransferSide from '../../components/TransferSide.vue'
import OrderSummary from '../../components/OrderSummary.vue';
</script>

<template>
    <div class="bg-[#fff] space-x-[18px] hidden lg:flex w-[100%]">
        <TransferSide/>
        <OrderSummary/>
    </div>
</template>