<template lang="pug">
Dialog(v-model:show="dialogVisible")
  include ../assets/pug/formGasOrder
.wrapper-home
  section-01
    .left-col
      .title {{ $store.state.main_content.title }}
      .set-prosent
        .info(v-for="(info,index) in $store.state.main_content.info" :key="index")
          .info-gaz
            .procent {{ info.procent }}
            .name-gaz {{ info.gaz }}
      .subtitle {{ $store.state.main_content.subtitle }}
      img(:src="$store.state.images.button" @click="showDialog")
    .right-col
      img(:src="$store.state.images.big_car" class="img-car")
  section-02
    .advantage(v-for="(item,index) in $store.state.advantage.list" :key="index")
      img(:src="item.img")
      .title-adv(v-html='item.title')
      .subtitle-adv(v-html='item.descr')
</template>

<script>

import Dialog from "@/components/UI/Dialog";
import {ref} from "vue"
import $router from "@/routes";

export default {
  name: "HomePage",
  components: {Dialog},
  setup() {
    let in_name = ref("")
    let in_telefon = ref("")
    const dialogVisible = ref(false)
    const showDialog = () => {dialogVisible.value=true}
    const hiddenDialogCloseBtn = () => {dialogVisible.value=false;}
    const hiddenDialog = () => {dialogVisible.value=false; $router.push('/thankyou')}
    return {
            in_name,
            in_telefon,
            dialogVisible,
            showDialog,
            hiddenDialog,
            hiddenDialogCloseBtn}
  }
}
</script>

<style lang="scss" scoped>
.wrapper-home {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //height: 87vh;
  @media screen and (max-width: $phoneWidth) {
   flex-direction: column;
    width: 380px;
    align-items: center;
  }
  section-01 {
    display: flex;
    justify-content: flex-start;
    .left-col {
      //max-width: 617px;
      max-width: 40vw;
      font-family: $font-RussoOne;
      font-weight: 400;
      text-align: left;
      margin-top: 15px;
      @media screen and (max-width: $phoneWidth) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .title {
        @include font(48px, 400, 58px, #EF5221);
        width: 500px;
        @media screen and (max-width: $phoneWidth) {
          @include font(36px, 400, 44px, #EF5221);
          max-width: 360px;
          text-align: center;
          margin-left: -30px;
        }
      }
      .set-prosent {
        display: flex;
        .info {
          display: flex;
          align-items: center;
          &:not(:last-child):after {
            content: '';
            height: 55%;
            width: 1.5px;
            margin: 5px 25px 0 5px;
            background: rgba(241, 241, 241, 0.3);
          }
          .info-gaz {
             display: flex;
             flex-direction: column;
             justify-content: flex-start;
             margin: 20px 20px 15px 0;
             opacity: 0.7;
             .procent {
               @include font(36px, 400, 43px, #f1f1f1);
             }
             .name-gaz {
               @include font(18px, 400, 22px, #f1f1f1);
             }
           }
        }
      }
      .subtitle {
        @include font(21px, 400, 25px, #ffffff);
        margin: 15px 0 27px;
        max-width: 450px;
        @media screen and (max-width: $phoneWidth) {
          @include font(17px, 400, 21px, #ffffff);
          width: 340px;
          text-align: center;
          margin-left: -40px;
        }
      }
      img {
        z-index: 1;
        @media screen and (max-width: $phoneWidth) {
          max-width: 190%;
          //margin-left: 20px;
          margin-left: -30px;
        }
      }
      img:hover {
        opacity: 0.8;
      }
      .services-box {
        display: flex;
        flex-wrap: wrap;
        @media screen and (max-width: $phoneWidth) {
          margin-left: 30px;
          //text-align: center;
        }
      }
    }
    .right-col {
      max-width: 60vw;
      margin-top: 15px;
      margin-left: -150px;
      display: flex;
      .img-car {
        position: absolute;
        right: 80px;
        max-width: 100%;
        max-height: 100%;
        @media screen and (max-width: $smDesktopWidth) {
          display: none;
        }
        @media screen and (max-width: 1200px) {
          right: -250px;
        }
        @media screen and (max-width: $desktopWidth) {
          max-width: 80%;
          max-height: 80%;
          right: 60px;
        }
        @media screen and (max-width: $phoneWidth) {
          display: none;
        }
      }
    }
  }
  section-02 {
    display: flex;
    justify-content: space-between;
    .advantage {
      //position: relative;
      width: 247px;
      height: 213px;
      border-radius: 20px;
      //background-color: #f1f1f1;
      background: rgba(241, 241, 241, 0.2);
      margin: 60px 0 15px 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      &:nth-child(4) {
        img {
          margin-top: -68px;
          margin-bottom: -5px;
        }
      }

      .title-adv {
        font-family: $font-RussoOne;
        @include font(20px, 400, 24px, #EF6D00);
        padding: 5px 0 15px 0;
        text-align: center;
      }
      .subtitle-adv {
        font-family: $font-OpenSans;
        @include font(14px, 400, 19px, rgba(241, 241, 241, 0.8));
        padding: 5px 20px;
        text-align: center;
        &:nth-child(4) {
          color: red;
        }
        }
      img {
        margin-top: -30px;
      }
    }
  }
}
</style>