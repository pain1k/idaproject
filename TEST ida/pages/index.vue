<template>
<div>
  <Header/>
      <Bascet/>
    <Sidebar/>
     <div class="container">
    <div class="sort">
      <div class="sort__title">Сортировать по:</div>
      <div class="sort__selected" @click="sortActive = !sortActive">
        <div class="sort__selected__text" ref="selectedText">цене</div>
        <div class="sort__selected__icon"><svg width="5" height="3" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D"/>
</svg>
</div>
        </div>
      <div class="sort__list" :class="{ active: sortActive }">
        <div class="sort__list__item" @click="sortItems('price')">По цене</div>
        <div class="sort__list__item" @click="sortItems('popular')" >По популярности</div>
      </div>
    </div>
    <div class="cart__list">
       <Cart v-for="item in items" :key="item.id" :item="item" />
    </div>

  </div>
</div>
 
</template>


<script>
export default {

  data: function () {
    return {
      items: [],
      sortActive: false,
      bascetOpen: false,
      basketCount: 0,
    };
  },

  methods: {

    sortItems(e){

      if(e === 'price') {
        this.items = this.items.sort((a,b) => b.price - a.price) 
        this.$refs.selectedText.textContent = `цене`
      }

      if(e === 'popular') {
        this.items = this.items.sort((a,b) => b.rating - a.rating) 
        this.$refs.selectedText.textContent = `популярности`

      }

      this.sortActive = !this.sortActive

    }

  },
  mounted() {
    this.$axios
      .get(`https://frontend-test.idaproject.com/api/product`)
      .then((r) => {
        this.items = r.data
      });

      this.$store.commit('checkCache');

  },
};
</script>


<style>
.container {
  margin-left: 336px;
  margin-top: 163px;
}

.cart__list {
    display: flex;
  flex-wrap: wrap;
}
.sort {
  position: fixed;
  top: 108px;
  right: 88px;
  display: flex;
  z-index:99;
}


.sort__title {
  font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;
}

.sort__selected {
  position: relative;
}

.sort__selected__text{
  margin-left: 3px;
  color: #59606D;
  cursor: pointer;
}

.sort__selected__icon {
    position: absolute;
    top: -2px;
    right: -8px;
    width: 5px;
    height: 2.5px;
}

.sort__list {
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  left: 0px;
  right: 0px;
  width: 100%;
  border-radius: 8px;
  background: #FFFFFF;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
}

.sort__list.active {
  display: block;
}

.sort__list__item {
padding: 4px 0 4px 12px;
cursor: pointer;
color: #959DAD;
}

.sort__list__item:hover {
color: #1F1F1F;
background: #F8F8F8;
}


</style>
