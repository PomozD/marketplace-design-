<template>

  <section class="section-main">
    <div class="main-title">
      <div class="title-name">
        <h1 class="title">Каталог</h1>
      </div>
      <span class="stroke"/>
    </div>
  </section>

  <section class="section-catalog">

    <div class="catalog-header">
      <div class="container__breadCrumbs">
        <router-link class="nav__main" to="/">Главная</router-link>
        <div class="breadCrumbs">
          <img class="arrow__right" src="../assets/images/arrowright2.svg">
          <h1 class="breadCrumbs__current_page">Каталог</h1>
        </div>
      </div>

      <div class="search-div">
        <input class="search" type="text">
        <img class="search-icon" src="../assets/images/icon-search.svg" />

        <router-link to="/cart">
          <img class="cart-icon" src="../assets/images/cart.svg" />
        </router-link>
      </div>

      <div class="sorting">
        <h1>Сортировать</h1>
        <select class="sorting__list">
          <option>
            по убыванию цены
          </option>
          <option>
            по возрастанию цены
          </option>
          <option>
            популярности
          </option>
        </select>
      </div>
    </div>

    <div class="container__view">
      <div class="container__filtres" v-scrollanimationmovetext>
        <div class="filtres">
          <hr>
          <details close>
            <summary>
              <h1>Категория</h1>
              <div></div>
            </summary>
            <div class="container__filtre">
              <label>
                <input class="input__filtre" type="checkbox"/>
                Мужчины
              </label>
              <label>
                <input class="input__filtre" type="checkbox"/>
                Женщины
              </label>
              <label>
                <input class="input__filtre" type="checkbox"/>
                Дети
              </label>
              <label>
                <input class="input__filtre" type="checkbox"/>
                Аксессуары
              </label>
            </div>
          </details>
        </div>

        <div class="filtres">
          <hr>
          <details close>
            <summary>
              <h1>Размер</h1>
              <div></div>
            </summary>
            <div class="container__filtre">
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
          </details>
          <hr>
        </div>

        <div class="filtres">
          <details close>
            <summary>
              <h1>Тип</h1>
              <div></div>
            </summary>
            <div class="container__filtre">
              <label>
                <input class="input__filtre" type="checkbox"/>
                Куртки
              </label>
              <label>
                <input class="input__filtre" type="checkbox"/>
                Штаны
              </label>
              <label>
                <input class="input__filtre" type="checkbox"/>
                Кофты
              </label>
              <label>
                <input class="input__filtre" type="checkbox"/>
                Термобелье
              </label>
            </div>
          </details>
          <hr>
        </div>
      </div>

      <div class="container__catalog">
        <div class="catalog">
          <div class="catalog__cards">
            <div class="card" v-scrollanimationloadcontent v-for="item in items" :key="item">
              <v-card-item :name="item.name" :price="item.price" :mainPhoto="item.mainPhoto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import VCardItem from '../components/v-card-item.vue';

export default {
  name: "Catalog",

  data() {
    return {
      isMobile: false,

      items: [
        {name: 'Мужская куртка J21', price: '123', mainPhoto: 'src/assets/images/mans/Куртки/J21.png'},
        {name: 'Мужская куртка J21', price: '123', mainPhoto: 'src/assets/images/mans/Куртки/J21.png'},
        {name: 'Мужская куртка J21', price: '123', mainPhoto: 'src/assets/images/mans/Куртки/J21.png'},
        {name: 'Мужская куртка J21', price: '123', mainPhoto: 'src/assets/images/mans/Куртки/J21.png'},
        {name: 'Мужская куртка J21', price: '123', mainPhoto: 'src/assets/images/mans/Куртки/J21.png'},
      ]
    }
  },

  components: {
    VCardItem,
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

.section-catalog {
  margin-left: 55px;
  margin-right: 55px;

  .catalog-header {
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

    .search-div {
      display: flex;
      align-items: center;

      .search {
        width: 600px;
        height: 40px;
        margin-left: 150px;
        padding: 0 15px;
        border: 1px solid rgb(0, 0, 0, 20%);
        border-radius: 50px;
      }

      .search-icon {
        margin-left: -35px;
      }

      .cart-icon {
        margin-left: 15px;
        margin-top: 5px;
        width: 35px;
        height: 35px;
      }
    }

    .sorting {
      display: flex;
      align-items: center;

      h1 {
        font-family: $RobotoCondensed;
        font-size: 24px;
        color: $mainGreyColor;
      }

      .sorting__list {
        margin-left: 20px;
        padding: 0 5px 0 5px;
        height: 40px;
        color: #9b9b9b;
        border: 1px solid rgb(0, 0, 0, 20%);
        border-radius: 50px;
      }
    }
  }

  .container__view {
    display: flex;
    margin: 0 auto;

    .container__filtres {
      margin-top: 20px;

      .filtres {
        hr {
          width: 300px;
          margin-bottom: 0;
          border: 1px solid $mainGreyColor;
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
              font-family: $RobotoCondensed;
              color: $mainGreyColor;
            }

            div {
              background-color: $mainGreyColor;
              height: 25px;
              width: 25px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50px;
              margin-right: 20px;

              &:after {
                content: url(../assets/images/icon_plus.svg);
              }
            }
          }

          &[open] {
            summary {
              div {
                background-color: $mainGreyColor;
                height: 25px;
                width: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50px;
                margin-right: 20px;

                &:after {
                  content: url(../assets/images/icon_minus.svg);
                  margin-top: 4px;
                }
              }
            }
          }

          .container__filtre {
            display: flex;
            flex-direction: column;
            height: 100px;
            overflow: auto;

            label {
              font-family: $RobotoCondensed;
              font-size: 16px;
              color: $mainGreyColor;

              input {
                margin-right: 10px;
              }
            }
          }
        }

      }
    }

    .container__catalog {
      margin: 20px 50px 0 20px;
      width: 100%;

      .catalog__cards {
        display: flex;
        flex-wrap: wrap;
        gap: 50px 0px;

        .card {
          display: flex;
          width: 300px;

          button {
            background: none;
            border: none;
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

  .section-catalog {
    .catalog-header {
      margin: 0 0px 0 0px;

      .search-div {
        .search {
          width: 100px;
          height: 30px;
          margin-left: 100px;
        }

        .search-icon {
          margin-left: -30px;
          width: 20px;
          height: 20px;
        }

        .cart-icon {
          margin-left: 15px;
          width: 25px;
          height: 25px;
        }
      }

      .sorting {
        h1 {
          font-size: 16px;
        }

        .sorting__list {
          margin-left: 10px;
          padding: 0 0 0 5px;
          height: 30px;
          font-size: 10px;
        }
      }
    }

    .container__view {
      flex-direction: column;

      .container__filtres {
        display: flex;
        gap: 10px;

        .filtres {
          display: flex;
          hr {
            display: none;
          }
          details {

            summary {
              background-color: $whiteColor;
              border: 1px solid rgb(0, 0, 0, 20%);
              border-radius: 50px;
              padding: 5px 0 5px 20px;

              h1 {
                font-size: 14px;
                line-height: 0;
              }

              div {
                margin-left: 20px;
              }
            }

            &[open] {
              summary {
                div {
                  margin-left: 20px;
                }
              }
            }

            .container__filtre {
              height: 100%;
              margin-top: 10px;
            }
          }

        }
      }

      .container__catalog {
        margin: 20px 0 0 0;
        width: 100%;

        .catalog__cards {
          display: flex;
          flex-wrap: wrap;
          gap: 20px 20px;

          .card {
            width: 223px;
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

  .section-catalog {
    margin: 0 0 0 0;

    .catalog-header {
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

      .search-div {
        margin-top: 10px;

        .search {
          width: 50px;
          height: 30px;
          margin-left: 0;
        }

        .search-icon {
          margin-left: -28px;
          width: 20px;
          height: 20px;
        }

        .cart-icon {
          margin-left: 10px;
          width: 25px;
          height: 25px;
        }
      }

      .sorting {
        margin-top: -35px;
        margin-left: 140px;

        h1 {
          font-size: 13px;
        }

        .sorting__list {
          margin-left: 10px;
          padding: 0 0 0 5px;
          height: 30px;
          font-size: 10px;
        }
      }
    }

    .container__view {
      margin-top: 0;
      flex-direction: column;
      margin-left: 20px;

      .container__filtres {
        display: flex;
        gap: 10px;

        .filtres {
          display: flex;
          hr {
            display: none;
          }
          details {

            summary {
              background-color: $whiteColor;
              border: 1px solid rgb(0, 0, 0, 20%);
              border-radius: 50px;
              padding: 5px 0 5px 10px;

              h1 {
                font-size: 13px;
                margin-top: 12px;
                line-height: 0;
              }

              div {
                margin-left: 10px;
                height: 20px;
                width: 20px;
              }
            }

            &[open] {
              summary {
                background-color: $whiteColor;
                border: 1px solid rgb(0, 0, 0, 20%);
                border-radius: 50px;
                padding: 5px 0 5px 10px;

                div {
                  margin-left: 10px;
                  height: 20px;
                  width: 20px;
                }
              }
            }

            .container__filtre {
              height: 100%;
              margin-top: 10px;

              label {
                font-size: 13px;

                input {
                  margin-right: 10px;
                }
              }
            }
          }

        }
      }

      .container__catalog {
        margin: 20px 0 0 0;
        width: 100%;

        .catalog__cards {
          display: flex;
          flex-wrap: wrap;
          gap: 20px 20px;

          .card {
            width: 165px;
          }
        }
      }
    }
  }
}

</style>