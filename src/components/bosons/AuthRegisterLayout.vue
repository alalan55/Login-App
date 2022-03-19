<template>
    <div class="auth-registe-layout">
        <div class="component">
            <router-view/>
        </div>
        <div class="img"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.auth-registe-layout{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &>div{
        border: 1px solid;
        width: 100%;
        height: 100%;
    }
}

</style>