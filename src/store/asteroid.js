const state = () => ({
    testState: JSON.parse(localStorage.getItem('testState')) || ''
})

const mutations = {
    updateTestState(state, testState) {
        state.testState = testState
        localStorage.setItem('testState', JSON.stringify(state.testState))
    },
    clearTestState(state) {
        state.testState = null
        localStorage.removeItem('testState')
    }
}

export default {
    namespaced: true,
    state,
    mutations
};