<template>
  <div class="container-template">
    <section class="section-main">
      <div class="main-title">
        <div class="title-name">
          <h1 class="title">О нас</h1>
        </div>
        <span class="stroke"/>
      </div>
    </section>

    <section class="section-about">

      <div class="about-header">
        <div class="container__breadCrumbs">
          <router-link class="nav__main" to="/">Главная</router-link>
          <div class="breadCrumbs">
            <img class="arrow__right" src="../assets/images/arrowright2.svg">
            <h1 class="breadCrumbs__current_page">О нас</h1>
          </div>
        </div>
      </div>

      <div class="container__view">
        <div class="container-photos">
          <div class="photos-up">
            <img v-scrollanimationloadcontent class="employee1" src="../assets/images/employees1.png"/>
            <img v-scrollanimationloadcontent class="employee2" src="../assets/images/employees2.png"/>
          </div>
          <div class="photos-down">
            <img v-scrollanimationloadcontent class="employee3" src="../assets/images/employees3.png"/>
          </div>
        </div>

        <div v-scrollanimationmovetext class="container-aboutUs">
          <div v-scrollanimationmovetext class="aboutUs-title">
            <h1 v-scrollanimationmovetext>Кто мы такие?</h1>
          </div>
          <div v-scrollanimationmovetext class="aboutUs-subtitle">
            <p v-scrollanimationmovetext>Наша команда состоит из опытных специалистов в области продажи вещей для активного отдыха. Наши сотрудники имеют богатый опыт работы с клиентами, которые ищут качественную и надежную продукцию, а также готовы предложить профессиональную помощь в выборе подходящих товаров.</p>
          </div>
        </div>
        <div v-scrollanimationloadcontent class="container-employees">
          <div class="container-employee bottom-tooltip" v-for="employee in employees" :key="employee">
            <div class="sub-background">
              <img :src="employee.img"/>
            </div>
            <div class="tooltip">
              <p>{{employee.name}}</p>
            </div>
          </div>
        </div>
        <div class="container-aboutWork">
          <div v-scrollanimationloadcontent class="container__marquees">
            <div class="marquee">
              <details close>
                <summary>
                  <h1>Как мы работаем?</h1>
                  <div></div>
                </summary>
                <div class="container__marquee">
                  <p> Мы стремимся предоставить нашим клиентам наилучший сервис и качественную продукцию. Вот некоторые из принципов, которыми мы руководствуемся в работе:</p>
                  <ul>
                    <li>
                      Мы предлагаем широкий ассортимент товаров для активного отдыха, в том числе технику и снаряжение от лучших производителей.
                    </li>
                    <li>
                      Наша команда всегда готова помочь клиентам в выборе подходящих товаров и ответить на все вопросы.
                    </li>
                    <li>
                      Мы предлагаем гибкую систему оплаты и удобные способы доставки по всей стране.
                    </li>
                    <li>
                      Мы гарантируем высокое качество всех наших товаров и предоставляем гарантию на все устройства.
                    </li>
                    </ul>
                </div>
              </details>
            </div>

            <hr>

            <div class="marquee">
              <details close>
                <summary>
                  <h1>Наша история</h1>
                  <div></div>
                </summary>
                <div class="container__marquee">
                  <p> Наша компания была основана в 2010 году группой энтузиастов, увллеченных активным отдыхом и путешествиями. Мы начинали с продажи снаряжения для туризма и кемпинга, но вскоре расширили свой ассортимент, добавив в него технику для активного отдыха. Сегодня мы предлагаем широкий выбор продукции от ведущих производителей и оставляем за собой репутацию надежного поставщика качественных товаров.</p>
                </div>
              </details>
            </div>

            <hr>

            <div class="partners">
              <h1>Наши партнеры</h1>

              <div class="partners-images">
                <img v-scrollanimationmovetext src="../assets/images/partner1.png"/>
                <img v-scrollanimationmovetext src="../assets/images/partner2.png"/>
                <img v-scrollanimationmovetext src="../assets/images/partner3.png"/>
                <img v-scrollanimationmovetext src="../assets/images/partner4.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {

  name: "About",

  data() {
    return {
      employees: [
        {name: 'Вадим Орлов', img: "src/assets/images/avatars/avatar1.png"},
        {name: 'Ника Маркелова', img: "src/assets/images/avatars/avatar2.png"},
        {name: 'Ксения Мельникова', img: "src/assets/images/avatars/avatar3.png"},
        {name: 'Станислав Гордеев', img: "src/assets/images/avatars/avatar4.png"},
        {name: 'Михаил Максимов', img: "src/assets/images/avatars/avatar5.png"},
        {name: 'София Федорова', img: "src/assets/images/avatars/avatar6.png"},
        {name: 'Ясмина Яковлева', img: "src/assets/images/avatars/avatar7.png"},
        {name: 'Лев Миронов', img: "src/assets/images/avatars/avatar8.png"},
        {name: 'Ксения Скворцова', img: "src/assets/images/avatars/avatar9.png"},
        {name: 'Полина Рябова', img: "src/assets/images/avatars/avatar10.png"},
        {name: 'Арина Николаева', img: "src/assets/images/avatars/avatar11.png"},
        {name: 'Федор Воронин', img: "src/assets/images/avatars/avatar12.png"},
        {name: 'Мария Иванова', img: "src/assets/images/avatars/avatar13.png"},
        {name: 'Макар Рубцов', img: "src/assets/images/avatars/avatar14.png"},
        {name: 'Аделина Андреева', img: "src/assets/images/avatars/avatar15.png"},
        {name: 'Ульяна Гладкова', img: "src/assets/images/avatars/avatar16.png"},
        {name: 'Валерия Сорокина', img: "src/assets/images/avatars/avatar17.png"},
        {name: 'Владислав Левин', img: "src/assets/images/avatars/avatar18.png"},
        {name: 'Василиса Павлова', img: "src/assets/images/avatars/avatar19.png"},
        {name: 'Хуан Харрис', img: "src/assets/images/avatars/avatar20.png"},
        {name: 'Василиса Павлова', img: "src/assets/images/avatars/avatar21.png"},
        {name: 'Эллен Льюис', img: "src/assets/images/avatars/avatar22.png"},
        {name: 'Ричард Робертс', img: "src/assets/images/avatars/avatar23.png"},
      ]
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

.section-about {

  .about-header {
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

    .container-photos {
      margin: 50px 55px 0 55px;

      .photos-up {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .employee1 {
          width: 40%;
          height: 100%;
        }
        .employee2 {
          width: 50%;
          height: 100%;
        }
      }

      .photos-down {
        width: 100%;
        display: flex;
        justify-content: center;

        .employee3 {
          width: 70%;
          height: 100%;
        }
      }
    }

    .container-aboutUs {
      width: 70%;
      margin: 50px 55px 0 55px;

      .aboutUs-title {
        h1 {
          font-family: $EBGaramond;
          font-size: 50px;
          line-height: 0;
          transition-delay: .1s;
        }
      }

      .aboutUs-subtitle {
        p {
          font-family: $RobotoCondensed;
          font-size: 24px;
          font-weight: 450;
          transition-delay: .2s;
        }
      }
    }

    .container-employees {
      margin: 50px auto;
      width: 90%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 40px;

      .container-employee {
        width: 150px;
        height: 150px;
        border-radius: 100px;
        background-color: $mainGreyColor;
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        transition: all 0.3s ease-in-out;

        .sub-background {
          width: 95px;
          height: 95px;
          border-radius: 50px;
          background-color: $whiteColor;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 180px;
            height: 180px;
          }
        }

        .tooltip {
          visibility: hidden;
          z-index: 9999;
          opacity: .40;

          width: 100%;
          padding: 0 20px;

          background: $whiteColor;
          color: $mainGreyColor;

          position: absolute;
          top:-140%;
          left: -25%;

          border-radius: 9px;
          font-size: 16px;

          box-shadow: 0 0 3px rgba(56, 54, 54, 0.86);

          &::after {
            content: " ";
            width: 0;
            height: 0;

            border-style: solid;
            border-width: 12px 12px 0 12px;
            border-color: $whiteColor transparent transparent transparent;

            position: absolute;
            left: 40%;
          }

          p {
            font-family: $RobotoCondensed;
            font-size: 13px;
          }
        }

        &:hover .tooltip {
          z-index: 9999;
          visibility: visible;
          opacity: 1;
          animation: tool 1s ease-in-out infinite  alternate;
        }

        @keyframes tool {
          0%{
            transform: translateY(6px);
          }

          100%{
            transform: translateY(1px);
          }

        }
      }

      .bottom-tooltip {

        z-index: 9999;

        &:hover {
          z-index: 9999;
          transform: translateY(6px);
        }

        .tooltip {
          z-index: 9999;
          top:90%;
          left: -15%;

          &::after {
            z-index: 9999;
            top:-17%;
            left:42%;
            transform: rotate(180deg);
          }
        }
      }
    }

    .container-aboutWork {
      background-color: $mainGreyColor;

      .container__marquees {
        margin: 20px 55px 0 55px;

        hr {
          border-radius: 50px;
          height: 1.3px;
          background-color: $whiteColor;
        }

        .marquee {

          h1 {
            margin-top: 60px;
            font-family: $EBGaramond;
            font-size: 50px;
            color: $whiteColor;
            line-height: 0;
          }

          hr {
            width: 100%;
            margin-bottom: 0;
            border: 1px solid $whiteColor;
            border-radius: 5px;
          }

          details {
            display: flex;
            align-items: center;
            transition: .2s;

            & > summary {
              list-style: none;
              display: flex;
            }

            summary {
              display: flex;
              align-items: center;
              justify-content: space-between;

              h1 {
                margin-top: 60px;
                font-family: $EBGaramond;
                font-size: 50px;
                color: $whiteColor;
                line-height: 0;
              }

              div {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 20px;

                &:after {
                  content: url(../assets/images/icon_plus2.svg);
                }
              }
            }

            &[open] {
              summary {
                div {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-right: 15px;

                  &:after {
                    content: url(../assets/images/icon_minus2.svg);
                    margin-top: 4px;
                  }
                }
              }
            }

            .container__marquee {
              display: flex;
              flex-direction: column;
              overflow: auto;
              width: 80%;

              p {
                font-family: $RobotoCondensed;
                font-size: 18px;
                color: $whiteColor;
                margin-top: 20px;
              }
              ul {
                margin-top: -10px;
                li {
                  font-family: $RobotoCondensed;
                  font-size: 18px;
                  color: $whiteColor;
                }
              }
            }
          }

        }

        .partners {
          h1 {
            margin-top: 60px;
            font-family: $EBGaramond;
            font-size: 50px;
            color: $whiteColor;
            line-height: 0;
          }

          .partners-images {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 80px;

            img {
              width: 200px;
              height: 100%;
            }
          }
        }
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

  .section-about {
    .about-header {
      margin: 0 0px 0 0px;
    }

    .container__view {
      color: $mainGreyColor;
      margin-bottom: -50px;

      .container-aboutUs {

        .aboutUs-title {
          h1 {
            font-size: 30px;
          }
        }

        .aboutUs-subtitle {
          p {
            font-size: 18px;
          }
        }
      }

      .container-employees {
        gap: 20px;

        .container-employee {
          width: 100px;
          height: 100px;

          .sub-background {
            width: 65px;
            height: 65px;

            img {
              width: 120px;
              height: 120px;
            }
          }

          .tooltip {

            width: 100%;
            padding: 0 20px;

            top:-140%;
            left: -25%;

            border-radius: 9px;
            font-size: 16px;

            p {
              font-family: $RobotoCondensed;
              font-size: 13px;
            }
          }
        }

        .bottom-tooltip {

          &:hover {
            z-index: 9999;
            transform: translateY(3px);
          }

          .tooltip {
            z-index: 9999;
            top: 70%;
            left: -15%;

            &::after {
              z-index: 9999;
              top:-17%;
              left:42%;
            }
          }
        }
      }

      .container-aboutWork {

        .container__marquees {

          .marquee {

            h1 {
              margin-top: 60px;
              font-size: 30px;
            }

            details {

              summary {

                h1 {
                  margin-top: 60px;
                  font-size: 30px;
                }
              }

              .container__marquee {

                p {
                  font-size: 16px;
                }
                ul {
                  margin-top: -10px;
                  li {
                    font-size: 16px;
                  }
                }
              }
            }

          }

          .partners {
            h1 {
              font-size: 30px;
            }

            .partners-images {
              padding: 40px;

              img {
                width: 100px;
                height: 100%;
              }
            }
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

  .section-about {
    margin: 0 0 0 0;

    .about-header {
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

      .container-photos {
        margin: 10px 20px 0 20px;

        .photos-up {
          width: 100%;
          flex-direction: column;

          .employee1 {
            width: 70%;
            margin: 0 auto;
          }
          .employee2 {
            width: 80%;
            margin: 0 auto;
          }
        }

        .photos-down {
          width: 100%;

          .employee3 {
            width: 80%;
            margin: 0 auto;
          }
        }
      }

      .container-aboutUs {
        width: 70%;
        margin: 50px 20px 0 20px;

        .aboutUs-title {
          h1 {
            font-family: $EBGaramond;
            font-size: 30px;
            line-height: 0.8;
            transition-delay: .1s;
          }
        }

        .aboutUs-subtitle {
          margin-top: -10px;
          p {
            font-size: 18px;
          }
        }
      }

      .container-employees {
        margin: 20px auto;
        width: 95%;
        gap: 10px;

        .container-employee {
          width: 80px;
          height: 80px;

          .sub-background {
            width: 50px;
            height: 50px;

            img {
              width: 90px;
              height: 90px;
            }
          }

          .tooltip {
            width: 100%;
            padding: 0 8px;
            top:-100%;
            left: -25%;

            border-radius: 9px;
            font-size: 13px;

            p {
              font-size: 9px;
            }
          }
        }

        .bottom-tooltip {
          &:hover {
            transform: translateY(4px);
          }

          .tooltip {
            top:50%;
            left: -10%;

            &::after {
              top:-17%;
              left:40%;
            }
          }
        }
      }

      .container-aboutWork {

        .container__marquees {
          margin: 20px 20px 0 20px;

          .marquee {
            h1 {
              margin-top: 30px;
              font-size: 30px;
            }

            details {
              summary {

                h1 {
                  margin-top: 50px;
                  font-size: 30px;
                }

                div {
                  margin-right: 20px;
                }
              }

              .container__marquee {
                p {
                  font-size: 13px;
                }
                ul {
                  margin-top: -10px;
                  li {
                    font-size: 13px;
                  }
                }
              }
            }

          }

          .partners {
            h1 {
              margin-top: 30px;
              font-size: 30px;
            }

            .partners-images {
              padding: 20px;

              img {
                width: 60px;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}

</style>