import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import axios from "axios";
import { MutationTypes } from './mutation-types'
import { ActionTypes } from './action-types'
import { Status } from './status';

export interface State {
    status: string,
    currentUser: object | undefined,
    users: object[],
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        status: Status.IDLE,
        currentUser: undefined,
        users: []
    },
    getters: {
        getStatus: state => state.status,
        getUsersLength: state => state.users.length,
    },
    mutations: {
        [MutationTypes.SET_USERS](state, payload) {
            state.users = payload
        },
        [MutationTypes.SET_CURRENT_USER](state, id) {
            state.currentUser = state.users.find((user: any) => user.id === id)
        },
        [MutationTypes.SET_STATUS](state, status) {
            state.status = status
        },
    },
    actions: {
        async [ActionTypes.GET_USERS]({ commit }, query) {
            let url = 'https://jsonplaceholder.typicode.com/users/'
            url += isNaN(query)
                ? ''
                : `${query}`
            try {
                const res = await axios.get(url)
                let data = Array.isArray(res.data) ? res.data : [res.data]
                if (isNaN(query)) {
                    data = data.filter((item: any) => item.username.includes(query))
                }                
                commit(MutationTypes.SET_USERS, data)
                commit(MutationTypes.SET_STATUS, Status.IDLE)
            } catch (error) {
                commit(MutationTypes.SET_STATUS, Status.ERROR)
            }            
            
        },
        [ActionTypes.SET_CURRENT_USER] ({ commit }, id) {
            commit(MutationTypes.SET_CURRENT_USER, id)
        }
    }
})

export function useStore(): typeof store {
    return baseUseStore(key)
}