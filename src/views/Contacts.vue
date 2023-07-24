<template>
  <div class="container-template">
    <section class="section-main">
      <div class="main-title">
        <div class="title-name">
          <h1 class="title">Контакты</h1>
        </div>
        <span class="stroke"/>
      </div>
    </section>

    <section class="section-contacts">

      <div class="container-sendMessage" :class="{sendTrue: state.isSendMessage, sendFalse: state.isNotSendMessage}">
        <div class="sendMessage">
          <div class="close" @click="closeModal">
            <img src="../assets/images/icon_close_.svg"/>
          </div>
          <div class="message">
            <h1>Спасибо за ваше сообщение. Мы свяжемся с Вами в течение 2 дней.</h1>
          </div>
        </div>
      </div>

      <div class="contacts-header">
        <div class="container__breadCrumbs">
          <router-link class="nav__main" to="/">Главная</router-link>
          <div class="breadCrumbs">
            <img class="arrow__right" src="../assets/images/arrowright2.svg">
            <h1 class="breadCrumbs__current_page">Контакты</h1>
          </div>
        </div>
      </div>

      <div class="container__view">
        <div class="container-contacts">
          <div class="contacts-title">
            <h1 v-scrollanimationmovetext>Давайте сотрудничать</h1>

            <svg class="svg" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="35.5598mm" height="16.9332mm" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                 viewBox="0 0 3555.98 1693.32"
                 xmlns:xlink="http://www.w3.org/1999/xlink"
                 xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
              <g id="Слой_x0020_1">
  <metadata id="CorelCorpID_0Corel-Layer"/>
                <path class="fil0" d="M1130.97 1306.88c-194.74,147.75 -312.74,221.78 -354.01,221.78 -10.25,0 -18.95,-4.87 -26.4,-14.91 -7.15,-9.75 -10.87,-22.53 -10.87,-38.06 0,-6.69 1.86,-15.52 5.89,-26.48 4.05,-10.96 9.64,-23.74 16.78,-38.05l182.01 -375.32c10.25,-20.4 16.46,-33.18 18.94,-38.36 2.49,-5.48 3.73,-9.43 3.73,-11.56 0,-5.48 -0.62,-9.44 -1.86,-12.18 -1.24,-2.74 -3.11,-3.96 -5.29,-3.96 -8.07,0 -31.05,14 -68.95,42.01 -37.89,27.7 -80.75,63.31 -128.58,105.93 -59.01,50.53 -114.3,101.67 -166.17,153.42 -51.87,51.75 -97.84,101.06 -137.9,147.94 -6.22,7.3 -14.6,17.35 -25.47,30.43 -38.83,49.32 -71.44,73.67 -97.53,73.67 -11.49,0 -20.5,-4.26 -27.33,-12.79 -6.52,-8.83 -9.94,-20.09 -9.94,-34.39 0,-17.36 27.65,-74.89 82.93,-172.6 26.09,-45.66 46.59,-82.79 61.8,-110.8 -22.97,20.7 -44.72,39.27 -65.53,54.79 -20.5,15.83 -40.37,28.92 -59.32,39.88l0 -73.36c29.81,-19.48 60.56,-44.14 92.24,-73.97 31.37,-29.52 65.54,-65.75 101.88,-108.67l332.02 -695.24c5.6,-11.88 13.05,-28.31 22.99,-49.02 30.13,-67.26 55.91,-100.75 77.34,-100.75 6.52,0 12.42,3.35 17.08,9.74 4.97,6.7 7.45,14.92 7.45,24.96 0,23.13 -44.41,125.72 -132.93,307.45 -42.87,86.75 -77.03,156.46 -101.88,209.42l-282.95 589.31c177.04,-171.68 311.53,-294.35 403.46,-367.7 91.94,-73.37 155.93,-110.2 192.27,-110.2 9,0 16.14,3.96 21.11,11.57 4.66,7.91 7.15,19.18 7.15,34.09 0,7.61 -1.56,16.14 -4.66,25.87 -2.8,9.44 -9.01,24.66 -18.01,45.36l-191.95 408.5c-4.35,9.44 -7.15,16.14 -8.7,20.4 -1.55,4.26 -2.17,7 -2.17,8.82 0,4.88 0.93,8.83 3.1,11.57 2.18,3.04 4.66,4.87 7.77,5.48 10.56,0 44.1,-20.09 101.25,-60.27 48.74,-34.27 109.69,-79.63 183.38,-140.21 6.23,-21.28 13.09,-38.3 21.3,-55.21 24.54,-50.52 60.57,-99.24 108.71,-146.42 53.11,-51.75 107.15,-91.93 161.19,-120.85 54.36,-28.91 103.75,-43.22 147.85,-43.22 37.58,0 67.09,8.83 87.89,26.18 20.82,17.65 31.38,42.31 31.38,73.66 0,82.19 -42.86,155.24 -128.59,219.78 -86.03,64.53 -189.46,96.8 -310.59,96.8 -13.36,0 -23.3,0 -29.82,-0.3 -6.21,-0.31 -12.43,-0.92 -18.63,-1.53 -2.8,9.44 -4.98,18.57 -6.22,26.79 -1.24,8.21 -1.86,17.04 -1.86,25.87 0,43.84 10.25,77.32 31.06,99.84 20.49,22.53 50.94,33.79 91,33.79 45.35,0 96.91,-15.22 154.68,-45.96 57.46,-30.44 158.4,-102.28 302.83,-215.21l3.1 -3.54c49.69,-36.22 62.43,-49.44 99.7,-85.65 37.27,-36.21 58.4,-60.88 63.36,-73.97l276.12 -739.08c15.53,-43.22 28.58,-71.84 38.83,-85.54 10.25,-13.69 22.05,-20.39 35.4,-20.39 9.63,0 18.02,4.27 24.85,12.48 7.14,8.22 10.56,18.27 10.56,29.53 0,16.44 -6.83,48.4 -20.81,95.58 -13.97,47.49 -33.23,102.58 -57.46,165.59 -25.46,65.14 -53.73,132.42 -85.41,201.21 -31.37,69.1 -48.46,106.84 -50.94,113.23l-208.72 571.66c-2.79,7.62 -5.28,14.31 -6.83,20.09 -1.55,5.48 -2.18,8.83 -2.18,10.05 0,3.65 1.24,7 3.73,10.35 2.49,3.35 4.66,4.87 7.15,4.87 9.93,0 42.54,-19.79 98.45,-59.36 55.91,-39.57 123.53,-92.37 222.92,-167.21 56.85,-39.23 66.87,-52.88 104.14,-89.09 37.27,-36.21 58.39,-60.88 63.36,-73.97l276.11 -739.08c15.54,-43.22 28.58,-71.84 38.83,-85.54 10.25,-13.69 22.06,-20.39 35.41,-20.39 9.62,0 18.01,4.27 24.85,12.48 7.14,8.22 10.56,18.27 10.56,29.53 0,16.44 -6.83,48.4 -20.81,95.58 -13.98,47.49 -33.24,102.58 -57.46,165.59 -25.47,65.14 -53.74,132.42 -85.42,201.21 -31.36,69.1 -48.45,106.84 -50.93,113.23l-208.72 571.66c-2.8,7.62 -5.28,14.31 -6.84,20.09 -1.55,5.48 -2.17,8.83 -2.17,10.05 0,3.65 1.24,7 3.73,10.35 2.48,3.35 4.65,4.87 7.14,4.87 9.94,0 42.56,-19.79 98.46,-59.36 55.9,-39.56 96.65,-64.26 197.21,-143.9 17.88,-51.85 33.43,-84.09 57.47,-126.1 40.07,-70.32 95.97,-130.89 167.72,-182.03 32,-22.53 67.09,-41.7 104.68,-57.23 37.58,-15.52 64.91,-23.13 81.99,-23.13 7.14,0 13.36,2.74 18.02,8.52 4.96,5.48 7.45,12.48 7.45,20.7 0,14.92 -18.94,30.44 -56.53,46.27 -37.89,16.13 -69.26,32.27 -94.11,48.09 -61.18,39.88 -111.81,93.46 -151.26,161.04 -39.76,67.26 -59.63,132.1 -59.63,193.9 0,40.79 10.56,75.49 31.37,103.8 21.12,28.31 45.97,42.31 75.16,42.31 26.71,0 55.6,-10.66 86.97,-32.27 31.06,-21.61 66.77,-55.1 106.84,-100.76 -15.22,-24.34 -26.71,-48.09 -33.85,-71.53 -7.46,-23.13 -11.18,-46.87 -11.18,-71.23 0,-62.71 18.01,-119.93 54.04,-171.98 36.34,-52.05 72.99,-78.23 109.95,-78.23 22.36,0 41,9.74 55.91,29.52 14.91,19.49 22.36,44.44 22.36,73.97 0,35.92 -9.32,77.93 -27.65,126.02 -18.32,48.4 -44.1,95.89 -76.71,143.07l3.73 0c20.5,0 45.35,-7.92 74.85,-23.74 29.2,-15.83 72.68,-45.36 130.14,-88.89l0 72.45c-50.32,39.27 -91.62,66.66 -124.24,82.19 -32.61,15.82 -62.74,23.74 -89.76,23.74 -4.97,0 -13.98,-0.61 -27.33,-1.83 -4.97,-0.61 -8.7,-1.21 -11.81,-1.82 -47.83,54.18 -93.18,94.67 -135.11,121.15 -42.23,26.48 -83.23,39.57 -122.68,39.57 -51.56,0 -92.56,-19.18 -123.31,-57.53 -30.75,-38.36 -45.96,-90.11 -45.96,-155.55 0,-32.06 -31.97,2.81 -53.42,19.18 -169.89,129.36 -271.15,193.9 -304.07,193.9 -17.09,0 -29.82,-4.26 -38.2,-12.48 -8.39,-8.52 -12.74,-21.31 -12.74,-38.66 0,-11.26 2.17,-25.27 6.83,-42.31 4.35,-17.05 13.36,-43.23 26.71,-78.23l63.67 -170.47c-22.98,20.09 -45.96,38.97 -69.26,56.62 -24.63,15.39 -12.24,8.11 -40.01,27.63 -23.96,16.51 -50.99,37.21 -86.09,64 -169.89,129.36 -271.15,193.9 -304.07,193.9 -17.08,0 -29.81,-4.26 -38.2,-12.48 -8.38,-8.52 -12.74,-21.31 -12.74,-38.66 0,-11.26 2.18,-25.27 6.83,-42.31 4.36,-17.05 13.37,-43.23 26.72,-78.23l63.67 -170.47c-22.98,20.09 -45.97,38.97 -69.26,56.62 -23.71,17.48 -8.76,6.86 -32.62,23.98 -136.97,107.46 -246.92,182.71 -308.1,214.06 -61.19,31.66 -118.03,47.49 -170.21,47.49 -60.56,0 -107.47,-17.67 -140.39,-52.97 -39.15,-41.96 -50.03,-107.99 -48.2,-163.33zm95.72 -101.49c9.94,1.21 19.57,2.13 29.2,2.74 9.63,0.61 19.88,0.91 30.13,0.91 84.17,0 161.82,-27.4 232.64,-82.49 71.12,-54.79 106.53,-108.67 106.53,-161.63 0,-14.31 -4.97,-25.57 -14.91,-33.79 -10.25,-8.22 -23.6,-12.49 -40.69,-12.49 -48.45,0 -106.84,27.4 -174.86,81.89 -68.34,54.79 -124.24,122.97 -168.04,204.86zm1860.77 54.79c27.95,-49.01 49.07,-92.23 63.67,-129.67 14.6,-37.45 21.74,-66.67 21.74,-87.67 0,-8.83 -2.79,-16.74 -8.69,-24.05 -5.59,-7 -12.12,-10.65 -19.57,-10.65 -16.77,0 -34.17,17.96 -51.56,53.57 -17.71,35.92 -26.4,73.97 -26.4,114.46 0.62,14.3 2.49,28 5.59,41.39 2.79,13.4 8.08,27.71 15.22,42.62z"/>
 </g>
</svg>
          </div>
          <div class="contacts-form" v-scrollanimationloadcontent>
            <form class="form-container">
              <div class="input-nameSurname">
                <div class="input-name">
                  <label>Имя</label>
                    <input type="text" placeholder="Введите имя" v-model.trim="state.name" required="" name=""/>
                    <p v-if="v$.name.$error" class="invalid__data">Имя должно содержать не менее 2 символов</p>
                </div>
                <div class="input-surname">
                  <label>Фамилия</label>
                    <input type="text" placeholder="Введите фамилию" v-model.trim="state.surname" required="" name=""/>
                    <p v-if="v$.surname.$error" class="invalid__data">Фамилия должна содержать не менее 2 символов</p>
                </div>
              </div>

              <label>Email</label>
                <input type="email" placeholder="Введите email" v-model.trim="state.email" required="" name=""/>
                <p v-if="v$.email.$error" class="invalid__data">Введите корректный email в формате test@mail.com</p>

              <label>Как мы можем помочь?</label>
                <textarea placeholder="Введите сообщение" v-model.trim="state.message" required="" name=""/>
              <p v-if="v$.message.$error" class="invalid__data">Сообщение должно содержать минимум 2 символа</p>

              <div class="btn" @click.prevent="addMessage">
                <div class="button-title">Отправить</div>
                <div class="arrow">
                  <img class="arrowRightNotActive" src="../assets/images/arrowrightBlack.svg">
                  <img class="arrowRightActive" src="../assets/images/arrowrightBlack.svg">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import {required, email, minLength} from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {
  name: "Contacts",

  setup() {
    const state = reactive({
      name: '',
      surname: '',
      email: '',
      message: '',

      isSendMessage: false,
      isNotSendMessage: true,
    })

    const rules = computed(() => {
      return {
        name: {required, minLength: minLength(2)},
        surname: {required, minLength: minLength(2)},
        email: {required, email},
        message: {required, minLength: minLength(2)},
      }
    })

    const v$ = useVuelidate(rules, state)

    return {
      state,v$,
    }
  },

  methods: {
    async addMessage() {
      this.v$.$validate()
      if(!this.v$.$error) {
        this.state.isSendMessage = true;
        this.state.isNotSendMessage = false;
        document.body.style.overflow = 'hidden';
      } else {
        console.log('false');
      }
    },

    closeModal() {
      this.state.isSendMessage = false;
      this.state.isNotSendMessage = true;
      document.body.style.overflow = '';
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.container-template {
  background-color: #FFDDAB;
}

.main-title {
  width: 80%;
  margin: 0 auto 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-name {
    display: flex;
    align-items: center;

    .title {
      color: $mainGreyColor;
      font-family: $RobotoCondensed;
      font-size: 250px;
      line-height: 0;
    }
  }

  .stroke {
    display: block;
    width: 100%;
    margin-top: -50px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    height: 3px;
    background: $mainGreyColor;
    transition: all .3s;
    position: relative;
  }
}

.section-contacts {

  .contacts-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    .container__breadCrumbs {
      margin: 0 55px;
      display: flex;
      align-items: center;

      .nav__main {
        font-family: $RobotoCondensed;
        font-size: 14px;
        text-decoration: none;
        color: $mainGreyColor;
        margin-right: 12px;
        transition: .1s;

        &:hover {
          color: #727272;
        }
      }

      .breadCrumbs {
        display: flex;
        justify-content: center;
        align-items: center;

        .arrow__right {
          margin-right: 12px;
        }

        h1 {
          font-family: $RobotoCondensed;
          font-size: 14px;
          font-weight: 600;
          color: $mainGreyColor;
        }
      }
    }
  }

  .container__view {
    color: $mainGreyColor;
    margin-bottom: -50px;

    .container-contacts {
      margin: 50px 55px 0 55px;
      display: flex;
      justify-content: space-between;

      .contacts-title {

        svg {
          margin-top: 50px;
          width: 40vw;
          height: 50vh;

          .fil0 {
            stroke: $mainGreyColor;
            stroke-width: 25px;
            fill: transparent;
            stroke-dasharray: 23931;
            stroke-dashoffset: 0;
            animation: fillsvg 5s linear forwards;
          }
        }

        @keyframes fillsvg {
          from {
            stroke-dashoffset: 23931;
          }
          to {
            stroke-dashoffset: 0;
          }
        }



        h1 {
          font-family: $EBGaramond;
          font-size: 50px;
          line-height: 0;
        }
      }

      .contacts-form {
        width: 40%;
        margin-bottom: 100px;

        .form-container {
          display: flex;
          flex-direction: column;
          font-family: $RobotoCondensed;

          .input-nameSurname {
            display: flex;
            justify-content: space-between;

            .input-name, .input-surname {
              display: flex;
              flex-direction: column;
              width: 250px;
              font-family: $RobotoCondensed;
            }
          }

          label {
            margin-top: 20px;
            font-size: 18px;
            font-weight: 500;
          }

          input {
            margin: 10px 0 20px 0;
            background: none;
            border: none;
            border-bottom: 2px solid $mainGreyColor;
            padding: 5px;
            font-size: 16px;
            color: #8D8C8C;
          }

          textarea {
            margin: 10px 0 20px 0;
            background: none;
            border: 2px solid $mainGreyColor;
            border-radius: 8px;
            height: 200px;
            padding: 5px;
            font-size: 16px;
            color: #8D8C8C;
            resize: none;
          }

          .btn {
            background-color: $mainGreyColor;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: .2s;
            padding: 8px 5px 8px 20px;
            border-radius: 100px;
            width: 30%;

            .button-title {
              font-family: $RobotoCondensed;
              color: $whiteColor;
              font-weight: 500;
              font-size: 16px;
              padding-right: 20px;
            }

            .arrow {
              background-color: $whiteColor;
              position: relative;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 35px;
              height: 35px;
              border-radius: 100px;
              transition: .3s;

              .arrowRightNotActive, .arrowRightActive {
                position: absolute;
                width: 20px;
                height: 20px;
                transition: .3s;
              }

              .arrowRightActive {
                left: -50%;
                z-index: -1;
              }
            }

            &:hover .arrow {
              transform: translateX(30%);
              background-color: #FFDDAB;
            }

            &:hover .arrowRightActive {
              z-index: 1;
              transform: translate(130%);
            }

            &:hover .arrowRightNotActive {
              transform: translate(150%);
              opacity: 0;
            }
          }

          .invalid__data {
            color: #ff483c;
            margin-top: -10px;
            font-family: $RobotoCondensed;
            font-size: 14px;
          }
        }
      }
    }
  }

  .container-sendMessage {
    z-index: 999;
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .sendMessage {
      background-color: $whiteColor;
      opacity: 1;
      box-shadow: 10px 14px 35px 0px rgba(0, 0, 0, 0.1);
      width: 30%;
      padding: 20px;
      height: 20%;
      margin: 0 auto;
      display: flex;
      border-radius: 5px;
      flex-direction: row-reverse;

      .close {
        img {
          width: 30px;
        }
      }

      .message {
        margin-top: 50px;
        h1 {
          font-family: $RobotoCondensed;
          font-size: 18px;
        }
      }
    }
  }

  .sendTrue {
    display: flex;
  }

  .sendFalse {
    display: none;
  }
}

@media screen and (min-width: 767px) and (max-width: 1023px) {
  .main-title {
    padding-top: 50px;
    .title-name {
      .title, .rotateLetter {
        font-size: 150px;
      }
    }

    .stroke {
      margin-top: -50px;
      height: 2px;
    }
  }

  .section-contacts {
    .contacts-header {
      margin: 0 0px 0 0px;
    }

    .container__view {
      .container-contacts {
        margin: 20px 55px 0 55px;
        display: flex;
        justify-content: space-between;

        .contacts-title {

          svg {
            margin-top: 20px;
            width: 40vw;
            height: 25vh;

            .fil0 {
              stroke: $mainGreyColor;
              stroke-width: 25px;
              fill: transparent;
              stroke-dasharray: 23931;
              stroke-dashoffset: 0;
              animation: fillsvg 5s linear forwards;
            }
          }

          h1 {
            font-size: 30px;
            line-height: 0;
          }
        }

        .contacts-form {
          width: 40%;
          margin-bottom: 50px;

          .form-container {

            .input-nameSurname {
              flex-direction: column;

              .input-name, .input-surname {
                flex-direction: column;
                width: 100%;
              }
            }

            label {
              margin-top: 10px;
              font-size: 16px;
            }

            input {
              margin: 10px 0 10px 0;
              font-size: 13px;
            }

            textarea {
              margin: 10px 0 20px 0;
              height: 150px;
              font-size: 13px;
            }

            .btn {
              padding: 8px 5px 8px 20px;
              width: 45%;

              .button-title {
                font-size: 13px;
              }

              .arrow {
                width: 25px;
                height: 25px;

                .arrowRightNotActive, .arrowRightActive {
                  width: 15px;
                  height: 15px;
                }
              }
            }

            .invalid__data {
              margin-top: -5px;
              font-size: 10px;
            }
          }
        }
      }
    }

    .container-sendMessage {
      width: 100%;
      height: 100vh;

      .sendMessage {
        width: 33%;
        height: 15%;

        .close {
          img {
            width: 20px;
          }
        }

        .message {
          margin-top: 50px;
          h1 {
            font-family: $RobotoCondensed;
            font-size: 16px;
          }
        }
      }
    }

    .sendTrue {
      display: flex;
    }

    .sendFalse {
      display: none;
    }
  }
}

@media screen and (max-width: 767px) {
  .main-title {
    margin: 0 auto 20px auto;
    padding-top: 50px;
    .title-name {
      .title, .rotateLetter {
        font-size: 75px;
      }
    }

    .stroke {
      margin-top: -20px;
      height: 2px;
    }
  }

  .section-contacts {
    margin: 0 0 0 0;

    .contacts-header {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 0 20px 0 20px;

      .container__breadCrumbs {
        margin: 0;
        .nav__main {
          font-size: 13px;
        }

        .breadCrumbs {
          h1 {
            font-size: 13px;
          }
        }
      }
    }

    .container__view {
      margin-bottom: -50px;

      .container-contacts {
        margin: 0px 20px 0 20px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .contacts-title {
          width: 100%;
          display: flex;
          flex-direction: column;

          svg {
            display: none;
          }

          h1 {
            font-family: $EBGaramond;
            font-size: 30px;
            line-height: 0.8;
          }
        }

        .contacts-form {
          width: 100%;
          margin-bottom: 50px;

          .form-container {
            display: flex;
            flex-direction: column;
            font-family: $RobotoCondensed;

            .input-nameSurname {
              display: flex;
              justify-content: space-between;
              flex-direction: column;

              .input-name, .input-surname {
                display: flex;
                flex-direction: column;
                width: 100%;
              }
            }

            label {
              margin-top: 0;
              font-size: 16px;
            }

            input {
              margin: 5px 0 20px 0;
              font-size: 13px;
            }

            textarea {
              margin: 10px 0 20px 0;
              height: 100px;
            }

            .btn {
              background-color: $mainGreyColor;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: .2s;
              padding: 8px 5px 8px 10px;
              border-radius: 100px;
              width: 40%;

              .button-title {
                font-size: 13px;
                padding-right: 20px;
              }

              .arrow {
                width: 25px;
                height: 25px;

                .arrowRightNotActive, .arrowRightActive {
                  position: absolute;
                  width: 14px;
                  height: 14px;
                  transition: .3s;
                }

                .arrowRightActive {
                  left: -50%;
                  z-index: -1;
                }
              }
            }

            .invalid__data {
              margin-top: -10px;
              font-size: 13px;
            }
          }
        }
      }
    }

    .container-sendMessage {
      width: 100%;
      height: 100%;
      margin-top: 0;

      .sendMessage {
        width: 50%;
        padding: 20px;
        height: 20%;

        .close {
          img {
            width: 20px;
          }
        }

        .message {
          margin-top: 30px;
          h1 {
            font-family: $RobotoCondensed;
            font-size: 16px;
          }
        }
      }
    }

    .sendTrue {
      display: flex;
    }

    .sendFalse {
      display: none;
    }
  }
}
</style>