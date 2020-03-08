import Toast from "./Toast";
const obj = {};

/* 使用install函数默认第一个参数为Vue实例*/
obj.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  // console.log(toastConstructor);
  // 2.根据组件构造器，创建出来一个新的组件对象
  const toast = new toastConstructor();
  // console.log(toast);
  // 3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'));
  // console.log(toast.$el);
  // 4.添加到文档中
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
};

export default obj;
