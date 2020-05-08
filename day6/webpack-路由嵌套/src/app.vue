<template>
    <div>

        <h1>这是我们的vue组件</h1>
        <mt-button type="default">default</mt-button>
        <router-link to="/account">账号</router-link>
        <router-link to="/goodList">货物清单</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>