<script setup lang="ts">
import { computed } from "vue";
import { useStore } from '../store'
import avatar from '../assets/avatar.svg'

const store = useStore()

const user: any = computed(() => store.state.currentUser)
</script>

<template>
  <div class="card not_choiced" v-if="user === undefined">
    Выберите сотрудника, чтобы посмотреть его профиль
  </div>
  <div v-else class="card">
    <div class="avatar">
      <img :src="avatar" />
    </div>
    <div class="userInfo">
      <div class="name">{{ user?.name }}</div>
      <div class="email"><span>email: </span>{{ user?.email }}</div>
      <div class="phone"><span>phone: </span>{{ user?.phone }}</div>
      <div class="about_me">
        <p>О себе:</p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  background: #FDFDFD;
  padding: 30px 0 0 22px;
  border-left: 1px solid #DEDEDD;
  &.not_choiced {
    background: #fff;
    align-items: center;
  }

  .avatar {
    width: 424px;

    img {
      background: #fff;
      width: 100%;
      height: 286px;
    }
  }

  .userInfo {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    padding-left: 61px;

    .name {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      color: #000000;
      margin-bottom: 10px;
    }

    .email,
    .phone {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 140%;
      color: #76787D;
      margin-bottom: 10px;

      span {
        font-weight: 600;
        color: #000;
      }
    }

    .about_me {
      margin-top: 10px;
      width: 439px;
      p {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        color: #333333;
      }
    }
  }
}
</style>