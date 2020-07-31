import {debounce} from './utils/util'
import BackTop from 'components/content/backTop/BackTop'


export const itemListenerMixin = {
  data() {
    return {
      itemImgListener:null
    }
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh,100)
    this.itemImgListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener)
  },
 
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data() {
    return {
      isShowBackTop:false
    }
  },
  methods: {
    backClick() {
      // console.log(111)  调用Scroll里面的scrollTo方法
      this.$refs.scroll.scrollTo(0,0,500)
    },
  },
}