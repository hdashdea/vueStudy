<template>
    <div>
        <h1>这是我们的vue组件</h1>

        <!-- 这个标签为什么能直接用,  -->
        <mt-button type="primary" @click="show">default</mt-button>
        <mt-button type="primary" size="large">default</mt-button>
        <mt-button type="primary" disabled size="small">default</mt-button>

        <button type="button" class="mui-btn mui-btn-royal">
            紫色
        </button>

        <!-- <myBtn type="primary">1223</myBtn> -->

        <mt-button plain>plain</mt-button>
        <mt-button icon="back">back</mt-button>
        <mt-button icon="more">更多</mt-button>

        <router-link to="/account">账号</router-link>
        <router-link to="/goodList">货物清单</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

// 倒入Toast 组件
import { Toast } from 'mint-ui'

export default {
    data() {
        return {}
    },
    methods: {
        show() {
            var toast = Toast({
                message: '提示',
                iconClass: 'glyphicon glyphicon-heart icon-red',
                position: 'bottom',
                duration: -1
            })

            return toast
        },
        getList() {
            var toast = this.show()
            setTimeout(() => {
                toast.close()
            }, 3000)
        }
    },
    created() {
        this.getList()
    }
}
</script>

<style scoped>

</style>