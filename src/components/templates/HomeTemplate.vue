<template>
  <div class="home-template">
    <Navbar class="nav-bar" />
    <div class="msgs">
      <span class="principal">Olá Seja bem-vindo</span>
      <span class="secundario">{{ email }}</span>
    </div>
  </div>
</template>

<script>
import { useLoginStore } from "../../stores/login";
import { computed } from "vue";
import Navbar from "../organisms/NavBar.vue";
export default {
  components: {
    Navbar,
  },
  setup() {
    const store = useLoginStore();
    const email = computed(() => store.$user.email);
    return {
      store,
      email,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-template {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(../../assets/img/background.svg) no-repeat;
  background-size: cover;
  position: relative;

  .nav-bar {
    position: absolute;
    top: 0;
  }

  .msgs {
    text-align: center;
    // color: rgb(34, 29, 29);
    color: white;
    span {
      display: block;
    }

    .principal {
      font-size: 1.5em;
      font-weight: 700;
    }
    .secundario {
      font-size: 0.95em;
    }
  }
}
</style>