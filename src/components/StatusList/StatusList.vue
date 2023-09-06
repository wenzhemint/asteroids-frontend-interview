<template>
    <div class="list-container">
        {{ tab }}
    </div>
</template>

<script>
export default {
    name: "StatusList",
    props: {
        tab: Number
    },
    mounted() {
        console.log("status list loaded. ")
    }
}
</script>

<style scoped lang="scss">
.list-container {
    width: 543px;
}

</style>