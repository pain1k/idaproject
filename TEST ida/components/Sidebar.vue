<template>
  <div class="sidebar">
    <div class="sidebar__title">Каталог</div>
    <div class="sidebar__cat__list">

      <div class="sidebar__cat__item" @click="sortCat" :data-id="item.id" v-for="item in items" :key="item.id">{{item.name}}</div>

    </div>
    <div class="sidebar__menu" @click="open" ><img src="img/list.png"></div>
  </div>
</template>


<script>
export default {

  data: function () {
    return {
      items: [],
    };
  },

  methods: {

    open(){
      this.$el.classList.add('active')
    },


    sortCat(e){
      this.$el.querySelectorAll('.sidebar__cat__item').forEach(el=>el.classList.remove('active'))

      let elem = e.target

      elem.classList.add('active')

      this.$el.classList.remove('active')

   this.$axios.get(`https://frontend-test.idaproject.com/api/product`)
      .then((r) => {

        this.$parent.items = r.data.filter(e=> Number(elem.getAttribute('data-id')) === e.category)
       
      });
    }
  

  },
  mounted() {
    this.$axios
      .get(`https://frontend-test.idaproject.com/api/product-category`)
      .then((r) => {
        this.items = r.data
      });
  },
};
</script>


<style>

.sidebar__menu {
  display: none;
  position: absolute;
  bottom: 80px;
  right: -50px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 16px rgb(0 0 0 / 5%);
}

.sidebar__menu img {
  width: 30px;
  height: 30px;
} 


.sidebar {
  position: fixed;
  left: 0px;
  top: 66px;
  width: 248px;
  height: 100vh;
  padding-left: 88px;
  z-index: 9999;
  background-color: #fff;
}





.sidebar__title {
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 41px;
  color: #1f1f1f;
}

.sidebar__cat__list {
  margin-top: 24px;
}

.sidebar__cat__item {
  cursor: pointer;
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;

  /* grey-light */

  color: #959dad;
}

.sidebar__cat__item:hover {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;

  /* grey */

  color: #59606d;
}

.sidebar__cat__item.active {
  font-family: PT Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;
  text-decoration-line: underline;

  /* black */

  color: #1f1f1f;
}

@media (max-width:992px) {
    .sidebar {
      padding-top: 60px;
     padding-left: 20px;
     top: 0;
     left: -278px;
    }
    .sidebar.active {
    width: 100%;
    left: 0;
    }
    .sidebar__menu {
      display: block;
    }
    .container {
      margin-left: 0px;
    }
    .cart__list {
      justify-content: center;
    }
  }


</style>