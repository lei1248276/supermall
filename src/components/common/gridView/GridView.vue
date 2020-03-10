<template>
  <div class="gridView" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GridView",
    props: {
      cols: {
        type: Number,
        default: 3
      },
      vMargin: {
        type: Number,
        default: 5
      },
      hMargin: {
        type: Number,
        default: 5
      },
      itemSpace: {
        type: Number,
        default: 5
      },
      lineSpace: {
        type: Number,
        default: 5
      },
    },
    updated() {
      this.$nextTick(() => {
        this.autoLayout();
      })
    },
    methods: {
      autoLayout() {
        // 1.获取格子元素和子元素
        let gridEl = this.$refs.gridView;
        let childEl = gridEl.children;

        // 2.设置grid的内边距
        gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`;

        // 3.设置子元素的宽度
        let itemWidth = (gridEl.clientWidth - this.hMargin * 2 - (this.cols - 1) * this.itemSpace) /
          this.cols;
        console.log(itemWidth);
        for (let i = 0; i < childEl.length; i++) {
          let item = childEl[i];
          item.style.width = itemWidth + 'px';
          item.style.marginRight = (i + 1) % this.cols !== 0 ? this.itemSpace + 'px' : '';
          item.style.marginTop = i >= this.cols ? this.lineSpace + 'px' : '';
        }
      }
    }
  }
</script>

<style scoped>
  .gridView{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
