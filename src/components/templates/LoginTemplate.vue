<template>
  <div class="login-template">
    <div class="content-login">
      <div class="title">
        <h1>Bem-vindo de volta!</h1>
      </div>
      <div class="sub-title">
        <span>
          Bem-vindo novamente! Por favor, insira as informações abaixo
        </span>
      </div>

      <div class="inputs">
        <form>
          <label>
            E-mail
            <div>
              <input type="email" placeholder="Insira seu e-mail" />
              <img src="../../assets/icons/user.svg" alt="user icon" />
            </div>
          </label>
          <label>
            Senha
            <div>
              <input
                type="password"
                placeholder="Insira sua senha"
                ref="passwordInput"
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

          <button class="btn-login">Entrar</button>

          <div class="register">
            <span>
              Ainda não tem uma conta? <span class="strong">Registre-se</span>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const showPassword = ref(false);
    const passwordInput = ref(null);

    const showPdw = () => {
      if (showPassword.value == true) {
        showPassword.value = false;
        passwordInput.value.type = "password";
      } else {
        showPassword.value = true;
        passwordInput.value.type = "text";
      }
    };
    return { showPassword, showPdw, passwordInput };
  },
};
</script>

<style lang="scss" scoped>
.login-template {
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .content-login {
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

          &:hover {
            background: #a27eee;
          }
        }
        .register {
          margin: 1rem 0 0 0;
          text-align: center;
          font-size: 0.8em;

          .strong {
            color: #7f56da;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 780px){
   .title{
       text-align: center;
   }
   .sub-title{
       text-align: center;
   }
}
</style>