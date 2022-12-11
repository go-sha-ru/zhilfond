<script setup lang="ts">
import { useStore } from '../store'
import { ref, computed } from 'vue'
import { ActionTypes } from '../store/action-types'
import { MutationTypes } from '../store/mutation-types'
import { Status } from '../store/status'
import UserSearch from './UserSearch.vue'

const query = ref('');
const store = useStore()
const currentStatus = computed({
    get: () => store.getters.getStatus,
    set: (val) => store.commit(MutationTypes.SET_STATUS, val),
});

const users = computed(() => store.state.users);
const getUsersLength = computed(() => store.getters.getUsersLength)

const search = (q: string) => {
    query.value = q
    currentStatus.value = Status.SEARCHING
    store.dispatch(ActionTypes.GET_USERS, q)    
}

</script>

<template>
    <div class="sidebar">
        <div class="header">Поиск сотрудников</div>
        <input placeholder="Введите Id или имя " v-debounce:300ms="search" />
        <div class="header">Результаты</div>
        <div>
            <div v-if="query === ''">начните поиск</div>
            <div v-else-if="currentStatus === Status.SEARCHING">идёт поиск</div>
            <div class="searchResult" v-else-if="getUsersLength > 0 ">
                <template v-for="user in users">
                    <UserSearch :user="user" />
                </template>
            </div>
            <div v-else-if="currentStatus === Status.ERROR">Произошла ошибка</div>
            <div v-else>ничего не найдено</div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    padding: 27px 30px 0 20px;
}

.header {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #333333;
    margin-bottom: 14px;
}

input {
    width: 209px;
    background: #FFFFFF;
    border: 1.5px solid #E9ECEF;
    border-radius: 8px;
    padding: 16px 14px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 29px;
}
.searchResult {
    display: flex;
    flex-direction: column;
}
</style>