<template>
  <div>
      <header class="header">
          <div class="header__logo--box">
              <img src="../assets/img/logo-white.png" alt="logo" class="header__logo">
          </div>
          <div class="header__text--box">
            <h1 class="heading__primary">
            <span class="heading__primary--main">Outdoors </span>
            <span class="heading__primary--sub">is where life happens</span>
          </h1>
          <a href="#" class="btn btn__white btn__animated">discover our tours</a>
          </div>
      </header>
  </div>
</template>

<script>
import 'animate.css';

export default {
  name: 'HelloWorld',
  data() {
    return {
    }
  },
}
</script>


<style lang="scss" scoped>
@import '../scss/main.scss';

</style>
