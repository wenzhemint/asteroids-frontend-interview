<template>
    <p>State: {{ connected }}</p>
    <P>testState: {{ testState }}</P>
</template>

<script>
import { state } from "@/socket"
import { mapState, mapMutations } from 'vuex'

export default {
    name: "HomePage",
    computed: {
        ...mapState({
            testState: state => state.asteroid.testState
        }),
        connected() {
            return state.connected;
        }
    },
    mounted() {
        console.log('base url from env: ', process.env.VUE_APP_BASE_URL);

        this.updateTestState('testStateValue')
    },
    methods: {
        ...mapMutations('asteroid', ['updateTestState']),
    }
}
</script>