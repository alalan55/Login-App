<template>
  <div class="modal">
    <div class="content">
      <div class="bar-btn-close">
        <div class="btn-close" @click="$emit('close')">
          <img src="../../assets/icons/close.svg" alt="" />
        </div>
      </div>

      <form>
        <label>
          Título
          <div>
            <input type="text" placeholder="Digite o título" />
          </div>
        </label>

        <label>
          Descrição da tarefa
          <div>
            <!-- <textarea name="" id="" cols="30" rows="10"> </textarea> -->
            <input type="text" placeholder="Descrição" />
          </div>
        </label>

        <div class="datas">
          <label>
            Data de início
            <div>
              <input type="date" />
            </div>
          </label>
          <label>
            Data de Fim
            <div>
              <input type="date" />
            </div>
          </label>
        </div>

        <label>
          Duração estimada (horas)
          <div>
            <input type="number" placeholder="Digite a duração estimada" />
          </div>
        </label>
      </form>

      <div class="btn-submit-form">
        <span>Cadastrar tarefas</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    background: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    width: 85%;
    height: 85%;
    position: relative;

    .bar-btn-close {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .btn-close {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }

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

      .datas {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;

        label {
          flex: 1 1 300px;
        }
      }
    }

    .btn-submit-form {
      position: absolute;
      bottom: 0.5rem;
      width: 80%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0.8rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: rgba(0, 132, 255, 0.95);
      color: white;
      transition: 0.2s ease-in-out;
      cursor: pointer;

      span {
        font-weight: 600;
        font-size: 0.9em;
      }

      &:hover {
        background: rgba(0, 132, 255, 0.75);
      }
    }
  }
}
</style>