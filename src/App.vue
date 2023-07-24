<template>
  <v-cursor :targets="['img', 'a', 'button', 'logo', 'btn', 'marquee', 'container__marquees', 'input', 'textarea', 'button-title', 'arrow', 'select', 'filtres', 'details', 'container__filtres', 'btn2', 'button-title2', 'arrow2', 'name-service', 'arrow', 'arrowRightActive', 'arrowRightNotActive', 'div-button', 'btn div']"
            :circleColor="'#919191'"
            :circleColorHover="'#919191'"
            :dotColor="'#919191'"
            :dotColorHover="'#919191'"
            :hoverSize="1.6"/>

  <header>
    <v-menu/>
  </header>

  <main class="main-container">
    <router-view/>
  </main>

  <footer>
    <v-footer/>
  </footer>
</template>
<div id="custom-cursor"></div>
<script>
import vFooter from './components/v-footer.vue';
import vMenu from "./components/v-menu.vue";
import vCursor from "./components/v-cursor.vue";

export default {
  name: 'app',

  components: {
    vMenu,
    vFooter,
    vCursor
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

header {
  max-width: 1500px;
  margin: 0 auto;
}

.main-container {
  max-width: 1500px;
  margin: 0 auto;
}
</style>
