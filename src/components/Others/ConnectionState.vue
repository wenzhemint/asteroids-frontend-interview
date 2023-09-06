<template>
    <p>State: {{ connected }}</p>
</template>

<script>
import { state } from "@/socket"
import { mapState, mapMutations } from 'vuex'

export default {
    name: "ConnectionState",
    computed: {
        connected() {
            return state.connected
        },
        ...mapState({
            testState: state => state.asteroid.testState
        }),
        methods: {
            ...mapMutations('asteroid', ['updateTestState']),
            updateCurrentTab(index) {
                this.currentTab = index
            }
        }
    }
}
</script>