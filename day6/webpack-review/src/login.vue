<template>
    <div>
        <h1>这是登陆组件，使用.vue组件渲染出来 --- {{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        // 组件中data 必须是 function
        data() {
            return {
                msg: '123'
            }
        },
        methods: {
            show() {
                console.log('调用了 login.vue 中的show()')
            }
        }
    }
</script>

<style>

</style>