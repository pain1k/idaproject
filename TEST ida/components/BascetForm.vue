<template>
    <div>
        <div class="seccess" :class="{active:this.seccess}">
            <img class="seccess__img" loading="lazy" src="img/ok.png">
            <div class="seccess__title">Заявка успешно отправлена</div>
            <div class="seccess__desc">Вскоре наш менеджер свяжется с Вами</div>
        </div>
<form v-if="this.$store.state.bCount > 0" class="bascet__wrap__form" @submit.prevent="onSubmit">
    <div class="bascet__wrap__desc">Оформить заказ</div>
    <input
      type="text"
      v-model="userName"
      class="bascet__input"
      id="input__name"
      placeholder="Ваше имя"
      required
    />
    <input
      type="text"
      v-model="phone"
      class="bascet__input"
      @blur="inputMask"
      @input="inputMask"
      @focus="inputMask"
      id="input__name"
      placeholder="Телефон"
      required
    />
    <input
      type="text"
      v-model="adress"
      class="bascet__input"
      id="input__name"
      placeholder="Адрес"
      required
    />
    <button type="submit" class="bascet__submit">Отправить</button>
    <!-- <div class="basket__validete__error">
      Все поля обязательные.После удачной отправки формы содержимое корзины
      очищается
    </div> -->
  </form>
    </div>
  
</template>

<script>
import { mask } from "~/plugins/phone-mask";
export default {

    data(){
        return {
            userName: null,
            phone: null, 
            adress: null,
            seccess: false
        }
    },

  methods: {
    inputMask(e) {
      let input = e.target;

      input.addEventListener("input", mask, false);

      input.addEventListener("focus", mask, false);

      input.addEventListener("blur", mask, false);
    },

    onSubmit(){
        console.log(
        `Имя ${this.userName}`,
        `Phone ${this.phone}`,
        `Adress ${this.adress}`,
        `Кол-во товаров ${this.$store.state.bCount}`,
        `Товары ${JSON.stringify(this.$store.state.bItems)}`,
        );

        this.$store.commit('bClear');
        this.userName = ``
        this.phone = ``
        this.adress = ``

        this.seccess = !this.seccess


    }
  },
};
</script>



<style>
.bascet__wrap__form {
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
}

.bascet__input {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  background: #f8f8f8;
  border-radius: 8px;
  border: none;
  padding: 14px;
  margin-bottom: 16px;
}

.bascet__submit {
  height: 50px;
  width: 100%;
  /* black */

  background: #1f1f1f;
  border-radius: 8px;
  color: #fff;
}

.bascet__submit.active {
  background: #59606d;
  border-radius: 8px;
}

.basket__validete__error {
  margin-top: 27px;
  padding-left: 27px;
  position: relative;
}

.basket__validete__error::before {
  content: "!!";
  position: absolute;
  top: -4px;
  left: 0px;
  color: #eb5757;
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;
}


.seccess {
    position: absolute;
    top: 100px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: none;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
}

.seccess.active {
    display: flex;
}

.seccess__img {
    margin-bottom: 26px;
}

.seccess__title {
    font-family: PT Sans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 31px;
color: #000;
margin-bottom: 2px;
}
.seccess__desc {
    font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;
color: #59606D;
}



</style>