<template>
  <router-link to="/catalog/item">
    <div class="container">
      <div class="container__image">
        <img class="item__image" :src="mainPhoto">
      </div>
      <div class="container__info">
        <div class="item__name">
          <h1 class="h1__item__name">{{name}}</h1>
        </div>
        <div class="item__price">
          <p class="p__item__price">{{price}} BYN</p>
        </div>
        <button class="button_primary">Добавить в корзину</button>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "v-card-item",

  props: [
    "name",
    "price",
    "mainPhoto",
  ]
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.container {
  margin-right: 15px;
  margin-left: 15px;
  background-color: $mainGreyColor;
  box-shadow: 10px 15px 20px 0 rgba(0, 0, 0, 0.1);

  .container__image {
    text-align: center;

    .item__image {
      width: 100%;
    }
  }

  .container__info {
    padding: 10%;

    .item__name, .item__price {
      display: flex;
      color: $whiteColor;
      font-family: $RobotoCondensed;

      .h1__item__name {
        font-size: 18px;
        font-weight: 500;
        line-height: 0;
      }

      .p__item__price {
        margin-top: 2px;
        font-size: 13px;
      }
    }

    .button_primary {
      font-family: $RobotoCondensed;
      font-size: 15px;
      font-weight: 500;
      color: $whiteColor;
      margin: 15px 0 0 0;
      padding: 15px 30px;
      outline: none;
      background-color: $mainGreyColor;
      border: 1.3px solid $whiteColor;
      border-radius: 50px;
      transition: .2s;

      &:hover {
        background-color: #3d3d3d;
      }
    }
  }
}

@media screen and (min-width: 767px) and (max-width: 1023px) {
  .container {
    margin-right: 0;
    margin-left: 0;

    .container__info {
      padding: 5%;

      .item__name, .item__price {
        .h1__item__name {
          font-size: 16px;
        }
      }

      .button_primary {
        font-size: 11px;
        margin: 10px 0 10px 0;
        padding: 10px 30px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .container {
    margin-right: 0;
    margin-left: 0;

    .container__image {
      text-align: center;

      .item__image {
        width: 100%;
      }
    }

    .container__info {
      padding: 5%;

      .item__name, .item__price {
        display: flex;
        color: $whiteColor;
        font-family: $RobotoCondensed;

        .h1__item__name {
          font-size: 12px;
          font-weight: 500;
          line-height: 1;
        }

        .p__item__price {
          margin-top: 2px;
          font-size: 12px;
        }
      }

      .button_primary {
        font-size: 12px;
        font-weight: 500;
        margin: 10px 0 10px 0;
        padding: 5px 30px;
      }
    }
  }
}

</style>