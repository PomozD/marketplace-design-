<template>
  <section class="section-main">
    <div class="main-title">
      <div class="title-name">
        <h1 class="title">Стиль</h1>
      </div>
      <span class="stroke"/>
    </div>
  </section>

  <section class="section-item">

    <div class="item-header">
      <div class="container__breadCrumbs">
        <router-link class="nav__main" to="/">Главная</router-link>
        <div class="breadCrumbs">
          <img class="arrow__right" src="../assets/images/arrowright2.svg">
          <router-link to="/catalog" class="nav__main">Каталог</router-link>
          <img class="arrow__right" src="../assets/images/arrowright2.svg">
          <h1 class="breadCrumbs__current_page">Мужская куртка J21</h1>
        </div>
      </div>
    </div>

    <div class="container__view">
      <div class="item-images">
        <div class="slider-container">
          <div id="slides__1" class="slide">
            <img src="../assets/images/mans/Куртки/J21.png"/>
          </div>
          <div id="slides__2" class="slide">
            <img src="../assets/images/mans/Куртки/J21.png"/>
          </div>
          <div id="slides__3" class="slide">
            <img src="../assets/images/mans/Куртки/J21.png"/>
          </div>
        </div>

        <div class="controllers">
          <div class="left-controller" @click="carousel(+1)">
            <img class="arrow" src="../assets/images/arrowrightBlack.svg">
          </div>
          <div class="right-controller" @click="carousel(-1)">
            <img class="arrow" src="../assets/images/arrowrightBlack.svg">
          </div>
        </div>
      </div>
      <div class="item-info">
        <div class="info">
          <h1 class="item-name">Мужская куртка J21</h1>

          <p class="item-price">123 BYN</p>

          <hr>

          <p class="item-titleComposition">Состав:</p>
          <p class="item-composition">Оболочка: 100% полиамид. Подкладка: 100% полиамид. Изоляция: 60% полиэстер, 40% переработанный полиэстер.</p>

          <p class="item-titleSizes">Выберите размер:</p>
          <div class="sizes">
            <label>
              <input class="input__filtre" type="checkbox"/>
              XS
            </label>
            <label>
              <input class="input__filtre" type="checkbox"/>
              S
            </label>
            <label>
              <input class="input__filtre" type="checkbox"/>
              M
            </label>
            <label>
              <input class="input__filtre" type="checkbox"/>
              L
            </label>
            <label>
              <input class="input__filtre" type="checkbox"/>
              XL
            </label>
            <label>
              <input class="input__filtre" type="checkbox"/>
              XXL
            </label>
          </div>

          <div class="btn2">
            <div class="arrow2">
              <img class="arrowRightActive2" src="../assets/images/arrowrightWhite.svg">
            </div>
            <div class="button-title2">Добавить в корзину</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-contacts">
    <div class="contacts-container">
      <h1>Если у Вас остались вопросы,<br>
        Вы можете перейти по ссылке</h1>

      <div class="btn">
        <div class="button-title">Связаться с нами</div>
        <div class="arrow">
          <img class="arrowRightNotActive" src="../assets/images/arrowrightBlack.svg">
          <img class="arrowRightActive" src="../assets/images/arrowrightBlack.svg">
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "Item",

  data() {
    return {
      slideLeft: 0,
      marginSlides: 20,
      currentslide: 0,
    }
  },

  methods: {
    carousel(direction) {
      if((direction === -1 && this.currentslide === 2) || (direction === 1 && this.currentslide === 0)) {
        return;
      }

      if(direction === -1) {
        this.currentslide++;
      }

      if(direction === 1) {
        this.currentslide--;
      }

      let slideWidth = document.querySelector('.slide').getBoundingClientRect().width;

      this.slideLeft = this.currentslide * (-slideWidth) + "px";
      document.querySelector('.slider-container').style.left = this.slideLeft;

    }

  },
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

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 55px 0 55px;

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
  display: flex;
  margin: 20px 0 0 0;
  background-color: $mainGreyColor;
  height: 80vh;

  .item-images {
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    .slider-container {
      display: flex;
      justify-content: space-between;
      width: unset;
      top: 0;
      position: absolute;;

      .slide {
        transition: 1s;

        img {
          width: 550px;
          height: 750px;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .controllers {
      width: 500px;
      display: flex;
      justify-content: space-between;
      padding: 0 45px;

      .left-controller {
        background-color: $whiteColor;
        position: relative;
        width: 55px;
        height: 55px;
        border-radius: 100px;
        transition: .3s;
        display: flex;
        justify-content: center;
        align-items: center;

        .arrow {
          width: 20px;
          height: 20px;
          transition: .3s;
          transform: rotate(180deg);
        }
      }

      .right-controller {
        background-color: $whiteColor;
        position: relative;
        width: 55px;
        height: 55px;
        border-radius: 100px;
        transition: .3s;
        display: flex;
        justify-content: center;
        align-items: center;

        .arrow {
          position: absolute;
          width: 20px;
          height: 20px;
          transition: .3s;
        }
      }
    }
  }

  .item-info {
    display: flex;
    align-items: center;

    .info {
      width: 50%;
      margin-left: 150px;

      .item-name {
        font-family: $RobotoCondensed;
        font-weight: 500;
        font-size: 30px;
        line-height: 1;
        color: $whiteColor;
      }

      .item-price {
        font-family: $RobotoCondensed;
        font-weight: normal;
        font-size: 25px;
        line-height: 0;
        color: $whiteColor;
      }

      .item-titleComposition {
        font-family: $RobotoCondensed;
        font-weight: 500;
        font-size: 18px;
        line-height: 0;
        color: $whiteColor;
        margin-top: 40px;
      }

      .item-composition {
        font-family: $RobotoCondensed;
        font-weight: normal;
        font-size: 16px;
        color: $whiteColor;
      }

      .item-titleSizes {
        font-family: $RobotoCondensed;
        font-weight: normal;
        font-size: 18px;
        line-height: 0;
        margin-top: 40px;
        color: $whiteColor;
      }

      .sizes {
        display: flex;
        flex-direction: column;

        input {
          background-color: #D9D9D9;
          width: 20px;
          height: 20px;
          margin-right: 10px;
          margin-bottom: 5px;
        }

        label {
          display: flex;
          align-items: center;
          font-family: $RobotoCondensed;
          font-weight: normal;
          font-size: 18px;
          color: $whiteColor;
        }
      }

      .btn2 {
        margin-top: 20px;
        background-color: $whiteColor;
        display: flex;
        align-items: center;
        transition: .3s;
        width: 280px;
        border-radius: 50px;

        &:hover {
          background-color: #FFDDAB;
        }

        .button-title2 {
          margin-left: 13px;
          font-family: $RobotoCondensed;
          color: $mainGreyColor;
          font-weight: 500;
          font-size: 16px;
          padding-right: 20px;
        }

        .arrow2 {
          margin-left: -1px;
          margin-right: -1px;
          background-color: #3f3f3f;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 53px;
          height: 53px;
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
          transform: translateX(431%);
          margin-left: 1px;
        }
      }
    }
  }
}

.section-contacts {
  .contacts-container {
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
      margin-left: 55px;
      font-family: $RobotoCondensed;
      color: $mainGreyColor;
      font-size: 75px;
      line-height: 1;
    }

    .btn {
      margin-left: 55px;
      background-color: $mainGreyColor;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: .2s;
      padding: 18px 45px 15px 45px;
      border-radius: 50px;

      .button-title {
        font-family: $RobotoCondensed;
        color: $whiteColor;
        font-weight: 500;
        font-size: 24px;
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

  .container__view {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 0;
    background-color: $mainGreyColor;
    height: 100%;

    .item-images {
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      height: 100vh;

      .slider-container {
        display: flex;
        justify-content: space-between;
        width: unset;
        top: 0;
        position: absolute;;

        .slide {
          transition: 1s;

          img {
            width: 100vw;
            height: 100vh;
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }

      .controllers {
        width: 100vw;
        display: flex;
        justify-content: space-between;
        padding: 0 45px;

        .left-controller {
          background-color: $whiteColor;
          position: relative;
          width: 55px;
          height: 55px;
          border-radius: 100px;
          transition: .3s;
          display: flex;
          justify-content: center;
          align-items: center;

          .arrow {
            width: 20px;
            height: 20px;
            transition: .3s;
            transform: rotate(180deg);
          }
        }

        .right-controller {
          background-color: $whiteColor;
          position: relative;
          width: 55px;
          height: 55px;
          border-radius: 100px;
          transition: .3s;
          display: flex;
          justify-content: center;
          align-items: center;

          .arrow {
            position: absolute;
            width: 20px;
            height: 20px;
            transition: .3s;
          }
        }
      }
    }

    .item-info {
      display: flex;
      align-items: center;

      .info {
        width: 60%;
        margin-top: 20px;
        margin-left: 55px;
        .item-name {
          font-family: $RobotoCondensed;
          font-weight: 500;
          font-size: 30px;
          line-height: 1;
          color: $whiteColor;
        }

        .item-price {
          font-family: $RobotoCondensed;
          font-weight: normal;
          font-size: 25px;
          line-height: 0;
          color: $whiteColor;
        }

        .item-titleComposition {
          font-family: $RobotoCondensed;
          font-weight: 500;
          font-size: 18px;
          line-height: 0;
          color: $whiteColor;
          margin-top: 40px;
        }

        .item-composition {
          font-family: $RobotoCondensed;
          font-weight: normal;
          font-size: 16px;
          color: $whiteColor;
        }

        .item-titleSizes {
          font-family: $RobotoCondensed;
          font-weight: normal;
          font-size: 18px;
          line-height: 0;
          margin-top: 40px;
          color: $whiteColor;
        }

        .sizes {
          display: flex;
          flex-direction: column;

          input {
            background-color: #D9D9D9;
            width: 20px;
            height: 20px;
            margin-right: 10px;
            margin-bottom: 5px;
          }

          label {
            display: flex;
            align-items: center;
            font-family: $RobotoCondensed;
            font-weight: normal;
            font-size: 18px;
            color: $whiteColor;
          }
        }

        .btn2 {
          margin: 20px 0 50px 0;
          background-color: $whiteColor;
          display: flex;
          align-items: center;
          transition: .3s;
          width: 280px;
          border-radius: 50px;

          &:hover {
            background-color: #FFDDAB;
          }

          .button-title2 {
            margin-left: 13px;
            font-family: $RobotoCondensed;
            color: $mainGreyColor;
            font-weight: 500;
            font-size: 16px;
            padding-right: 20px;
          }

          .arrow2 {
            margin-left: -1px;
            margin-right: -1px;
            background-color: #3f3f3f;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 53px;
            height: 53px;
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
            transform: translateX(431%)
          }
        }
      }
    }
  }

  .section-contacts {
    .contacts-container {
      min-height: 10vh;

      h1 {
        font-size: 30px;
      }

      .btn {
        margin-left: 55px;
        background-color: $mainGreyColor;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .2s;
        padding: 13px 35px 13px 35px;
        border-radius: 50px;

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
          width: 30px;
          height: 30px;
          border-radius: 100px;
          transition: .3s;

          .arrowRightNotActive, .arrowRightActive {
            position: absolute;
            width: 20px;
            height: 20px;
            transition: .3s;
          }
        }
      }
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

  .item-header {
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
    flex-direction: column;
    margin: 20px 0 0 0;
    height: 100%;

    .item-images {
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      height: 60vh;

      .slider-container {
        display: flex;
        justify-content: space-between;
        width: unset;
        top: 0;
        position: absolute;;

        .slide {
          transition: 1s;

          img {
            width: 100vw;
            height: 60vh;
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }

      .controllers {
        width: 100vw;
        display: flex;
        justify-content: space-between;
        padding: 0 45px;

        .left-controller {
          background-color: $whiteColor;
          position: relative;
          width: 55px;
          height: 55px;
          border-radius: 100px;
          transition: .3s;
          display: flex;
          justify-content: center;
          align-items: center;

          .arrow {
            width: 20px;
            height: 20px;
            transition: .3s;
            transform: rotate(180deg);
          }
        }

        .right-controller {
          background-color: $whiteColor;
          position: relative;
          width: 55px;
          height: 55px;
          border-radius: 100px;
          transition: .3s;
          display: flex;
          justify-content: center;
          align-items: center;

          .arrow {
            position: absolute;
            width: 20px;
            height: 20px;
            transition: .3s;
          }
        }
      }
    }

    .item-info {
      .info {
        width: 60%;
        margin-top: 20px;
        margin-left: 20px;

        .item-name {
          font-size: 18px;
        }

        .item-price {
          font-size: 16px;
        }

        .item-titleComposition {
          font-size: 16px;
          margin-top: 40px;
        }

        .item-composition {
          font-size: 13px;
        }

        .item-titleSizes {
          font-size: 16px;
          margin-top: 40px;
        }

        .sizes {
          label {
            font-size: 13px;
          }
        }

        .btn2 {
          margin: 20px 0 50px 0;
        }
      }
    }
  }

  .section-contacts {
    .contacts-container {
      min-height: 10vh;

      h1 {
        margin-left: 20px;
        font-size: 30px;
      }

      .btn {
        margin-left: 20px;
        background-color: $mainGreyColor;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .2s;
        padding: 13px 35px 13px 35px;
        border-radius: 50px;

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
          width: 30px;
          height: 30px;
          border-radius: 100px;
          transition: .3s;

          .arrowRightNotActive, .arrowRightActive {
            position: absolute;
            width: 20px;
            height: 20px;
            transition: .3s;
          }
        }
      }
    }
  }
}
</style>