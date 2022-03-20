<template>
  <div class="spinner">
    <div class="loading loading--full-height"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.spinner {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading {
    display: flex;
    justify-content: center;
  }

  .loading::after {
    content: "";
    width: 10px;
    height: 10px;
    border: 3px solid #fff;
    border-top-color: #a27eee;
    border-radius: 50%;
    animation: loading 1s ease infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
}
</style>