<template>
  <div class="home-template">
    <Navbar class="nav-bar" />
    <div class="msgs">
      <span class="principal">Olá Seja bem-vindo</span>
      <span class="secundario">{{ email }}</span>
    </div>
    <div class="btn-todos" @click="goToTodo">
      <span>Ir para tarefas</span>
    </div>
  </div>
</template>

<script>
import { useLoginStore } from "../../stores/login";
import { computed } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../organisms/NavBar.vue";
export default {
  components: {
    Navbar,
  },
  setup() {
    const router = useRouter();
    const store = useLoginStore();
    const email = computed(() => store.$user.email);
    const goToTodo = () => router.push("/todos");
    return {
      store,
      email,
      goToTodo,
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
  flex-direction: column;
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

  .btn-todos {
    margin: 1.5rem 0 0 0;
    padding: 0.5rem 0.9rem;
    background: #1b0a20;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    span {
      font-weight: 500;
    }

    &:hover {
      background: #551f64;
    }
  }
}
</style>