<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <router-link @click="getPhotoList(item.id)" v-for="item in photoCates" :key="item.id" class="mui-control-item mui-active" to="#item1mobile" data-wid="tab-top-subpage-1.html">
                        {{ item.title }}
                    </router-link>
                </div>
            </div>

        </div>
        <ul class="photo-list">
            <router-link v-for="item in photoList" :key="item.id" :to="'/home/photoInfo/' + item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
        
    </div>
</template>

<script>

import { Toast } from 'mint-ui'
// 1. 导入mui的js
import mui from '../../../lib/mui/js/mui.js'

export default {
    data() {
        return {
            photoCates: [],
            photoList: []
        }
    },
    methods: {
        getPhotoCates() {
            this.$http.get('api/getimgcategory').then(result => {
                if(result.body.status === 0) {
                    this.photoCates = result.body.message
                } else {
                    Toast('获取图片分类失败')
                }
            })
        },
        getPhotoList(photoCateId=0) {
            this.$http.get('api/getimages/' + photoCateId).then(result => {
                if(result.body.status === 0) {
                    this.photoList = result.body.message
                } else {
                    Toast('获取图片列表失败')
                }
            })
        }
    },
    created() {
        //获取图片分类
        this.getPhotoCates()
        this.getPhotoList()
    },
    mounted() {
        // 初始化滑动组件
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>

<style lang="scss" scoped>
    * { touch-action: pan-y; } 
    

    .photo-list {
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
        li {
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;
            img {
                width: 100%;
                vertical-align: middle;
            }

            img[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }

            .info {
                color: white;
                text-align: left;
                position: absolute;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.4);
                max-height: 84px;
                .info-title {
                    font-size: 14px;
                }

                .info-body {
                    font-size: 13px;
                }
            }
        }
    }
</style>