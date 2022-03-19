<template>
  <div class="auth-registe-layout">
    <div class="component">
      <router-view />
    </div>
    <div class="img">
      <div class="ball"></div>
      <div class="shapes">
        <div></div>
        <div class="glass"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.auth-registe-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 100%;
    height: 100%;
  }
  .img {
    position: relative;
    background: #f3f4f8;

    .shapes {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & > div {
        padding: 0.5rem;
        height: 50vh;
        width: 100%;
      }

      .glass{
          z-index: 99;
          backdrop-filter: blur(35px);
      }
    }
    .ball {
      position: absolute;
      width: 370px;
      height: 370px;
      background: #7f56da;
      border-radius: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>