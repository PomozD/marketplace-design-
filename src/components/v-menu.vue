<template>
  <div class="container-menu" :class="{overflowFalse: isActiveMenu, overflowTrue: isNotActive}">
    <div class="logo">
      <router-link to="/">
        <img class="logo-img" src="../assets/images/logo.png">
      </router-link>
    </div>

    <div @click="OpenCloseMenu" id="button" class="btn" :class="{active: isActiveMenu, notActive: isNotActive}">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="overlay" :class="{openMenu: isActiveMenu, closeMenu: isNotActive}">

      <p class="p-menu" :class="{opacityOverlayTrue: isActiveMenu, opacityOverlayFalse: isNotActive}">Меню</p>

      <nav class="overlay-content" :class="{opacityOverlayTrue: isActiveMenu, opacityOverlayFalse: isNotActive}">
        <router-link to="/catalog" @click="CloseMenuOnClick">Каталог</router-link>
        <router-link to="/contacts" @click="CloseMenuOnClick">Контакты</router-link>
        <router-link to="/about" @click="CloseMenuOnClick">О нас</router-link>
      </nav>

      <div class="contacts-container" :class="{opacityOverlayTrue: isActiveMenu, opacityOverlayFalse: isNotActive}">
        <div>
          <p class="contacts-p">Наши соцсети</p>
        </div>
        <div>
          <a class="contact__facebook" href="https://ru-ru.facebook.com/">
            <img class="icon__facebook" src="../assets/images/icons-facebook.svg">
          </a>
          <a class="contact__instagram" href="https://www.instagram.com/">
            <img class="icon__instagram" src="../assets/images/icons-instagram.svg">
          </a>
          <a class="contact__vk" href="https://vk.com/">
            <img class="icon__vk" src="../assets/images/icons-vk.svg">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-menu",

  data() {
    return {
      isActiveMenu: false,
      isNotActive: true,
      //idButton: document.getElementById('button'),
      //menu: false,
    }
  },

  methods: {
    OpenCloseMenu() {
      if(this.isNotActive) {
        this.isActiveMenu = true;
        document.body.style.overflow = "hidden";
        this.isNotActive = false;
      }
      else {
        this.isActiveMenu = false;
        this.isNotActive = true;
        document.body.style.overflow = "";
      }
    },

    CloseMenuOnClick() {
      this.isActiveMenu = false;
      this.isNotActive = true;
      document.body.style.overflow = "";
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

  .container-menu {
    max-width: 1500px;
    z-index: 9999;
    display: flex;
    width: 100%;
    margin: 20px auto;
    justify-content: space-between;
    position: absolute;
  }

  /* open/close menu button */
  .btn {
    margin-right: 55px;
    z-index: 2;
    width: 50px;
  }

  span {
    display: block;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    height: 2px;
    background: $mainGreyColor;
    transition: all .3s;
    position: relative;
  }

  span + span {
    margin-top: 10px;
  }

  .active span:nth-child(1) {
    animation: ease .7s top forwards;
    background: $whiteColor;
  }

  .notActive span:nth-child(1) {
    animation: ease .7s top-2 forwards;
  }

  .active span:nth-child(2) {
    animation: ease .7s scaled forwards;
    background: $whiteColor;
  }

  .notActive span:nth-child(2) {
    animation: ease .7s scaled-2 forwards;
  }

  .active span:nth-child(3) {
    animation: ease .7s bottom forwards;
    background: $whiteColor;
  }

  .notActive span:nth-child(3) {
    animation: ease .7s bottom-2 forwards;
  }

  @keyframes top {
    0% {
      top: 0;
      transform: rotate(0);
    }
    50% {
      top: 22px;
      transform: rotate(0);
    }
    100% {
      top: 22px;
      transform: rotate(45deg);
    }
  }

  @keyframes bottom {
    0% {
      top: 0;
      transform: rotate(0);
    }
    50% {
      top: 22px;
      transform: rotate(0);
    }
    100% {
      top: 0;
      transform: rotate(135deg);
    }
  }

  @keyframes scaled {
    50% {
      transform: scale(0);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes top-2 {
    0% {
      top: 22px;
      transform: rotate(45deg);
    }
    50% {
      top: 22px;
      transform: rotate(0);
    }
    100% {
      top: 0;
      transform: rotate(0);
    }
  }

  @keyframes bottom-2 {
    0% {
      top: 0;
      transform: rotate(135deg);
    }
    50% {
      top: 22px;
      transform: rotate(0);
    }
    100% {
      top: 0;
      transform: rotate(0);
    }
  }

  @keyframes scaled-2 {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  /* logo */

  .logo {
    margin-left: 55px;
  }

  .logo-img {
    width: 143px;
    height: 36px;
  }

  /* overlay menu */

  .overlay {
    height: 0;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgb(0,0,0);
    overflow-x: hidden;
    transition: 0.5s;
  }

  .p-menu {
    font-family: $RobotoCondensed;
    font-weight: bold;
    font-size: 55px;
    color: $whiteColor;
    text-align: center;
    line-height: 0.1;
  }

  .overlay-content {
    position: absolute;
    top: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: -40px;
  }

  .overlay-content a {
    font-family: $RobotoCondensed;
    font-weight: bold;
    font-size: 80px;
    padding: 0 30px 10px 30px;
    text-decoration: none;
    color: $whiteColor;
    display: block; /* Display block instead of inline */
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 0 2px;
    transition: background-size .4s;
  }

  .overlay-content:hover a {
    color: #444444;
    transition: .3s;
  }

  .overlay-content a:hover {
    background-size: 100% 2px;
    color: $whiteColor;
  }

  /* contacts */

 .contacts-container {
   display: flex;
   width: 100%;
   align-items: center;
   flex-direction: column;
   position: absolute;
   top: 70%;
 }

  .contacts-p {
    font-family: $RobotoCondensed;
    font-weight: 500;
    font-size: 28px;
    color: $whiteColor;
    line-height: 0.1;
  }

  .contacts-container a {
    margin-left: 10px;
    margin-right: 10px;
  }

  .icon__facebook, .icon__instagram, .icon__vk {
    width: 45px;
    height: 45px;
  }

  /* open/close menu */

  .openMenu {
    height: 100%;
  }

  .closeMenu {
    height: 0;
  }

  .opacityOverlayTrue {
    opacity: 1;
    transition: 3s;
  }

  .opacityOverlayFalse {
    opacity: 0;
  }

  //.overflowFalse {
  //  overflow: hidden;
  //}
  //.overflowTrue {
  //  overflow: visible;
  //}


@media screen and (min-width: 767px) and (max-width: 1023px) {
  .container-menu {
    margin: 20px 0 0 0;

    .logo {
      margin-left: 55px;

      .logo-img {
        width: 113px;
        height: 26px;
      }
    }

    .btn {
      z-index: 99999;
      margin-right: 15px;

      span {
        width: 50%;
        height: 1.3px;
      }

      span + span {
        margin-top: 6px;
      }
    }

    @keyframes top {
      0% {
        top: 0;
        transform: rotate(0);
      }
      50% {
        top: 22px;
        transform: rotate(0);
      }
      100% {
        top: 14px;
        transform: rotate(45deg);
      }
    }

    /* overlay menu */

    .overlay {
      z-index: 9999;

      .p-menu {
        font-size: 25px;
        text-align: left;
        margin-left: 55px;
        line-height: 1;
      }

      .overlay-content {
        top: 10%;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        margin-left: 55px;
        width: 100%;

        a {
          font-size: 40px;
          padding: 10px 0 0 0;
          color: $whiteColor;
          background-image: linear-gradient(#444444, #444444);
          background-size: 100% 2px;
        }
      }

      /* contacts */

      .contacts-container {
        display: flex;
        width: 100%;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 70%;

        .contacts-p {
          font-family: $RobotoCondensed;
          font-weight: 500;
          font-size: 28px;
          color: $whiteColor;
          line-height: 0.1;
        }

        div {
          a {
            margin-left: 10px;
            margin-right: 10px;

            .icon__facebook, .icon__instagram, .icon__vk {
              width: 45px;
              height: 45px;
            }
          }
        }
      }
    }

    .openMenu {
      height: 100%;
    }
  }
}

@media screen and (max-width: 767px) {
  .container-menu {
    margin: 20px 0 0 0;


    .logo {
      margin-left: 20px;

      .logo-img {
        width: 85px;
        height: 20px;
      }
    }

    .btn {
      z-index: 9999;
      margin-right: 0px;

      span {
        width: 70%;
        height: 1.3px;
      }

      span + span {
        margin-top: 6px;
      }
    }

    @keyframes top {
      0% {
        top: 0;
        transform: rotate(0);
      }
      50% {
        top: 22px;
        transform: rotate(0);
      }
      100% {
        top: 14px;
        transform: rotate(45deg);
      }
    }

    /* overlay menu */

    .overlay {
      z-index: 9998;
      .p-menu {
        font-size: 16px;
        text-align: left;
        margin-top: 30px;
        margin-left: 20px;
        line-height: 1;
      }

      .overlay-content {
        top: 10%;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;
        margin-left: 20px;
        width: 100%;

        a {
          font-size: 3rem;
          padding: 10px 0 0 0;
          color: $whiteColor;
          background-image: linear-gradient(#444444, #444444);
          background-size: 100% 2px;
        }
      }

      /* contacts */

      .contacts-container {
        display: flex;
        width: 100%;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 70%;

        .contacts-p {
          font-family: $RobotoCondensed;
          font-weight: 500;
          font-size: 25px;
          color: $whiteColor;
          line-height: 0.1;
        }

        div {
          a {
            margin-left: 10px;
            margin-right: 10px;

            .icon__facebook, .icon__instagram, .icon__vk {
              width: 45px;
              height: 45px;
            }
          }
        }
      }
    }

    .openMenu {
      height: 100%;
    }
  }
}


</style>