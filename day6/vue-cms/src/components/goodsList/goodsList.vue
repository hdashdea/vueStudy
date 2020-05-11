<template>
    <div class="goodslist-container">

        <div class="good-item">
            <img src="http://demo.dtcms.net/upload/201504/18/thumb_201504181230434303.jpg" alt="" >
            <h1 class="title" >ssssssssssssssssssssssss</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2199</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sale">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .goodslist-container {
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;

        .good-item {
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img {
                width: 100%;
            }

            .title {
                font-size: 14px;
            }

            .info {
                background-color: #eee;
                p {
                    margin: 0;
                    padding: 5px;
                }
                .price {
                    .now {
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }

                    .old {
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }

                .sale {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }
</style>