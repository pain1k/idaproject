
export const state = () => ({

  bItems: [],  
  bCount: 0,
  bOpen:false

});


export const mutations = {

  checkCache(state){
    if (localStorage.getItem("historyBasketCount") !== null && localStorage.getItem("historyBasketPositions") !== null) {
      state.bCount = JSON.parse(localStorage.getItem("historyBasketCount")) 
      state.bItems = JSON.parse(localStorage.getItem("historyBasketPositions"))
    }
  },

  bOpen(state) {
    state.bOpen = !state.bOpen;
    document.body.classList.toggle('overflow__hidden')
  },
  bPush(state, bItem) {
    state.bCount++;
    state.bItems.push(bItem)
    localStorage.setItem("historyBasketCount", state.bCount);
    localStorage.setItem("historyBasketPositions", JSON.stringify(state.bItems));
  },
  bDel(state, itemId) {
    state.bItems = state.bItems.filter(e=>itemId !== e.id)
    state.bCount = state.bItems.length
    localStorage.setItem("historyBasketCount", state.bCount);
    localStorage.setItem("historyBasketPositions", JSON.stringify(state.bItems));
  },

  bClear(state) {
    state.bItems = []
    state.bCount = 0
    localStorage.setItem("historyBasketCount", state.bCount);
    localStorage.setItem("historyBasketPositions", JSON.stringify(state.bItems));
  },



};

//ЗАПИСАТЬ
// localStorage.setItem("historyMessages", $(".chat__body").innerHTML);
//ПОЛУЧИТЬ
// localStorage.getItem("historyMessages");
//this.$store.commit('bascetCount', 10);
