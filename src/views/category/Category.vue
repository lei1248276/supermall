<template>
  <div id="category">
    <scroll class="wrapper" :probeType="3" @scroll="a">
      <p>内容1</p>
      <p>内容2</p>
      <p>内容3</p>
      <p>内容4</p>
      <p>内容5</p>
      <p>内容6</p>
      <p>内容7</p>
      <p>内容8</p>
      <p>内容9</p>
      <p>内容10</p>
      <p>内容11</p>
      <p>内容12</p>
      <p>内容13</p>
      <p>内容14</p>
      <p>内容15</p>
      <p>内容16</p>
      <p>内容17</p>
      <p>内容18</p>
      <p>内容19</p>
      <p>内容20</p>
      <p>内容21</p>
      <p>内容22</p>
      <p>内容23</p>
      <p>内容24</p>
      <p>内容25</p>
      <p>内容26</p>
      <p>内容27</p>
      <p>内容28</p>
      <p>内容29</p>
      <p>内容30</p>
      <p>内容31</p>
      <p>内容32</p>
      <p>内容33</p>
      <p>内容34</p>
      <p>内容35</p>
      <p>内容36</p>
      <p>内容37</p>
      <p>内容38</p>
      <p>内容39</p>
      <p>内容40</p>
      <p>内容41</p>
      <p>内容42</p>
      <p>内容43</p>
      <p>内容44</p>
      <p>内容45</p>
      <p>内容46</p>
      <p>内容47</p>
      <p>内容48</p>
      <p>内容49</p>
      <p>内容50</p>
      <p>内容51</p>
      <p>内容52</p>
      <p>内容53</p>
      <p>内容54</p>
      <p>内容55</p>
      <p>内容56</p>
      <p>内容57</p>
      <p>内容58</p>
      <p>内容59</p>
      <p>内容60</p>
      <p>内容61</p>
      <p>内容62</p>
      <p>内容63</p>
      <p>内容64</p>
      <p>内容65</p>
      <p>内容66</p>
      <p>内容67</p>
      <p>内容68</p>
      <p>内容69</p>
      <p>内容70</p>
      <p>内容71</p>
      <p>内容72</p>
      <p>内容73</p>
      <p>内容74</p>
      <p>内容75</p>
      <p>内容76</p>
      <p>内容77</p>
      <p>内容78</p>
      <p>内容79</p>
      <p>内容80</p>
      <p>内容81</p>
      <p>内容82</p>
      <p>内容83</p>
      <p>内容84</p>
      <p>内容85</p>
      <p>内容86</p>
      <p>内容87</p>
      <p>内容88</p>
      <p>内容89</p>
      <p>内容90</p>
      <p>内容91</p>
      <p>内容92</p>
      <p>内容93</p>
      <p>内容94</p>
      <p>内容95</p>
      <p>内容96</p>
      <p>内容97</p>
      <p>内容98</p>
      <p>内容99</p>
      <p>内容100</p>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "category",
    components: {
      Scroll,
    },
    /*mounted() {
      this.scroll = new Scroll(".wrapper",{
        probeType: 2,
        pullUpLoad: true,
      });
      this.scroll.on('scroll',(positions) => {
        console.log(positions);
      });
      this.scroll.on("pullingUp",() => {
        console.log("上啦加载更多");
      })
    }*/
    methods: {
      a(position) {
        console.log(position);
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    height: 150px;
    background-color: pink;
  }
</style>
