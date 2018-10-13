<template>

  <div class="gallery" v-if="!isMainPage">
    <div class="top-bar">
      <div class="top-logo">Rustrade</div>
      <div class="profile">
        <!--<div v-if="signComplete === 'sign-in' @addUser="isMainPage = $event.mainPage, signComplete =$event.complite, $event.email, $event.uid" class="email">yandex@mail.ru</div>-->
        <div class="exit" @click ="exitt" >выход</div>
      </div>
    </div>
    <div class="gallery-search">
      <input v-model="search"  class="gallery-search__input" placeholder="Введите ИНН" type="text">
      <div class="">
        <button @click="popup"  class="add">Добавить предприятие</button>
      </div>
    </div>

    <div class="maxresult">
      <p class="number">Общее колличество номеров:{{  }}</p>
    </div>
    <nav class="menu" >
      <ul class="menu__list" >
        <li  class="menu__item" v-for="persone in table.data" >
          <p class="gallery--item__industry">{{ persone.contragent }}</p>
          <p class="gallery--item__industry">{{ persone.adress }}</p>
          <p class="gallery--item__town">{{ persone.telephone }}</p>
          <p class="gallery--item__town">{{ persone.inn }}</p>
          <p class="gallery--item__town">{{ persone.cash }}</p>
          <p class="gallery--item__town">{{ persone.check }}</p>
          <p class="gallery--item__town">{{ persone.datein }}</p>
          <p class="gallery--item__town">{{ persone.worker }}</p>
          <p class="idnumber"></p>
        </li>
      </ul>
      <form v-on:submit.prevent="addPersones" v-bind:class="{ active: isActive }" class="addcontagent" >
        <p>ВРЕМЕННО НЕ РАБОТАЕТ</p>
        <div @click="popup" class="x"></div>
        <input class="inpt" type="text" id="contraagent" name ="contragent" v-model="mastershets.contragent" placeholder="Введите предприятие">
        <input class="inpt" type="text" id="adresst" name ="aadress" v-model="mastershets.adress" placeholder="Введите адресс">
        <input class="inpt" type="text" id="telephone" name ="tel" v-model="mastershets.telephone" placeholder="Введите телефон">
        <input class="inpt" type="text" id="inn" name ="inn" v-model="mastershets.inn" placeholder="Введите ИНН">
        <input class="inpt" type="text" id="cash" name ="cash" v-model="mastershets.cash" placeholder="Введите последние получение чека">
        <input class="inpt" type="text" id="check" name ="check" v-model="mastershets.check" placeholder="Введите деньги">
        <input class="inpt" type="text" id="updowload" name ="upload" v-model="mastershets.updowload" placeholder="Введите отгрузку последнию">
        <input class="inpt" type="text" id="worker" name ="worker" v-model="mastershets.worker" placeholder="Введите кто ведет предприятие">
        <button  class="addbtn">Добавить</button>
      </form>
    </nav>






  </div>

</template>

<style lang="stylus" scoped>
  @import '../stylus/blocks/Basecards.styl'
  @import '../stylus/blocks/closebutton.styl'

</style>
<script>

  import axios from 'axios';
  let _self = this;
  export default {
    data: () => {
      return ({
        persones: [],
        table: {},
        isMainPage: false,
        signComplete: false,
        mastershets: [],
        errors: [],
        errorss: false,
        search: '',
        activeModal: '',
        userIdd: '',
        counter: 0,
        isActive: true,

      });
    },
    mounted() {
      let _self = this;
      axios.get(`https://sheetdb.io/api/v1/5b493eaf48d9f`, `https://rustrade777-21b3f.firebaseio.com/.json?auth=l3CAhSR99eegs0ODaTRqxXmTMhbDypSajnP8jL68`)
        .then(response => {
          _self.table = response;
          console.log(this.data);
        })

        .catch(e => {
          this.errors.push(e);

        });

    },
    methods: {
      popup() {
        this.isActive = !this.isActive

      },
      exitt() {

        this.$router.push('/');


      },
    },
    computed: {
      filteredBlogs() {
        return this.table.data.filter((persone) => {
          persone.push(this.search)
          }
        )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

