<script setup lang="ts">
import HeaderView from '@/components/HeaderView.vue';
//@ts-ignore
import serverBase from '../api/base'
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
const router = useRouter()
const form = reactive({
    firstname: '' as string,
    phone: '' as string,
    email: '' as string,
    message: '' as string
})

const sendForm = async () => {
    try {
        const response = await serverBase.post('/hackathon/contact-form', {
            email: form.email,
            phone_number: form.phone,
            first_name: form.firstname,
            message: form.message
        });
        form.email = ''
        form.phone = ''
        form.firstname = ''
        form.message = ''
        console.log(response)
    }
    catch (err) {
        console.log(err)
    }
}

const goBack = () => {
    router.push('/')
    window.scroll(0, 0)
}
</script>

<template>
    <main class="bg-[#150e28]">
        <HeaderView />
        <div class="px-[54px] md:px-[128px]">
            <div @click="goBack" class="lg:hidden pt-[47px]">
                <img src="../../img/back.svg" class="" />
            </div>
            <div class="lg:flex lg:items-top w-full pt-[41px] md:pt-[201px]">
                <div class="lg:w-[40%] hidden lg:block">
                    <div class="text-[#d434fe] clashmd text-[32px] font-[600]">
                        Get in touch
                    </div>
                    <div class="text-[#fff] pt-[17px] text-[16px] font-[400] mont">
                        Contact Information
                    </div>
                    <div class="text-[#fff] pt-[17px] text-[16px] font-[400] mont">
                        27,Alara Street Yaba 100012 Lagos State
                    </div>
                    <div class="text-[#fff] pt-[21px] text-[16px] font-[400] mont">
                        Call Us : 07067981819
                    </div>
                    <div class="text-[#fff] w-[60%] pt-[22px] text-[16px] font-[400] mont">
                        we are open from Monday-Friday 08:00am - 05:00pm
                    </div>
                    <div class="text-[#d434fe] pb-[14px] pt-[35px] clashmd text-[16px] font-[600]">
                        Share on
                    </div>
                    <div class="flex-row flex items-center space-x-[19px]">
                        <div class="w-fit h-fit">
                            <img src="../../img/instagram.svg" class="cursor-pointer" />
                        </div>
                        <div class="w-fit h-fit">
                            <img src="../../img/twitter.svg" class="cursor-pointer" />
                        </div>
                        <div class="w-fit h-fit">
                            <img src="../../img/facebook.svg" class="cursor-pointer" />
                        </div>
                        <div class="w-fit h-fit">
                            <img src="../../img/linkedin.svg" class="cursor-pointer" />
                        </div>
                    </div>
                </div>
                <!---->
                <div class="w-full md:mx-auto lg:mx-0 md:w-[80%] lg:w-[60%]">
                    <div class="md:w-[80%] md:mx-auto contactboard md:py-[75px] md:px-[20px] lg:px-[92px] w-full">
                        <div class="text-[#d434fe] clashmd text-[20px] font-[600]">
                            Questions or need assistance?
                        </div>
                        <div class="text-[#d434fe] mb-[24px] md:mb-[34px] clashmd text-[20px] font-[600]">
                            Let us know about it
                        </div>
                        <div class="md:hidden mb-[30px] text-[#fff] mont text-[12px] font-[400]">
                            Email us below to any question related
                            to our event
                        </div>
                        <!--inputs-->
                        <div class="mb-[25px] md:mb-[41px]">
                            <input v-model="form.firstname" placeholder="First Name" type="text"
                                class="w-full px-[29px] text-[#fff] mont text-[16px] font-[400] py-[13px] input_box focus:outline-none" />
                        </div>
                        <div class="mb-[25px] md:mb-[41px]">
                            <input v-model="form.phone" placeholder="Phone number" type="text"
                                class="w-full px-[29px] text-[#fff] mont text-[16px] font-[400] py-[13px] input_box focus:outline-none" />
                        </div>
                        <div class="mb-[25px] md:mb-[41px]">
                            <input v-model="form.email" placeholder="Email" type="text"
                                class="w-full px-[29px] text-[#fff] mont text-[16px] font-[400] py-[13px] input_box focus:outline-none" />
                        </div>
                        <div class="mb-[25px] md:mb-[41px]">
                            <input v-model="form.message" placeholder="Message" type="text"
                                class="w-full px-[29px] pb-[160px] md:pb-[119px] text-[#fff] mont text-[16px] font-[400] pt-[13px] input_box focus:outline-none" />
                        </div>
                        <div @click="sendForm"
                            class="rounded-[4px] mb-[41px] md:mb-[0px] mx-auto w-fit cursor-pointer text-[#fff] mont font-[400] text-[16px] py-[17px] px-[56px] text-center btn_sub">
                            Submit
                        </div>
                        <div
                            class="text-[#d434fe] md:hidden text-center mx-auto w-fit pb-[14px] pt-[35px] clashmd text-[12px] font-[400]">
                            Share on
                        </div>
                        <div class="flex-row w-fit md:hidden mx-auto flex items-center space-x-[19px]">
                            <div class="w-fit h-fit">
                                <img src="../../img/instagram.svg" class="cursor-pointer" />
                            </div>
                            <div class="w-fit h-fit">
                                <img src="../../img/twitter.svg" class="cursor-pointer" />
                            </div>
                            <div class="w-fit h-fit">
                                <img src="../../img/facebook.svg" class="cursor-pointer" />
                            </div>
                            <div class="w-fit h-fit">
                                <img src="../../img/linkedin.svg" class="cursor-pointer" />
                            </div>
                        </div>
                        <div class="md:hidden pt-[30px]"></div>
                        <!---->
                    </div>
                    <div class="hidden md:block pt-[30px]"></div>
                </div>
                <!--end second flex or straigh screen on mobile-->
            </div>
            <!---->
        </div>
    </main>
</template>

<style scoped>
main {
    background: url('../../img/bgcontact.png');
    background-repeat: no-repeat;
    background-position: contain;
    background-size: 100% 100%;
    background-blend-mode: hard-light;
}

.contactboard {
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

@media only screen and (max-width: 768px) {
    .contactboard {
        border-radius: 0px;
        background: transparent;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    }
}

.input_box {
    border-radius: 4px;
    border: 1px solid #FFF;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.btn_sub {
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);
}
</style>