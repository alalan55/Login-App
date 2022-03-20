<template>
  <div class="todo-template">
    <Navbar class="nav-bar" />
    <div class="content-todo">
      <teleport to="body">
        <Modal v-if="showModal" @close="showModalFunction" />
      </teleport>
      <div class="barra-novo-todo">
        <div class="btn-novo-todo" @click="showModalFunction">
          <span> + Adicionar novo Todo </span>
        </div>
      </div>
      <div class="lista"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Navbar from "../organisms/NavBar.vue";
import Modal from "../organisms/ModalComp.vue";
export default {
  components: {
    Navbar,
    Modal,
  },
  setup() {
    const showModal = ref(false);
    const showModalFunction = () => {
      showModal.value == true
        ? (showModal.value = false)
        : (showModal.value = true);
    };
    return { showModal, showModalFunction };
  },
};
</script>

<style lang="scss" scoped>
.todo-template {
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
  .content-todo {
    width: 85%;
    height: 75%;
    margin-top: 3.5rem;
    background: #1c1848;
    opacity: 98%;
    border-radius: 10px;
    padding: 0.5rem;
    color: white;

    .barra-novo-todo {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .btn-novo-todo {
        border-radius: 10px;
        padding: 0.5rem;
        background: white;
        transition: 0.2s ease-in-out;
        cursor: pointer;
        span {
          font-weight: 500;
          font-size: 0.85em;
          color: black;
        }

        &:hover {
          background: rgb(214, 214, 214);
        }
      }
    }
  }
}
</style>