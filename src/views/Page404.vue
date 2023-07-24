<template>
  <section class="section-404">
    <div class="container__view">
      <div class="content">
        <h1>404</h1>
        <span class="stroke"/>

        <router-link to="/">
          <div class="btn2">
            <div class="arrow2">
              <img class="arrowRightActive2" src="../assets/images/arrowrightBlack.svg">
            </div>
            <div class="button-title2">На главную</div>
          </div>
        </router-link>
      </div>

      <div class="cinemagraph">
        <img src="../assets/images/clouds1.png"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Page404"
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.container__view {
  background-image: url("../assets/images/fog2.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  margin-bottom: -50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    width: 70%;
    display: flex;
    flex-direction: column;
    z-index: 1;

    h1 {
      font-family: $RobotoCondensed;
      color: $mainGreyColor;
      font-size: 200px;
      line-height: 0;
      margin: 0 auto;
    }

    .stroke {
      display: block;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      height: 3px;
      background: $mainGreyColor;
      transition: all .3s;
      margin-top: 120px;
    }

    .btn2 {
      background-color: $mainGreyColor;
      display: flex;
      align-items: center;
      transition: .3s;
      width: 250px;
      border-radius: 50px;
      margin: 50px auto 0 auto;

      &:hover {
        background-color: #727272;
      }

      .button-title2 {
        margin-left: 33px;
        font-family: $RobotoCondensed;
        color: $whiteColor;
        font-weight: 500;
        font-size: 16px;
      }

      .arrow2 {
        margin-left: -1px;
        margin-right: -1px;
        background-color: $whiteColor;
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
        transform: translateX(374%);
      }
    }
  }

  .cinemagraph {
    position: absolute;
    white-space: nowrap;
    animation: nudge 10s linear infinite;

    &:after {
      content: url("../assets/images/clouds1.png");
    }
  }

  @keyframes nudge {
    0% {
      transform: translateX(0)
    }
    100% {
      transform: translateX(-50%)
    }
  }
}

@media screen and (min-width: 767px) and (max-width: 1023px) {
  .container__view {
    width: 100%;
    height: 50vh;

    .content {
      width: 70%;
      display: flex;
      flex-direction: column;
      z-index: 1;

      h1 {
        font-size: 150px;
      }

      .btn2 {
        width: 200px;
        margin: 50px auto 0 auto;

        .button-title2 {
          margin-left: 18px;
          font-size: 16px;
        }

        .arrow2 {
          width: 43px;
          height: 43px;
        }
      }
    }

    .cinemagraph {
      position: absolute;
      white-space: nowrap;
      animation: nudge 10s linear infinite;
      overflow-x: hidden;

      &:after {
        content: url("../assets/images/clouds1.png");
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .container__view {
    width: 100%;
    height: 50vh;

    .content {
      margin-top: 50px;
      width: 70%;
      display: flex;
      flex-direction: column;
      z-index: 1;

      h1 {
        font-size: 100px;
      }

      .stroke {
        margin-top: 60px;
      }

      .btn2 {
        width: 150px;
        margin: 30px auto 0 auto;

        .button-title2 {
          margin-left: 11px;
          font-size: 13px;
        }

        .arrow2 {
          width: 35px;
          height: 35px;

          .arrowRightActive2 {
            width: 15px;
            height: 15px;
          }
        }

        &:hover .arrow2 {
          transform: translateX(400%);
        }
      }
    }

    .cinemagraph {
      position: absolute;
      white-space: nowrap;
      animation: nudge 10s linear infinite;
      overflow-x: hidden;

      &:after {
        content: url("../assets/images/clouds1.png");
      }
    }
  }
}

</style>