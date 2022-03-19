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
            </div>
          </label>
          <label>
            Senha
            <div>
              <input type="password" placeholder="Insira sua senha" />
            </div>
          </label>

          <button class="btn-login">Entrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login-template {
  border: 1px solid red;
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
      form{

          label {
            display: flex;
            flex-direction: column;
             font-size: .9em;
             font-weight: 500;
            div {
              height: 45px;
              margin: .5rem 0;
             
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
            }
          }
          .btn-login{
              margin: .8rem 0 0 0 ;
              width: 100%;
              padding: .8rem;
              border-radius: 10px;
              border: none;
              cursor: pointer;
              background: #7F56DA;
              color: white;
              font-weight: 500;
              transition: .2s ease-in-out;

              &:hover{
                   background: #a27eee;
              }

          }
      }
    }
  }
}
</style>