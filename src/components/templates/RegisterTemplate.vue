<template>
  <div class="register-template">
    <div class="btn-voltar" @click="goToLogin">
      <img src="../../assets/icons/arrow-back.svg" alt="user icon" />
    </div>
    <div class="success-message" v-if="success">
      <span> Registro realizado com sucesso! </span>
    </div>
     <div class="success-message" v-if="error">
      <span> Erro ao realizar registro! </span>
    </div>
    <div class="content-register">
      <div class="title">
        <h1>Faça seu registro!</h1>
      </div>
      <div class="sub-title">
        <span> Insira as informações abaixo para se cadastrar! </span>
      </div>

      <div class="inputs">
        <form>
          <label>
            Nome
            <div>
              <input
                type="text"
                placeholder="Insira seu nome"
                v-model="user.name"
              />
              <img src="../../assets/icons/user.svg" alt="user icon" />
            </div>
          </label>
          <label>
            E-mail
            <div>
              <input
                type="email"
                placeholder="Insira seu e-mail"
                v-model="user.email"
              />
              <img src="../../assets/icons/email.svg" alt="user icon" />
            </div>
          </label>
          <label>
            Senha
            <div>
              <input
                type="password"
                placeholder="Insira sua senha"
                ref="passwordInput"
                v-model="user.password"
              />
              <img
                v-if="showPassword"
                @click="showPdw"
                src="../../assets/icons/eye-see.svg"
                alt="eye to seen"
                class="img-pdw"
              />
              <img
                @click="showPdw"
                v-if="!showPassword"
                src="../../assets/icons/eye-off.svg"
                alt="eye off"
                class="img-pdw"
              />
            </div>
          </label>

          <button class="btn-login" @click.prevent="register">
            <span v-if="!loading">Registrar</span>
            <Spinner v-if="loading" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useLoginStore } from "../../stores/login";
import Spinner from "../atoms/SpinnerLoading.vue";
export default {
  components: {
    Spinner,
  },
  setup() {
    const showPassword = ref(false);
    const passwordInput = ref(null);
    const router = useRouter();
    const user = ref({});
    const loginStore = useLoginStore();
    const success = ref(false);
    const loading = ref(false)
    const error = ref(false)

    const showPdw = () => {
      if (showPassword.value == true) {
        showPassword.value = false;
        passwordInput.value.type = "password";
      } else {
        showPassword.value = true;
        passwordInput.value.type = "text";
      }
    };
    const goToLogin = () => {
      router.push("/");
    };
    const register = async () => {
      loading.value = true
      const response = await loginStore.register(user.value);
      console.log(response, 'resposta no template')
      // tem que verificar porque ele ta redirecionando, mesmo estanto errado

      if (response == true) {
        loading.value = false
        success.value = true;
        await sleep(2500);
        success.value = false;
        router.push("/");
      }else{
        loading.value = false
        error.value = true
        await sleep(3500)
        error.value = false
      }
      
    };

    const sleep = (m) => new Promise((r) => setTimeout(r, m));

    return {
      showPassword,
      showPdw,
      passwordInput,
      goToLogin,
      user,
      register,
      success,
      loading,
      error
    };
  },
};
</script>

<style lang="scss" scoped>
.register-template {
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .btn-voltar {
    position: absolute;
    right: 20px;
    top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .success-message {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0.7rem;
    background: rgb(65, 192, 65);
    color: white;
    text-align: center;

    span {
      font-weight: 300;
      font-size: 0.95em;
    }
  }
  .content-register {
    width: 70%;

    .title {
      h1 {
        font-weight: 500;
      }
    }
    .sub-title {
      span {
        font-size: 0.8em;
        color: gray;
      }
    }

    .inputs {
      margin: 2rem 0;
      form {
        label {
          display: flex;
          flex-direction: column;
          font-size: 0.9em;
          font-weight: 500;
          div {
            height: 45px;
            margin: 0.5rem 0;
            position: relative;

            input {
              width: 100%;
              height: 100%;
              border-radius: 10px;
              padding: 0 0.8rem;
              border: 1px solid grey;

              &:focus {
                outline: rgb(102, 102, 102);
              }
            }
            .img-pdw {
              cursor: pointer;
            }
            img {
              position: absolute;
              right: 10px;
              top: 8px;
            }
          }
        }
        .btn-login {
          margin: 0.8rem 0 0 0;
          width: 100%;
          padding: 0.8rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          background: #7f56da;
          color: white;
          font-weight: 500;
          transition: 0.2s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            background: #a27eee;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 780px) {
  .title {
    text-align: center;
  }
  .sub-title {
    text-align: center;
  }
  .content-register {
    width: 100% !important;
  }
}
</style>