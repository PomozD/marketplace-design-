<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__info">
        <div class="info__article">
          <h1>Мы гарантируем все, <br>
            что производим.</h1>
          <p>Потому что мы знаем, что приоритет
            долговечности приводит
            к потреблению меньшего количества
            энергии, расходу меньшего
            количества воды и образованию
            меньшего количества мусора.</p>
        </div>
        <div class="info__article">
          <h1>Знайте, как сшита <br>
            ваша одежда.</h1>
          <p>Все, что мы производим, оказывает
            влияние на людей и планету.
            Узнайте больше о нашей программе
            экологической и социальной
            ответственности.</p>
        </div>
        <div class="info__article">
          <h1>Используем вторичное <br>
            сырье.</h1>
          <p>Заботясь об экологии, мы создаем
            нашу одежду исключительно
            из вторичного сырья, которое можно
            переработать.</p>
        </div>
        <div class="info__article">
          <h1>Мы возвращаем деньги <br>
            за каждую продажу.</h1>
          <p>Мы пообещали выделить 1%
            от продаж на сохранение
            и восстановление природной среды.</p>
        </div>
      </div>

      <div class="footer__contacts">
        <div class="contacts__article">
          <h1>Мы в соцсетях</h1>
          <div class="contacts__icons">
            <a class="contact__facebook" href="https://ru-ru.facebook.com/">
              <img class="icon__facebook" src="../assets/images/icons-facebook.svg" alt="facebook-icon">
            </a>
            <a class="contact__instagram" href="https://www.instagram.com/">
              <img class="icon__instagram" src="../assets/images/icons-instagram.svg" alt="instagram-icon">
            </a>
            <a class="contact__vk" href="https://vk.com/">
              <img class="icon__vk" src="../assets/images/icons-vk.svg" alt="vk-icon">
            </a>
          </div>
        </div>
        <div class="contacts__article">
          <h1>Когда мы работаем</h1>
          <p>С 8 утра до 8 вечера по Пн-Пт</p>
        </div>
      </div>
    </div>

    <div class="footer__politicies">
      <p>© 2023 Kamet Sportswear Company. БГТУ ДЭиВИ 3 курс. Помоз Даниил. Все права защищены.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "v-footer"
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.footer {
  max-width: 1500px;
  margin: 50px auto 0 auto;
  background-color: #000000;
  color: #ffffff;
  min-height: 500px;
  height: fit-content;
  padding-bottom: 20px;
}

.footer__container {
  display: flex;
  padding: 55px 55px 55px 55px;
  justify-content: space-between;
}
.footer__info {
  display: flex;
  width: 60%;
  flex-wrap: wrap;
}
.info__article {
  width: 40%;
  padding: 0 25px 25px 0;
}
.info__article h1, .contacts__article h1 {
  font-family: $RobotoCondensed;
  font-weight: bold;
  font-size: 26px;
}
.info__article p, .contacts__article p {
  font-family: $RobotoCondensed;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}
.contacts__icons {
  margin-bottom: 50px;
}
.icon__facebook, .icon__instagram, .icon__vk {
  width: 40px;
  height: 40px;
}
.footer__politicies {
  font-family: $RobotoCondensed;
  font-weight: bold;
  font-size: 16px;
  margin-left: 50px;
  margin-bottom: 50px;
}

@media screen and (min-width: 767px) and (max-width: 1023px) {
  .footer {
    height: 63vh;
  }

  .footer__container {
    padding: 55px 55px 20px 55px;
  }

  .footer__info {
    width: 68%;
  }
  .info__article {
    width: 40%;
    padding: 0 25px 0 0;
  }
  .info__article h1, .contacts__article h1 {
    font-size: 24px;
  }
}

@media screen and (max-width: 767px) {
  .footer {
    margin-top: 50px;
    height: 120vh;
  }

  .footer__container {
    padding: 20px 20px 20px 20px;
    flex-direction: column;
  }
  .footer__info {
    width: 100%;
  }
  .info__article {
    width: 100%;
    padding: 0 20px 0 0;
  }
  .info__article h1, .contacts__article h1 {
    font-size: 20px;
    line-height: 1.2;
  }
  .info__article p, .contacts__article p {
    font-weight: normal;
    font-size: 16px;
  }
  .contacts__icons {
    margin-bottom: 50px;
  }
  .footer__politicies {
    font-size: 16px;
    font-weight: normal;
    margin: 0 20px 50px 20px;
  }
}
</style>