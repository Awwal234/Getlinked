<script setup lang="ts">
import HeaderView from '@/components/HeaderView.vue';
//@ts-ignore
import serverBase from '../api/base'
import { useRouter } from 'vue-router'
import { ref, onMounted, reactive } from 'vue'
const categories = ref([]) as any
const categoryinp = ref('')
const respond = ref('')
const groupinp = ref('')
const form = reactive({
    email: '',
    phone: '',
    teamname: '',
    projecttopic: '',
    privacy: true,
})
const router = useRouter()
const catboard = ref(false)
const groupboard = ref(false)
const congrate = ref(false)
const getvalofcategory = (e: any) => {
    categoryinp.value = e.target.textContent;
    console.log(e.target.textContent)
    catboard.value = false;
}
const getvalofgroup = (e: any) => {
    groupinp.value = e.target.textContent;
    console.log(e.target.textContent)
    groupboard.value = false;
}
const groups = reactive({
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
})

const getCategories = async () => {
    try {
        const res = await serverBase.get('/hackathon/categories-list');
        console.log(res.data)
        categories.value = res.data
    } catch (err) {
        console.log(err)
    }
}
const Submit = async () => {
    const numofcategory = ref('')
    if (categoryinp.value == 'WEB') {
        numofcategory.value = '2'
    } else if (categoryinp.value == 'MOBILE') {
        numofcategory.value = '1'
    } else if (categoryinp.value == 'UI/UX') {
        numofcategory.value = '3'
    } else {
        numofcategory.value = ''
    }
    try {
        const res = await serverBase.post('/hackathon/registration', {
            email: form.email,
            phone_number: form.phone,
            team_name: form.teamname,
            groupsize: parseInt(groupinp.value),
            project_topic: form.projecttopic,
            category: parseInt(numofcategory.value),
            privacy_policy_accepted: form.privacy
        });
        congrate.value = true;
        form.email = ''
        form.phone = ''
        form.teamname = ''
        form.projecttopic = ''
        groupinp.value = ''
        categoryinp.value = ''
    } catch (err) {
        console.log(err)
        respond.value = 'Error, please try again'
        setTimeout(() => {
            respond.value = ''
        }, 4000)
    }
}
onMounted(() => {
    getCategories();
})

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
                <img src="/img/back.svg" class="" />
            </div>
            <div class="lg:flex lg:items-center lg:items-top w-full pt-[41px] md:pt-[201px]">
                <div class="lg:w-[40%] hidden lg:block">
                    <img src="/img/manthreed.png" class="w-[100%] object-contain h-[717px]" />
                </div>
                <!---->
                <div class="w-full md:mx-auto lg:mx-0 md:w-[80%] lg:w-[60%]">
                    <div class="md:w-full md:mx-auto contactboard md:py-[75px] md:px-[20px] lg:px-[92px] w-full">
                        <div class="text-[#d434fe] md:mb-[29px] clashmd text-[20px] font-[600]">
                            Register
                        </div>
                        <div class="w-fit h-fit mx-auto pb-[8px] pt-[35px] md:hidden">
                            <img src="/img/manthreed.png" class="object-contain h-[155px]" />
                        </div>
                        <div class="flex mb-[7px] md:mb-[19px] items-center">
                            <div class="text-[#fff] mont text-[12px] font-[400]">
                                Be part of this movement! ..........
                            </div>
                        </div>
                        <div
                            class="uppercase mb-[23px] md:mb-[33px] text-[#fff] font-[400] mont text-[20px] md:text-[24px]">
                            Create your account
                        </div>
                        <!--form-->
                        <div
                            class="flex mb-[18px] md:mb-[29px] space-y-[18px] md:space-y-[0px] md:space-x-[32px] w-full flex-col md:flex-row">
                            <div class="w-full space-y-[5px] md:space-y-[11px] md:w-[50%]">
                                <div class="text-[#fff] font-[400] mont text-[12px] md:text-[14px]">
                                    Team's Name
                                </div>
                                <div>
                                    <input v-model="form.teamname" placeholder="Enter the name of your group" type="text"
                                        class="w-full px-[29px] text-[#fff] mont text-[12px] md:text-[12px] font-[400] py-[13px] input_box focus:outline-none" />
                                </div>
                            </div>
                            <div class="w-full space-y-[5px] md:space-y-[11px] md:w-[50%]">
                                <div class="text-[#fff] font-[400] mont text-[12px] md:text-[14px]">
                                    Phone
                                </div>
                                <div>
                                    <input v-model="form.phone" placeholder="Enter your phone number" type="text"
                                        class="w-full px-[29px] text-[#fff] mont text-[12px] md:text-[12px] font-[400] py-[13px] input_box focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <!--second line-->
                        <div
                            class="flex mb-[18px] md:mb-[29px] space-y-[18px] md:space-y-[0px] md:space-x-[32px] w-full flex-col md:flex-row">
                            <div class="w-full space-y-[5px] md:space-y-[11px] md:w-[50%]">
                                <div class="text-[#fff] font-[400] mont text-[12px] md:text-[14px]">
                                    Email
                                </div>
                                <div>
                                    <input v-model="form.email" placeholder="Enter your email address" type="email"
                                        class="w-full px-[29px] text-[#fff] mont text-[12px] md:text-[12px] font-[400] py-[13px] input_box focus:outline-none" />
                                </div>
                            </div>
                            <div class="w-full space-y-[5px] md:space-y-[11px] md:w-[50%]">
                                <div class="text-[#fff] font-[400] mont text-[12px] md:text-[14px]">
                                    Project Topic
                                </div>
                                <div>
                                    <input v-model="form.projecttopic" placeholder="What is your group project topic"
                                        type="text"
                                        class="w-full px-[29px] text-[#fff] mont text-[12px] md:text-[12px] font-[400] py-[13px] input_box focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <!--third line-->
                        <div
                            class="flex mb-[18px] md:mb-[29px] space-y-[0px] md:space-y-[0px] items-center space-x-[19px] md:space-x-[32px] w-full flex-row md:flex-row">
                            <div class="w-full space-y-[5px] md:space-y-[11px] md:w-[50%]">
                                <div class="text-[#fff] font-[400] mont text-[12px] md:text-[14px]">
                                    Category
                                </div>
                                <div>
                                    <input @click="catboard = !catboard" v-model="categoryinp" readonly
                                        placeholder="Select your category" type="text"
                                        class="w-full px-[29px] text-[#fff] mont text-[12px] md:text-[12px] font-[400] py-[13px] input_box focus:outline-none" />
                                </div>
                            </div>
                            <div class="w-full space-y-[5px] md:space-y-[11px] md:w-[50%]">
                                <div class="text-[#fff] font-[400] mont text-[12px] md:text-[14px]">
                                    Group Size
                                </div>
                                <div>
                                    <input @click="groupboard = !groupboard" v-model="groupinp" readonly
                                        placeholder="Select" type="text"
                                        class="w-full px-[29px] text-[#fff] mont text-[12px] md:text-[12px] font-[400] py-[13px] input_box focus:outline-none" />
                                </div>
                            </div>
                        </div>
                        <!---->
                        <div class="flex relative items-center top-[-45px] md:top-[-55px] w-full">
                            <div class="flex w-[50%] items-center justify-between">
                                <div></div>
                                <div @click="catboard = !catboard"
                                    class="relative cursor-pointer left-[-25px] md:left-[-25px]">
                                    <img src="/img/chevron.svg" class="" />
                                </div>
                            </div>
                            <div class="flex w-[50%] items-center justify-between">
                                <div></div>
                                <div @click="groupboard = !groupboard"
                                    class="relative cursor-pointer left-[-15px] md:left-[-15px]">
                                    <img src="/img/chevron.svg" class="" />
                                </div>
                            </div>
                        </div>
                        <div class="flex space-x-[20px] w-full">
                            <div class="w-[50%]">
                                <div v-show="catboard"
                                    class="space-y-[10px] w-full py-[5px] px-[5px] rounded-[4px] bg-[#fff] text-[#000] clashmd text-[13px]">
                                    <div @click="getvalofcategory" class="cursor-pointer" v-for="category in categories"
                                        :key="category">
                                        {{ category.name }}
                                    </div>
                                </div>
                            </div>
                            <div class="w-[50%]">
                                <div v-show="groupboard"
                                    class="space-y-[10px] py-[5px] px-[5px] rounded-[4px] bg-[#fff] text-[#000] clashmd text-[13px]">
                                    <div @click="getvalofgroup" class="cursor-pointer" v-for="group in groups" :key="group">
                                        {{ group }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--last-->
                        <div class="text-[12px] mb-[8px] mt-[8px] font-[700] text-[red] clashmd">{{ respond }}</div>
                        <div class="text-[#ff26b9] mb-[12px] md:mb-[16px] mont text-[12px] font-[400]">
                            Please review your registration details before submitting
                        </div>
                        <div class="flex md:mb-[22px] mb-[14px] items-baseline space-x-[10px]">
                            <input type="checkbox" checked />
                            <div class="text-[#fff] text-[12px] mont font-[400]">
                                I agreed with the event terms and conditions and privacy policy
                            </div>
                        </div>
                        <div @click="Submit"
                            class="rounded-[4px] mx-auto w-full md:w-full cursor-pointer text-[#fff] mont font-[400] text-[16px] py-[17px] px-[56px] text-center btn_sub">
                            Register Now
                        </div>
                        <!--end form-->
                        <div class="md:hidden pt-[30px]"></div>
                        <!---->
                    </div>
                    <div class="hidden md:block pt-[30px]"></div>
                </div>
                <!--end second flex or straigh screen on mobile-->
            </div>
            <!---->
        </div>
        <!--overlay effect-->
        <div v-show="congrate"
            class="register_overlay py-[50px] flex md:block justify-center items-center z-[1000] w-full fixed top-0 h-full overflow-y-scroll">
            <div class="congrat_board md:mx-auto md:py-[73px] md:px-[54px] py-[28px] px-[35px] w-[80%] md:w-[50%]">
                <div class="w-fit mb-[15px] mx-auto md:mb-[10px] h-fit">
                    <img src="/img/congratulation.png" class="object-contain h-[184.924px] md:h-[321px]" />
                </div>
                <div class="w-fit mx-auto">
                    <div class="text-[#fff] mb-[6px] font-[600] text-[16px] md:text-[27px] mont mx-auto text-center w-fit">
                        Congratulations
                    </div>
                    <div
                        class="text-[#fff] mb-[16px] md:mb-[10px] font-[600] text-[16px] md:text-[27px] mont mx-auto text-center w-fit">
                        You have successfully Registered!
                    </div>
                    <div
                        class="text-[#fff] mb-[20px] md:mb-[30px] font-[600] text-[12px] md:text-[14px] mont mx-auto text-center w-[95%] md:w-[60%]">
                        Yes, it was easy and you did it!
                        check your mail box for next step &#128521;
                    </div>
                    <div @click="congrate = !congrate"
                        class="rounded-[4px] mx-auto w-full md:w-full cursor-pointer text-[#fff] mont font-[400] text-[16px] py-[17px] px-[56px] text-center btn_sub">
                        Back
                    </div>
                </div>
            </div>
        </div>
        <!--end overlay effect-->
    </main>
</template>

<style scoped>
main {
    background: url('/img/bgcontact.png');
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

input::placeholder {
    color: rgba(255, 255, 255, 0.25);
}

.register_overlay {
    background: rgba(21, 14, 40, 0.93);
}

.register_overlay::-webkit-scrollbar {
    display: none;
}

.congrat_board {
    border-radius: 5px;
    border: 1px solid #D434FE;
    background: rgba(255, 255, 255, 0.01);
}
</style>