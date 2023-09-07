<template>
    <div class="frame-container">
        
    </div>
</template>

<script>
export default {
    name: "StatusFrame",
    mounted() {
        console.log("status frame loaded. ")
    }
}
</script>

<style scoped lang="scss">
.frame-container {
    position: relative;
    z-index: 20;
    width: 800px;
    height: 801px;
    background-image: url("../../assets/images/StatusFrameBg.png");
}

</style>