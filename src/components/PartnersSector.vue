<script setup lang="ts">
import PrivacyPage from './PrivacyPage.vue'
</script>

<template>
    <div>
        <div
            class="md:pt-[61px] partner_space linked_border lg:items-center pt-[29px] pb-[55px] md:pb-[62px] w-full px-[48px] md:px-[128px]">
            <div class="w-fit h-fit mx-auto">
                <div class="w-fit mx-auto mb-[41px] md:mb-[65px]">
                    <div
                        class="text-[#fff] mb-[21px] md:mb-[12px] mx-auto  text-center text-[20px] md:text-[32px] font-[700] clashsd">
                        Partners and Sponsors
                    </div>
                    <div class="w-fit leading-[172.4%] text-[14px] text-center md:w-[60%] mont text-[#fff] mx-auto h-fit">
                        Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and
                        sponsors
                    </div>
                </div>
            </div>
            <div class="w-full h-fit">
                <img loading="lazy" src="/img/partnerbg.png" class="w-full md:h-[560px] object-contain h-[145.9px]" />
            </div>
        </div>
        <!---->
        <PrivacyPage />
    </div>
</template>

<style scoped>
.linked_border {
    border-bottom: 1px solid rgba(255, 255, 255, 0.18)
}

.partner_space {
    background-image: url("../../img/partnerbackg.png");
    background-repeat: no-repeat;
    background-position: contain;
    object-fit: contain;
    background-size: 100% 100%;
    background-blend-mode: color-burn;
}
</style>