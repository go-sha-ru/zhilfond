<script setup lang="ts">
import { useStore } from '../store'
import { defineProps, computed } from "vue";
import { ActionTypes } from '../store/action-types'
import userSvg from '../assets/user.svg'

const store = useStore()

const props = defineProps({
    user: Object,
    isActive: Boolean,
})
const setCurrentUser = (id: number) => {
    store.dispatch(ActionTypes.SET_CURRENT_USER, id)
}
const currentUser = computed(() => store.state.currentUser)
const classObject = computed(() => {return {
    gray: currentUser.value?.id === props.user?.id
}})

</script>
<template>
    <div class="userPreview" @click="setCurrentUser(user?.id)">
        <img :src="userSvg" />
        <div class="userInfo" :class="classObject">
            <div class="username">{{ user?.username }}</div>
            <div class="email">{{ user?.email }}</div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.userPreview {
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 18px;
    display: flex;    
    cursor: pointer;

    img {
        width: 70px;
    }

    .userInfo {
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
        justify-content: center;
        padding-left: 15px;
        width: 170px;
        overflow: hidden;
        &.gray {
            background: #E0E0E0;
            border-radius: 0 10px 10px 0cd;
        }
        .username {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            color: #333333;
        }

        .email {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #76787D;
        }
    }
}
</style>