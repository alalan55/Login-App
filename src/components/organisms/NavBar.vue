<template>
  <header>
    <nav>
      <div class="logo">
        <span>Logo.</span>
      </div>
      <div class="btn-logout" @click="logout">
        <span> Logout </span>
      </div>
    </nav>
  </header>
</template>

<script>
import { useLoginStore } from "../../stores/login";
import {useRouter} from 'vue-router'
export default {
  setup() {
    const store = useLoginStore();
    const router = useRouter();

    const logout = () => {
      store.logout;
      router.push('/')
    };
    return { logout };
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 65px;
  padding: 0 1rem;
  backdrop-filter: blur(35px);
  color: white;

  nav {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;

    .logo {
      span {
        font-weight: 600;
        font-size: 1.2em;
      }
    }
    .btn-logout {
      cursor: pointer;
      span {
        font-size: 1.1em;
        font-weight: 300;
      }
    }
  }
}
</style>