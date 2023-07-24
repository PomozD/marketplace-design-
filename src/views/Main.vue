<template>
  <section class="section-main">
    <div class="main-title">
      <div class="title-name">
        <h1 class="title">Ka</h1>
        <span class="rotateLetter"><p>m</p></span>
        <h1 class="title">et</h1>
      </div>
      <span class="stroke"/>
      <router-link to="/catalog">
        <div class="div-button">
          <a class="button-text">Перейти к покупкам</a>
        </div>
      </router-link>
    </div>
  </section>

  <section class="section-marquee">
    <div class="marquee-container">
      <p class="marquee1">
        СТИЛЬ ТЕХНОЛОГИИ КОМФОРТ КАЧЕСТВО НАДЕЖНОСТЬ
      </p>
    </div>
    <div class="marquee-container">
      <p class="marquee2">
        НАДЕЖНОСТЬ СТИЛЬ ТЕХНОЛОГИИ КОМФОРТ КАЧЕСТВО
      </p>
    </div>
    <div class="marquee-container">
      <p class="marquee3">
        КАЧЕСТВО НАДЕЖНОСТЬ СТИЛЬ ТЕХНОЛОГИИ КОМФОРТ
      </p>
    </div>
    <div class="marquee-container">
      <p class="marquee4">
        КОМФОРТ КАЧЕСТВО НАДЕЖНОСТЬ СТИЛЬ ТЕХНОЛОГИИ
      </p>
    </div>
    <div class="marquee-container">
      <p class="marquee5">
        ТЕХНОЛОГИИ КОМФОРТ КАЧЕСТВО НАДЕЖНОСТЬ СТИЛЬ
      </p>
    </div>
    <div class="marquee-container">
      <p class="marquee6">
        СТИЛЬ ТЕХНОЛОГИИ КОМФОРТ КАЧЕСТВО НАДЕЖНОСТЬ
      </p>
    </div>
    <div class="marquee-container">
      <p class="marquee7">
        НАДЕЖНОСТЬ СТИЛЬ ТЕХНОЛОГИИ КОМФОРТ КАЧЕСТВО
      </p>
    </div>
    <div class="marquee-container">
      <p class="marquee8">
        КАЧЕСТВО НАДЕЖНОСТЬ СТИЛЬ ТЕХНОЛОГИИ КОМФОРТ
      </p>
    </div>
    <div class="marquee-container">
      <p class="marquee9">
        КОМФОРТ КАЧЕСТВО НАДЕЖНОСТЬ СТИЛЬ ТЕХНОЛОГИИ
      </p>
    </div>
    <div class="marquee-container">
      <p class="marquee10">
        ТЕХНОЛОГИИ КОМФОРТ КАЧЕСТВО НАДЕЖНОСТЬ СТИЛЬ
      </p>
    </div>
  </section>

  <section class="section-services">
    <div class="services-container">
      <router-link to="/catalog">
        <div class="card-services mans" v-scrollanimationloadcontent>
          <div class="mans-img">
            <img src="../assets/images/mansServices.png" alt="Мужчины">
          </div>
          <div class="btn">
            <div>
              <div class="name-service">Мужчины</div>
              <div class="arrow">
                <img class="arrowRightActive" src="../assets/images/arrowright.svg">
                <img class="arrowRightNotActive" src="../assets/images/arrowright.svg">
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/catalog">
        <div class="card-services womans" v-scrollanimationloadcontent>
          <div class="womans-img">
            <img src="../assets/images/womansServices.png" alt="Женщины">
          </div>
          <div class="btn">
            <div>
              <div class="name-service">Женщины</div>
              <div class="arrow">
                <img class="arrowRightActive" src="../assets/images/arrowright.svg">
                <img class="arrowRightNotActive" src="../assets/images/arrowright.svg">
              </div>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/catalog">
        <div class="card-services kids" v-scrollanimationloadcontent>
        <div class="kids-img">
          <img src="../assets/images/kidsServices.png" alt="Дети">
        </div>
        <div class="btn">
          <div>
            <div class="name-service">Дети</div>
            <div class="arrow">
              <img class="arrowRightActive" src="../assets/images/arrowright.svg">
              <img class="arrowRightNotActive" src="../assets/images/arrowright.svg">
            </div>
          </div>
        </div>
      </div>
      </router-link>

      <router-link to="/catalog">
        <div class="card-services accs" v-scrollanimationloadcontent>
        <div class="accs-img">
          <img src="../assets/images/accsServices.png" alt="Аксессуары">
        </div>
        <div class="btn">
          <div>
            <div class="name-service">Аксессуары</div>
            <div class="arrow">
              <img class="arrowRightActive" src="../assets/images/arrowright.svg">
              <img class="arrowRightNotActive" src="../assets/images/arrowright.svg">
            </div>
          </div>
        </div>
      </div>
      </router-link>
    </div>

    <div class="controllers">
      <div class="left-controller" @click="carousel(+1)">
        <img class="arrow" src="../assets/images/arrowright.svg">
      </div>
      <div class="right-controller" @click="carousel(-1)">
        <img class="arrow" src="../assets/images/arrowright.svg">
      </div>
    </div>
  </section>

  <section class="section-aboutUs">
    <div class="aboutUs-container">
      <h1 v-scrollanimationmovetext>Кто мы?</h1>

      <div class="aboutUs-title">
        <p v-scrollanimationmovetext class="aboutUs-title-up">
          Наша компания занимается созданием<br>
          высокотехнологичной одежды для<br>
          активного отдыха. Мы сосредоточены<br>
          на разработке и производстве качественной<br>
          и удобной одежды для людей, которые<br>
          любят заниматься спортом и проводить<br>
          время на открытом воздухе.
        </p>
        <p v-scrollanimationmovetext class="aboutUs-title-down">
          Мы используем только лучшие технологии<br>
          и материалы для создания нашей одежды.<br>
          Мы работаем над тем, чтобы каждая<br>
          деталь была продумана и соответствовала<br>
          потребностям наших клиентов. Мы уделяем<br>
          внимание комфорту, защите от погодных<br>
          условий, а также стилю и моде.
        </p>
      </div>
    </div>
  </section>

  <section class="section-contacts" v-scrollanimationloadcontent>
    <div class="contacts-container">
      <h1>Если у Вас остались вопросы,<br>
        Вы можете перейти по ссылке</h1>

      <router-link to="/contacts">
        <div class="btn">
          <div class="button-title">Связаться с нами</div>
          <div class="arrow">
            <img class="arrowRightActive" src="../assets/images/arrowrightBlack.svg">
            <img class="arrowRightNotActive" src="../assets/images/arrowrightBlack.svg">
          </div>
        </div>
      </router-link>
    </div>
  </section >

</template>

<script>

export default {
  name: "Main.vue",

  data() {
    return {
      currentslide: 0,
      marginSlides: 20,
    }
  },

  methods: {
    carousel(direction) {

      let slideLeft = document.querySelector('.services-container').getBoundingClientRect().left;

      if((direction === -1 && this.currentslide === 3) || (direction === 1 && this.currentslide === 0)) {
        return;
      }

      let margin = this.marginSlides;
      if(direction === -1) {
        margin *= 2;
      } else {
        margin *= 0;
      }

      this.currentslide -= direction;
      let slideWidth = document.querySelector('.card-services').getBoundingClientRect().width;
      document.querySelector('.services-container').style.left = slideLeft + (direction * (slideWidth + margin)) + "px";

      console.log(slideLeft, slideLeft + direction * (slideWidth + margin), document.querySelector('.services-container').style.left);
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

    .title, .rotateLetter {
      color: $mainGreyColor;
      font-family: $RobotoCondensed;
      font-size: 250px;
      line-height: 0;
    }

    .rotateLetter {
      font-weight: bold;
      animation: rotate 2.5s infinite forwards;
    }
    
    @keyframes rotate {
      0% {
        transform: rotateY(0);
      }
      25% {
        transform: rotateY(0);
      }
      50% {
        transform: rotateY(0);
      }
      75% {
        transform: rotateY(180deg);
      }
      100% {
        transform: rotateY(0);
      }
    }
  }

  .stroke {
    display: block;
    margin-top: -80px;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    height: 3px;
    background: $mainGreyColor;
    transition: all .3s;
    position: relative;
  }

  .div-button {
    margin-top: 80px;
    background-color: $mainGreyColor;
    padding: 18px 45px 15px 45px;
    border-radius: 50px;
    transition: .3s;

    &:hover {
      background-color: #444444;
    }

    .button-text {
      font-family: $RobotoCondensed;
      font-weight: 500;
      font-size: 18px;
      color: $mainColor;
      text-decoration: none;
    }
  }
}

.marquee-container {
  display: flex;
  align-items: center;
  overflow: hidden;

  .marquee1, .marquee2, .marquee3, .marquee4,
  .marquee5, .marquee6, .marquee7, .marquee8,
  .marquee9, .marquee10 {
    font-family: $RobotoCondensed;
    font-size: 50px;
    font-weight: bold;
    color: $mainGreyColor;
    margin: 10px;
    white-space: nowrap;
  }

  .marquee1, .marquee3,
  .marquee5, .marquee7,
  .marquee9 {
    animation: marqueeLeft 30s infinite linear;
  }

  .marquee2, .marquee4,
  .marquee6, .marquee8,
  .marquee10 {
    animation: marqueeRight 15s infinite linear;
  }

  .marquee1 {
    &:after {
      content: "СТИЛЬ ТЕХНОЛОГИИ КОМФОРТ КАЧЕСТВО НАДЕЖНОСТЬ";
    }
  }

  .marquee2 {
    &:after {
      content: "НАДЕЖНОСТЬ СТИЛЬ ТЕХНОЛОГИИ КОМФОРТ КАЧЕСТВО";
    }
  }

  .marquee3 {
    &:after {
      content: "КАЧЕСТВО НАДЕЖНОСТЬ СТИЛЬ ТЕХНОЛОГИИ КОМФОРТ";
    }
  }

  .marquee4 {
    &:after {
      content: "КОМФОРТ КАЧЕСТВО НАДЕЖНОСТЬ СТИЛЬ ТЕХНОЛОГИИ";
    }
  }

  .marquee5 {
    &:after {
      content: "ТЕХНОЛОГИИ КОМФОРТ КАЧЕСТВО НАДЕЖНОСТЬ СТИЛЬ";
    }
  }

  .marquee6 {
    &:after {
      content: "СТИЛЬ ТЕХНОЛОГИИ КОМФОРТ КАЧЕСТВО НАДЕЖНОСТЬ";
    }
  }

  .marquee7 {
    &:after {
      content: "НАДЕЖНОСТЬ СТИЛЬ ТЕХНОЛОГИИ КОМФОРТ КАЧЕСТВО";
    }
  }

  .marquee8 {
    &:after {
      content: "КАЧЕСТВО НАДЕЖНОСТЬ СТИЛЬ ТЕХНОЛОГИИ КОМФОРТ";
    }
  }

  .marquee9 {
    &:after {
      content: "КОМФОРТ КАЧЕСТВО НАДЕЖНОСТЬ СТИЛЬ ТЕХНОЛОГИИ";
    }
  }

  .marquee10 {
    &:after {
      content: "ТЕХНОЛОГИИ КОМФОРТ КАЧЕСТВО НАДЕЖНОСТЬ СТИЛЬ";
    }
  }

  @keyframes marqueeLeft{
    0% {
      transform: translateX(0)
    }
    100% {
      transform: translateX(-50%)
    }
  }

  @keyframes marqueeRight{
    0% {
      transform: translateX(0)
    }
    100% {
      transform: translateX(-50%)
    }
  }
}

.section-services {
  margin-top: 50px;
  width: 100%;

  .services-container {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;

    .mans {
      transition-delay: .2s;
    }
    .womans {
      transition-delay: .3s;
    }
    .kids {
      transition-delay: .4s;
    }
    .accs {
      transition-delay: .5s;
    }

    .card-services {
      background-color: $whiteColor;
      box-shadow: 10px 14px 35px 0px rgba(0, 0, 0, 0.1);

      .mans-img img, .womans-img img,
      .kids-img img, .accs-img img {
        transition: .2s;
      }

      img {
        width: 250px;
        height: 350px;
      }

      .btn {
        display: flex;
        padding: 60px 0 60px 0;
        justify-content: center;

        div {
          display: flex;
          justify-content: center;
          align-items: center;


          .name-service {
            font-family: $RobotoCondensed;
            color: $mainGreyColor;
            font-weight: 500;
            font-size: 24px;
            padding-right: 20px;
          }

          .arrow {
            background-color: $mainGreyColor;
            position: relative;
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
        }
      }

      &:hover .mans-img img, &:hover .womans-img img,
      &:hover .kids-img img, &:hover .accs-img img {
        opacity: 0.95;
        //scale: 1.05;
      }

      &:hover {
        background-color: #FFDDAB;
      }

      &:hover .arrow {
        transform: translateX(30%)
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

  .controllers {
    margin: 30px 20px 0 20px;
    width: 90%;
    display: none;
    justify-content: space-between;

    .left-controller {
      background-color: $mainGreyColor;
      position: relative;
      width: 100px;
      height: 35px;
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
      background-color: $mainGreyColor;
      position: relative;
      width: 100px;
      height: 35px;
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

.section-aboutUs {
  width: 100%;
  min-height: 100vh;
  margin-top: 50px;
  background-image: url("../assets/images/whoweareNew.png");
  background-repeat: no-repeat;
  background-size: cover;

  .aboutUs-container {
    display: flex;
    width: 100%;
    justify-content: space-between;

    h1 {
      margin-left: 55px;
      font-family: $RobotoCondensed;
      font-size: 75px;
      color: $mainGreyColor;
      line-height: 0.5;
      transition-delay: .1s;
    }

    .aboutUs-title {
      margin-right: 55px;
      font-size: 40px;
      color: $mainGreyColor;
      line-height: 1.15;


      .aboutUs-title-up {
        font-family: $RobotoCondensed;
        transition-delay: .2s;
      }

      .aboutUs-title-down {
        font-family: $EBGaramond;
        transition-delay: .2s;
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
    .title-name {
      .title, .rotateLetter {
        font-size: 150px;
      }
    }

    .stroke {
      margin-top: -50px;
      height: 2px;
    }

    .div-button {
      padding: 16px 40px 13px 40px;

      .button-text {
        font-size: 16px;
      }
    }
  }

  .marquee-container {
    .marquee1, .marquee2, .marquee3, .marquee4,
    .marquee5, .marquee6, .marquee7, .marquee8,
    .marquee9, .marquee10 {
      font-size: 30px;
      margin: 5px;
    }

    .marquee1, .marquee3,
    .marquee5, .marquee7,
    .marquee9 {
      animation: marqueeLeft 50s infinite linear;
    }

    .marquee2, .marquee4,
    .marquee6, .marquee8,
    .marquee10 {
      animation: marqueeRight 25s infinite linear;
    }
  }

  .section-services {
    .services-container {
      .card-services {
        img {
          width: 150px;
          height: 250px;
        }

        .btn {
          div {
            .name-service {
              font-size: 16px;
              padding-right: 10px;
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
        }
      }
    }
  }

  .section-aboutUs {
    min-height: 40vh;
    margin-top: 50px;

    .aboutUs-container {

      h1 {
        font-size: 30px;
        line-height: 0.8;
      }

      .aboutUs-title {
        font-size: 18px;
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

    .div-button {
      margin-top: 20px;
      padding: 16px 40px 13px 40px;

      .button-text {
        font-size: 14px;
      }
    }
  }

  .marquee-container {
    .marquee1, .marquee2, .marquee3, .marquee4,
    .marquee5, .marquee6, .marquee7, .marquee8,
    .marquee9, .marquee10 {
      font-size: 20px;
      margin: 5px;
    }

    .marquee1, .marquee3,
    .marquee5, .marquee7,
    .marquee9 {
      animation: marqueeLeft 50s infinite linear;
    }

    .marquee2, .marquee4,
    .marquee6, .marquee8,
    .marquee10 {
      animation: marqueeRight 25s infinite linear;
    }
  }

  .section-services {
    height: 500px;
    display: flex;
    align-items: flex-end;
    position: relative;
    overflow: hidden;

    .services-container {
      display: flex;
      justify-content: space-between;
      width: unset;
      margin: 0 20px 0 20px;
      top: 0;
      position: absolute;

      .card-services {
        margin-right: 20px;
        background-color: $whiteColor;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        transition: 1s;

        &:last-child {
          margin-right: 0;
        }

        .mans-img img, .womans-img img,
        .kids-img img, .accs-img img {
          transition: .2s;
        }

        img {
          width: 247px;
          height: 320px;
        }

        .btn {
          display: flex;
          padding: 30px 0 30px 0;
          justify-content: center;

          div {
            display: flex;
            justify-content: center;
            align-items: center;


            .name-service {
              font-family: $RobotoCondensed;
              color: $mainGreyColor;
              font-weight: 500;
              font-size: 16px;
              padding-right: 20px;
            }

            .arrow {
              background-color: $mainGreyColor;
              position: relative;
              width: 40px;
              height: 40px;
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
          }
        }

        &:hover .mans-img img, &:hover .womans-img img,
        &:hover .kids-img img, &:hover .accs-img img {
          opacity: 0.95;
          //scale: 1.05;
        }

        &:hover {
          background-color: #FFDDAB;
        }

        &:hover .arrow {
          transform: translateX(30%)
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

    .controllers {
      margin: 30px 20px 0 20px;
      width: 90%;
      display: flex;
      justify-content: space-between;

      .left-controller {
        background-color: $mainGreyColor;
        position: relative;
        width: 100px;
        height: 35px;
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
        background-color: $mainGreyColor;
        position: relative;
        width: 100px;
        height: 35px;
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

  .section-aboutUs {

    .aboutUs-container {
      flex-direction: column;

      h1 {
        margin-left: 20px;
        font-size: 30px;
      }

      .aboutUs-title {
        margin-left: 20px;
        font-size: 25px;
      }
    }
  }

  .section-contacts {
    .contacts-container {
      min-height: 20vh;

      h1 {
        margin-left: 20px;
        font-size: 30px;
      }

      .btn {
        margin-left: 20px;
        padding: 10px 30px 10px 30px;

        .button-title {
          font-size: 14px;
        }

        .arrow {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}
</style>