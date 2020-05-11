<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容(最多吐槽120字)" maxlength="120" v-model="myComment"></textarea>

        <mt-button type="primary" size="large" @click="commitCmt">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="i">
                <div class="cmt-title">
                    第{{ i + 1 }}楼&nbsp;&nbsp;用户: {{ item.user_name }}&nbsp;&nbsp;发表时间: {{ item.add_time | newsTimeFormat }}
                </div>
                <div class="cmt-body">
                    {{ item.content === 'undefined' ? '此用户很懒, 什么也没说' : item.content }}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>

import { Toast } from 'mint-ui'
import moment from 'moment'

export default {
    props: ['id'],
    data() {
        return {
            comments: [],
            pageIndex: 1,
            myComment: ''
        }
    },
    methods: {
        getComments() {
            this.$http.get('api/getcomments/' + this.id + '?pageindex=' + this.pageIndex).then(result => {
                if(result.body.status === 0) {
                    // 将数据拼入已有数据的数组中
                    this.comments = this.comments.concat(result.body.message)
                } else {
                    Toast('获取评论失败')
                }
            })
        },
        getMore() {
            this.pageIndex++
            this.getComments()
        },
        commitCmt() {

            if(this.myComment.trim() === '') {
                Toast('请添加评论内容')
                return
            }

            // 参数一：url
            // 参数二：数据对象
            // 参数三：传递参数时数据格式 application/x-www-form-urlencoded
            this.$http.post('api/postcomment/' + this.id, {content: this.myComment}).then(result => {
                if(result.body.status === 0) {
                    var tempCmt = { add_time: moment().format('YYYY-MM-DD HH:mm:ss'), content: this.myComment.trim(), user_name: '匿名用户'}
                    this.comments.unshift(tempCmt)
                    this.myComment = ''
                }else {
                    Toast('发布评论失败')
                }
            })
        }
    },
    created() {
        this.getComments()
    },
    watch: {
        
    }
}
</script>

<style lang="scss" scoped>
    .cmt-container {
        h3 {
            font-size: 18px;
        }

        textarea {
            font-size: 14px;
            height: 85px;
            margin: 0;
        }

        .cmt-list {
            margin: 5px 0;
            .cmt-item {
                font-size: 13px;
                .cmt-title {
                    background-color: #ccc;
                    line-height: 30px;
                }

                .cmt-body {
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }
</style>