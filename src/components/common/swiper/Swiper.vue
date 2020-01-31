<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="indicator">
      <div class="indi-item" v-for="(item,index) in slideCount" :key="index"
           :class="{active: index === currentIndex-1}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    props: {
      interval: {
        type: Number,
        default: 3000
      },
      animDuration: {
        type: Number,
        default: 300
      },
      moveRatio: {
        type: Number,
        default: 0.25
      }
    },
    data() {
      return {
        slideCount: 0,// 元素的个数
        totalWidth: 0, // swiper的宽度
        swiperStyle: {},// swiper的样式
        currentIndex: 1, // 当前的index
        scrolling: false, // 是否正在滚动
      }
    },
    mounted() {
      setTimeout(() => {
        /* 1.执行 Dom 操作*/
        this.handleDom();
        /* 2.执行定时器*/
        this.startTimer();
      },100);
    },
    methods: {
      /*
      获取dom元素
      */
      handleDom: function() {
        let swiperEl = document.querySelector(".swiper");
        let slidesEls = swiperEl.getElementsByClassName("slide");

        // 保存元素的个数
        this.slideCount = slidesEls.length;

        // 3.如果大于1个, 那么在前后分别添加一个slide
        if (this.slideCount > 1) {
          let cloneFirst = slidesEls[0].cloneNode(true);
          let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
          swiperEl.insertBefore(cloneLast, slidesEls[0]);
          swiperEl.appendChild(cloneFirst);
          // 保存swiper宽度
          this.totalWidth = swiperEl.offsetWidth;
          // 保存swiper的样式
          this.swiperStyle = swiperEl.style;
        }

        // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
        this.setTransform(-this.totalWidth);
      },
      /*
      设置定时器
      */
      startTimer: function () {
        this.playTimer = window.setInterval(() => {
          this.currentIndex++;
          this.scrollContent(-this.currentIndex * this.totalWidth);
        }, this.interval)
      },
      stopTimer: function () {
        window.clearInterval(this.playTimer);
      },
      /**
       * 滚动到正确的位置
       */
      scrollContent: function (currentPosition) {
        // 1.设置正在滚动
        this.scrolling = true;

        // 2.开始滚动动画
        this.swiperStyle.transition ='transform '+ this.animDuration + 'ms';
        this.setTransform(currentPosition);

        // 3.判断滚动到的位置
        this.checkPosition();

        // 4.滚动完成
        this.scrolling = false
      },
      /**
       * 校验正确的位置
       */
      checkPosition: function () {
        window.setTimeout(() => {
          // 1.校验正确的位置
          this.swiperStyle.transition = '0ms';
          if (this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.totalWidth);
          } else if (this.currentIndex <= 0){
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.totalWidth);
          }

          // 2.结束移动后的回调
          // this.$emit('transitionEnd', this.currentIndex-1);
        }, this.animDuration)
      },
      /**
       * 设置滚动的位置
       */
      setTransform: function (position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      },
      /*
      添加触摸拖动事件
      */
      // 触摸开始
      touchStart(e) {
        // 1.关闭定时器
        this.stopTimer();

        // 2.保存开始滚动的位置
        this.startX = e.touches[0].pageX;
      },

      // 触摸拖动
      touchMove(e) {
        // 1.计算出用户拖动的距离
        this.currentX = e.touches[0].pageX;
        this.distance = this.currentX - this.startX;
        let currentPosition = -this.currentIndex * this.totalWidth;
        let moveDistance = this.distance + currentPosition;

        // 2.设置当前的位置
        this.setTransform(moveDistance);
      },

      // 触摸拖动结束
      touchEnd() {
        // 1.获取移动的距离
        let currentMove = Math.abs(this.distance);

        // 2.判断最终的距离
        if (this.distance === 0){
          return;
        } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio){
          this.currentIndex--;
        } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio){
          this.currentIndex++;
        }
        console.log(this.currentIndex);
        // 3.移动到正确的位置
        this.scrollContent(-this.currentIndex * this.totalWidth);

        // 4.移动完成后重新开启定时器
        this.startTimer();
      }
    }
  }
</script>

<style scoped>
  #hy-swiper{
    overflow: hidden;
    position: relative;
  }
  .swiper{
    display: flex;
  }
  .indicator{
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 8px;
    justify-content: center;
  }
  .indi-item{
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }
  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }
</style>
