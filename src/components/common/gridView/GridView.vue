<template>
  <div class="gridView" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GridView",
    props: {
      _cols: {
        type: Number,
        default: 3
      },
      _vMargin: {
        type: Number,
        default: 5
      },
      _hMargin: {
        type: Number,
        default: 5
      },
      vPadding: {
        type: Number,
        default: 5
      },
      hPadding: {
        type: Number,
        default: 5
      },
      _itemSpace: {
        type: Number,
        default: 5
      },
      _lineSpace: {
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
        gridEl.style.padding = `${this.vPadding}px ${this.hPadding}px`;

        // 3.设置子元素的宽度
        let itemWidth = (gridEl.clientWidth - this._hMargin * 2 - (this._cols - 1) * this._itemSpace) /
          this._cols;
        // console.log(itemWidth);
        for (let i = 0; i < childEl.length; i++) {
          let item = childEl[i];
          item.style.width = itemWidth + 'px';
          item.style.marginRight = (i + 1) % this._cols !== 0 ? this._itemSpace + 'px' : '';
          item.style.marginTop = i >= this._cols ? this._lineSpace + 'px' : '';
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
