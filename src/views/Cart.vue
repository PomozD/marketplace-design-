<template>
  <section class="section-main">
    <div class="main-title">
      <div class="title-name">
        <h1 class="title">Корзина</h1>
      </div>
      <span class="stroke"/>
    </div>
  </section>

  <section class="section-cart">

    <div class="container-order" :class="{modalTrue: state.isOpenModal, modalFalse: state.isNotOpenModal}">
      <div class="order">
        <div class="close" @click="closeModal">
          <img src="../assets/images/icon_close_.svg"/>
        </div>
        <div class="modal-container">
          <h1>Для заказа заполните форму</h1>
          <hr>
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

            <label>Номер телефона</label>
            <input type="text" v-imask="state.phoneNumberMask" placeholder="Введите номер телефона в формате (029)111-11-11" v-model.trim="state.number" @accept="onAccept" @complete="onComplete" @keypress="isNumber" required="" name=""/>
            <p v-if="v$.number.$error" class="invalid__data">Введите корректный номер телефона в формате (029)111-11-11</p>

            <label>Комментарий</label>
            <textarea placeholder="Введите комментарий" v-model.trim="state.message" name=""/>
            <p v-if="v$.comment.$error" class="invalid__data">Комментарий должен содержать минимум 2 символа</p>

            <div class="btn" @click.prevent="addOrder">
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

    <div class="container-true__order" :class="{orderTrue: state.isOrder, orderFalse: state.isNotOrder}">
      <div class="order">
        <div class="close" @click="closeOrderModal">
          <img src="../assets/images/icon_close_.svg"/>
        </div>
        <div class="modal-container">
          <h1>Спасибо за оформление заказа! Мы свяжемся с вами в течение 2 дней.</h1>
        </div>
      </div>
    </div>

    <div class="cart-header">
      <div class="container__breadCrumbs">
        <router-link class="nav__main" to="/">Главная</router-link>
        <div class="breadCrumbs">
          <img class="arrow__right" src="../assets/images/arrowright2.svg">
          <h1 class="breadCrumbs__current_page">Корзина</h1>
        </div>
      </div>
    </div>

    <div class="container__view">
      <div class="items-container">
        <div class="item" v-scrollanimationmovetext style="transition-delay: .2s">
          <div class="img">
            <img src="../assets/images/mans/Куртки/J21.png"/>
          </div>
          <div class="info-container">
            <div class="info">
              <div class="item-name">
                <p class="item-title">Название:</p>
                <p class="item-subtitle">Мужская куртка J21</p>
              </div>
              <hr>

              <div class="item-price">
                <p class="item-title">Цена:</p>
                <p class="item-subtitle">123 BYN</p>
              </div>

              <div class="item-size">
                <p class="item-title">Размер:</p>
                <p class="item-subtitle">S</p>
              </div>

              <div class="item-count">
                <p class="item-title">Количество:</p>
                <div class="count-minus">
                  <img src="../assets/images/icon_minus.svg" />
                </div>
                <p class="item-subtitle">1</p>
                <div class="count-plus">
                  <img src="../assets/images/icon_plus.svg" />
                </div>
              </div>
            </div>

            <div class="btn">
              <button class="button_primary">Удалить</button>
            </div>
          </div>
        </div>
        <div class="item" v-scrollanimationmovetext style="transition-delay: .4s">
          <div class="img">
            <img src="../assets/images/mans/Куртки/J21.png"/>
          </div>
          <div class="info-container">
            <div class="info">
              <div class="item-name">
                <p class="item-title">Название:</p>
                <p class="item-subtitle">Мужская куртка J21</p>
              </div>
              <hr>

              <div class="item-price">
                <p class="item-title">Цена:</p>
                <p class="item-subtitle">123 BYN</p>
              </div>

              <div class="item-size">
                <p class="item-title">Размер:</p>
                <p class="item-subtitle">S</p>
              </div>

              <div class="item-count">
                <p class="item-title">Количество:</p>
                <div class="count-minus">
                  <img src="../assets/images/icon_minus.svg" />
                </div>
                <p class="item-subtitle">1</p>
                <div class="count-plus">
                  <img src="../assets/images/icon_plus.svg" />
                </div>
              </div>
            </div>

            <div class="btn">
              <button class="button_primary">Удалить</button>
            </div>
          </div>
        </div>
      </div>

      <div class="cart-bottom">
        <div class="price">
          <p class="item-title">Цена:</p>
          <p class="item-subtitle">123 BYN</p>
        </div>

        <div class="btn2" @click.prevent="openModal">
          <div class="arrow2">
            <img class="arrowRightActive2" src="../assets/images/arrowrightBlack.svg">
          </div>
          <div class="button-title2">Заказать</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import {required, minLength} from '@vuelidate/validators'
import { IMaskDirective} from 'vue-imask'
import { reactive, computed } from 'vue'

export default {
  name: "Cart",

  setup() {
    const state = reactive({
      name: '',
      surname: '',
      number: '',
      userphone: '',
      comment: '',

      phoneNumberMask: {
        mask: '{8}(000)000-00-00',
        lazy: true
      },

      isOpenModal: false,
      isNotOpenModal: true,

      isOrder: false,
      isNotOrder: true,
    })

    const rules = computed(() => {
      return {
        name: {required, minLength: minLength(2)},
        surname: {required, minLength: minLength(2)},
        number: {required, minLength: minLength(15)},
        comment: {minLength: minLength(2)},
      }
    })

    const v$ = useVuelidate(rules, state)

    return {
      state,v$,
    }
  },

  methods: {
    async openModal() {
        this.state.isOpenModal = true;
        this.state.isNotOpenModal = false;
    },

    closeModal() {
      this.state.isOpenModal = false;
      this.state.isNotOpenModal = true;
    },

    async addOrder() {
      this.v$.$validate()
      if(!this.v$.$error) {
        this.state.isOrder = true;
        this.state.isNotOrder = false;

        this.state.isOpenModal = false;
        this.state.isNotOpenModal = true;

        console.log('this.state.isOrder', this.state.isOrder);
        console.log('this.state.isNotOrder', this.state.isNotOrder);
        console.log('this.state.isOpenModal', this.state.isOpenModal);
        console.log('this.state.isNotOpenModal', this.state.isNotOpenModal);
      } else {
        console.log('false');
      }
    },

    closeOrderModal() {
      this.state.isOrder = false;
      this.state.isNotOrder = true;
    },

    onAccept(e) {
      const maskRef = e.detail
      this.state.number = maskRef.value;
    },
    onComplete(e) {
      const  maskRef = e.detail
      this.state.userphone = maskRef.unmaskedValue
    },
    isNumber(e) {
      let regex = /[0-9]/

      if(!regex.test(e.key)) {
        e.returnValue = false;
        if(e.preventDefault) {
          e.preventDefault();
        }
      }
    }
  },

  directives: {
    imask: IMaskDirective
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

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

.section-cart {
  margin-left: 55px;
  margin-right: 55px;

  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    .container__breadCrumbs {
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
    font-family: $RobotoCondensed;
    font-size: 20px;
    line-height: 0.2;
    color: $mainGreyColor;

    .items-container {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 30px;

      .item {
        width: 80%;
        background-color: $whiteColor;
        display: flex;
        box-shadow: 10px 14px 35px 0 rgba(0, 0, 0, 0.1);

        .img {
          height: 300px;
          img {
            width: 220px;
            height: 300px;
          }
        }

        .info-container {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin: auto 50px auto 50px;

          .info {
            .item-name, .item-price, .item-size, .item-count {
              display: flex;
              align-items: center;

              .item-title {
                font-weight: 500;
              }

              .item-subtitle {
                margin-left: 5px;
              }
            }

            hr {
              height: 2px;
              background-color: $mainGreyColor;
              border-radius: 50px;
            }

            .item-count {
              .item-subtitle {
                margin-left: 15px;
              }
              .count-minus, .count-plus {
                margin-left: 15px;
                width: 30px;
                height: 30px;
                background-color: $mainGreyColor;
                border-radius: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }

          .btn {
            margin-top: 150px;
            .button_primary {
              font-family: $RobotoCondensed;
              font-size: 13px;
              font-weight: 500;
              color: $mainGreyColor;
              margin: 15px 0 0 0;
              padding: 10px 30px;
              outline: none;
              background-color: $whiteColor;
              border: 2px solid $mainGreyColor;
              border-radius: 50px;
              transition: .2s;

              &:hover {
                background-color: #FFDDAB;
              }
            }
          }
        }
      }
    }

    .cart-bottom {
      margin: 30px auto 0 auto;
      display: flex;
      width: 80%;
      justify-content: space-between;
      align-items: center;

      .price {
        display: flex;

        .item-title {
          font-weight: 500;
        }

        .item-subtitle {
          margin-left: 5px;
        }
      }

      .btn2 {
        background-color: $mainGreyColor;
        display: flex;
        align-items: center;
        transition: .3s;
        width: 170px;
        border-radius: 50px;

        &:hover {
          background-color: #444444;
        }

        .button-title2 {
          margin-left: 13px;
          font-family: $RobotoCondensed;
          color: $whiteColor;
          font-weight: 500;
          font-size: 13px;
          padding-right: 20px;
        }

        .arrow2 {
          margin-left: -1px;
          margin-right: -1px;
          background-color: $whiteColor;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 43px;
          height: 43px;
          border-radius: 100px;
          transition: .5s;

          .arrowRightActive2 {
            position: absolute;
            width: 20px;
            height: 20px;
            transition: .3s;
          }
        }

        &:hover .arrow2 {
          transform: translateX(300%);
        }
      }
    }
  }

  .container-order {
    z-index: 999;
    position: absolute;
    width: 100%;

    .order {
      background-color: $whiteColor;
      opacity: 1;
      box-shadow: 10px 14px 35px 0px rgba(0, 0, 0, 0.1);
      width: 50%;
      padding: 20px;
      margin: 0 auto;
      display: flex;
      flex-direction: row-reverse;
      border-radius: 5px;

      .close {
        img {
          width: 30px;
        }
      }

      .modal-container {
        margin: 0 auto;
        width: 70%;
        padding: 50px;

        h1 {
          font-family: $RobotoCondensed;
          font-size: 24px;
          line-height: 0;
          margin-bottom: 10px;
        }

        hr {
          margin-top: 20px;
          height: 1px;
          background-color: $mainGreyColor;
        }

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
            font-size: 16px;
            font-weight: 500;
          }

          input {
            margin: 10px 0 20px 0;
            background: none;
            border: none;
            border-bottom: 2px solid $mainGreyColor;
            padding: 5px;
            font-size: 13px;
            color: #8D8C8C;
          }

          textarea {
            margin: 10px 0 20px 0;
            background: none;
            border: 2px solid $mainGreyColor;
            border-radius: 8px;
            height: 100px;
            padding: 5px;
            font-size: 13px;
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

  .container-true__order {
    z-index: 999;
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .order {
      opacity: 1;
      background-color: #FFDDAB;
      box-shadow: 10px 14px 35px 0px rgba(0, 0, 0, 0.1);
      width: 50%;
      padding: 20px;
      margin: 0 auto;
      display: flex;
      flex-direction: row-reverse;
      border-radius: 5px;

      .close {
        img {
          width: 30px;
        }
      }

      .modal-container {
        margin: 0 auto;
        width: 70%;
        padding: 50px;

        h1 {
          font-family: $RobotoCondensed;
          font-size: 24px;
          line-height: 1;
          margin-bottom: 10px;
        }
      }
    }
  }

  .modalTrue {
    display: flex;
  }

  .modalFalse {
    display: none;
  }

  .orderTrue {
    display: flex;
  }

  .orderFalse {
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
      margin-top: -20px;
      height: 2px;
    }
  }

  .section-cart {
    .cart-header {
      margin: 0 0 0 0;
    }

    .container__view {
      font-size: 16px;
      line-height: 0.2;

      .items-container {
        .item {
          .img {
            height: 300px;
            img {
              width: 220px;
              height: 300px;
            }
          }

          .info-container {
            flex-direction: column;

            .info {
              hr {
                height: 1.3px;
              }
            }

            .btn {
              margin-top: 0;
            }
          }
        }
      }
    }

    .container-order {
      width: 90%;

      .order {
        width: 60%;

        .modal-container {
          width: 70%;

          h1 {
            font-size: 18px;
            line-height: 0;
            margin-bottom: 10px;
          }

          hr {
            margin-top: 20px;
            height: 0.8px;
          }

          .form-container {

            .input-nameSurname {

              .input-name, .input-surname {
                width: 150px;
              }
            }

            label {
              margin-top: 10px;
              font-size: 16px;
            }

            input {
              margin: 5px 0 10px 0;
              font-size: 12px;
            }

            textarea {
              margin: 10px 0 20px 0;
              height: 100px;
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

    .container-true__order {
      width: 90%;
      height: 50vh;

      .order {

        .modal-container {

          h1 {
            font-size: 18px;
          }
        }
      }
    }

    .modalTrue {
      display: flex;
    }

    .modalFalse {
      display: none;
    }

    .orderTrue {
      display: flex;
    }

    .orderFalse {
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
      margin-top: -10px;
      height: 2px;
    }
  }

  .section-cart {
    margin: 0 0 0 0;

    .cart-header {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 0 20px 0 20px;

      .container__breadCrumbs {
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
      font-size: 13px;
      line-height: 0;

      .items-container {
        flex-direction: column;

        .item {
          width: 90%;

          .img {
            height: 100%;
            img {
              width: 130px;
              height: 192px;
            }
          }

          .info-container {
            flex-direction: column;
            margin: 10px 10px auto 10px;

            .info {
              hr {
                height: 1px;
              }

              .item-count {
                .item-subtitle {
                  margin-left: 10px;
                }
                .count-minus, .count-plus {
                  margin-left: 10px;
                  width: 20px;
                  height: 20px;

                }
              }
            }

            .btn {
              margin-top: 0;
              .button_primary {
                font-size: 10px;
                margin: 15px 0;
                padding: 8px 20px;
                border: 2px solid $mainGreyColor;
              }
            }
          }
        }
      }

      .cart-bottom {
        margin: 20px auto 0 auto;
        width: 90%;

        .btn2 {
          width: 130px;

          .button-title2 {
            margin-left: 10px;
            font-size: 10px;
            padding-right: 20px;
          }

          .arrow2 {
            width: 35px;
            height: 35px;
          }

          &:hover .arrow2 {
            transform: translateX(275%);
          }
        }
      }
    }

    .container-order {
      width: 100%;
      height: unset;

      .order {
        width: 80%;
        padding: 20px;

        .close {
          img {
            width: 20px;
          }
        }

        .modal-container {
          width: 75%;
          padding-left: 0;
          padding-top: 0;
          padding-bottom: 0;

          h1 {
            font-size: 18px;
            line-height: 1;
            margin-bottom: 10px;
          }

          hr {
            margin-top: 20px;
            height: 1px;
          }

          .form-container {

            .input-nameSurname {
              display: flex;
              justify-content: space-between;
              flex-direction: column;

              .input-name, .input-surname {
                flex-direction: column;
                width: 100%;
              }
            }

            label {
              margin-top: 10px;
              font-size: 13px;
              font-weight: 500;
            }

            input {
              margin: 5px 0 10px 0;
              padding: 5px;
              font-size: 10px;
            }

            textarea {
              margin: 10px 0 20px 0;
              height: 75px;
              font-size: 10px;
            }

            .btn {
              padding: 8px 5px 8px 10px;
              width: 45%;

              .button-title {
                font-size: 10px;
                padding-right: 20px;
              }

              .arrow {
                width: 20px;
                height: 20px;

                .arrowRightNotActive, .arrowRightActive {
                  width: 12px;
                  height: 12px;
                }
              }
            }

            .invalid__data {
              color: #ff483c;
              margin-top: -5px;
              font-family: $RobotoCondensed;
              font-size: 10px;
            }
          }
        }
      }
    }

    .container-true__order {
      .order {
        width: 70%;
        height: unset;

        .close {
          img {
            width: 20px;
          }
        }

        .modal-container {
          margin: 0 auto;
          width: 80%;
          padding: 20px;

          h1 {
            font-size: 16px;
          }
        }
      }
    }

    .modalTrue {
      display: flex;
    }

    .modalFalse {
      display: none;
    }

    .orderTrue {
      display: flex;
    }

    .orderFalse {
      display: none;
    }
  }
}

</style>