<template>
  <div class="bascet" :class="{active:this.$store.state.bOpen}">
    <div class="bascet__overlay" @click="$store.commit('bOpen')"></div>
    <div class="bascet__wrap">

      <div class="bascet__wrap__header">
        <div class="bascet__wrap__header__title">Корзина</div>
        <div class="bascet__wrap__header__close" @click="$store.commit('bOpen')">+</div>
      </div>

      <div class="bascet__wrap__body"  v-if="$store.state.bCount > 0">
          <div class="bascet__wrap__desc">Товары в корзине</div>
        <BascetCart v-for="item of $store.state.bItems" :key="item.id" :item="item"/>
      </div> 

       <div class="bascet__wrap__body"  v-else>
          <div class="bascet__empty">Пока что вы ничего не добавилив корзину.</div>
          <button class="bascet__submit" @click="$store.commit('bOpen')">Перейти к выбору</button>
        
      </div>

        <BascetForm/>
      
    </div>

  </div>
</template>




<style>
.bascet {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: none;
  
}
.bascet.active {
  display: block;
}

.bascet__overlay {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  opacity: 0.8;
}

.bascet__wrap {
  max-width: 460px;
  width: 90%;
  height: 100%;
  position: fixed;
  right: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
  padding: 48px;
  overflow-y: auto;
}

.bascet__wrap__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.bascet__wrap__header__title {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;
}

.bascet__wrap__header__close {
  font-size: 40px;
  line-height: 40px;
  width: 40px;
  text-align: center;
  transform: rotate(45deg);
  cursor: pointer;
}

.bascet__wrap__desc {
  margin-top: 24px;
  margin-bottom: 16px;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  color: #59606d;
}

.bascet__wrap__body {
    margin-top: 16px;
}

.bascet__empty {
font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 28px;
color: #000000;
margin-bottom: 24px;
}

.bascet__submit {
height: 50px;
width: 100%;
/* black */

background: #1F1F1F;
border-radius: 8px;
color: #fff;
}


@media (max-width:500px) {
  .bascet__wrap {
    padding: 10px;
    width: 95%;
    left: 0;
    right: 0;
    margin: auto;
  }
  .bascet__cart__info {
    margin-left: 5px;
  }
}
</style>