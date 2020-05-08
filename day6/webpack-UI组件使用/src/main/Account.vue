<template>
    <div>
        <h1>这是account组件</h1>
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<!-- 普通的style只支持普通css语法, 如果要支持scss, 为style标签添加lang属性 -->
<!-- scoped 表示样式作用于这个组件内-->
<style lang="scss" scoped>
 body {
     div {
         font-style: italic;
     }
 }
</style>