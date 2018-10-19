<template>
  <div>
    <div class="login-wrap">
      <input id="tabInput" type="radio" name="tab" class="sign-in" checked><label for="tabInput" class="tab">Rustrade</label>
        <form  class="sign-in-form" @submit.prevent="enterUser">
          <div class="input-group">
            <label for="pass" class="label">Почта</label>
            <input v-model="user.email" type="email" class="input"  placeholder="Введите ваш email">
          </div>
          <div class="input-group">
            <label for="pass" class="label">Пароль</label>
            <input v-model="user.password" type="password" class="input" data-type="password"  placeholder="Введите ваш пароль">
          </div>
          <button v-if="!signComplete" @addUser="isMainPage = $event.mainPage, signComplete = $event.complete, email = $event.email, uid = $event.uid" type="submit">ВОЙТИ</button>
          <div class="hr"></div>
          <!-- <div class="footer-link">
            <a href="#forgot">Забыли пароль?</a>
          </div> -->
        </form>
<!--      <transition name="component-fade">
        <form class="sign-up-form" v-show="showSignUpForm" @submit.prevent="submit('reg')">
          <div class="input-group">
            <label for="pass" class="label">Почта</label>
            <input id="pass" type="email" class="input" v-model.lazy="model.email">
          </div>
          <div class="input-group">
            <label for="pass" class="label">Пароль</label>
            <input id="pass" type="password" class="input" data-type="password" v-model.lazy="model.password">
          </div>
          <div class="input-group">
            <label for="pass" class="label">Повторить пароль</label>
            <input id="pass" type="password" class="input" data-type="password" v-model.lazy="model.repassword">
          </div>
          <button type="submit">РЕГИСТРАЦИЯ</button>
          <div class="hr"></div>
          <div class="footer-link">
            <label for="tabInput">Уже зарегестрированы?</label>
          </div>
        </form>
      </transition>-->
    </div>
  </div>
</template>

<style lang="stylus" scoped>
   @import '../stylus/blocks/auth.styl'
</style>

<script>

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        errorCode: [],
        errorMessage: []

      }
    }
  },
  methods: {
    enterUser(){
      firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
        .then( response =>{
          const sett = {
            email: response.email,
            uid: response.uid,
            mainPage: true,
            complete: true,
          }
          this.$emit('addUser', sett);
          this.$router.push('/Pageuser');



        })


    },


  }
}
</script>

