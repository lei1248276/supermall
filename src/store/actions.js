import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutation-types";

export default {
  // 异步和复杂的函数写在actions中
  addCart(context,payload) {
    // 1.查找之前数组中是否有该商品
    /* 使用find方法（find函数：用对象的属性查找数组里的对象是否存在，为真就返回这个对象）*/
    const oldProduct = context.state.cartList.find(item => item.iid === payload.iid);

    // 2.判断 oldProduct
    if (oldProduct){
      context.commit(ADD_COUNTER,oldProduct);
    } else {
      payload.count = 1;
      context.commit(ADD_TO_CART,payload);
    }
  }
}
