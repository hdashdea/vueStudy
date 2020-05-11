<template>
    <div class="photoInfo-container">
        <h3 class="title">{{ photoInfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoInfo.add_time | newsTimeFormat }}</span>
            <span>点击：{{ photoInfo.click }}次</span>
        </p>

        <hr>

        <vue-preview :slides="lizePhotoList" @close="handleClose"></vue-preview>

        <div class="content" v-html="photoInfo.content"></div>

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
            photoInfo: {},
            lizePhotoList: []
        }
    },
    methods: {
        getPhotoInfo() {
            this.$http.get('api/getimageInfo/' + this.id).then(result => {
                if(result.body.status === 0) {
                    this.photoInfo = result.body.message[0]
                } else {
                    Toast('获取图片详情失败')
                }
            })
        },
        getLizePhotoList() {
            this.$http.get('api/getthumimages/' + this.id).then(result => {
                if(result.body.status === 0) {
                    result.body.message.forEach(item => {
                        var tempDate = { 
                            src: item.src,
                            msrc: item.src,
                            alt: '图片未加载',
                            w: 600,
                            h: 400
                            }
                        this.lizePhotoList.push(tempDate)
                    })
                    
                } else {
                    Toast('获取缩略图失败')
                }
            })
        },
        handleClose() {
            
        }
    },
    components: {
        comment
    },
    created() {
        this.getPhotoInfo()
        this.getLizePhotoList()
    }
}
</script>

<style lang="scss" scoped>
    .photoInfo-container {
        padding: 3px;
        h3 {
            color: #26a2ff;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }

        .subtitle {
            display: flex;
            justify-content: space-between;
        }

        .content {
            font-size: 13px;
            line-height: 30px;
        }
        .thumbs {
            img {
                margin: 10px;
                box-shadow: 0 0 8px #999;
            }
        }
    }
</style>