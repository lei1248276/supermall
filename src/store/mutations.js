import {
  ADD_COUNTER,
  ADD_TO_CART,
  CHECK_ALL_CLICK
} from "./mutation-types";

export default {
  // mutations唯一的目的就是修改state中的状态
  // mutations中的每个方法尽可能完成的事件比较单一一点
  [ADD_COUNTER] (state,payload){
    // payload指向cartList中对象
    payload.count++;
  },
  [ADD_TO_CART] (state,payload){
    payload.checked = false;
    state.cartList.push(payload);
  },
  [CHECK_ALL_CLICK] (state,payload){
    if (payload){
      /* 全部选中点击情况下*/
      state.cartList.map((value) => {
        return value.checked = false;
      })
    }else {
      /* 没有全部选中点击情况下*/
      state.cartList.map((value) => {
        return value.checked = true;
      })
    }
  }
}
