<template>
    <div class="newsInfo-container">
        <h3 class="title">{{ newsInfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ newsInfo.add_time | newsTimeFormat }}</span>
            <span>点击：{{ newsInfo.click }}次</span>
        </p>

        <hr>

        <div class="content" v-html="newsInfo.content"></div>

        <comment :id="this.id"></comment>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'

import comment from '../subcomponent/comment.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            newsInfo: {}
        }
    },
    methods: {
        getNewsInfo() {
            this.$http.get('api/getnew/' + this.id).then(result => {
                if(result.body.status === 0) {
                    this.newsInfo = result.body.message[0]
                } else {
                    Toast('获取新闻详情失败')
                }
            })
        }
    },
    components: {
        comment
    },
    created() {
        this.getNewsInfo()
    }
}
</script>

<style lang="scss">
    .newsInfo-container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px 5;
            color: red;
        }

        .subtitle {
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }

        .content {
            img {
                width: 100%;
            }
        }
    }
</style>