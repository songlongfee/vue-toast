<template>
  <div>
    <div class="header clearfix">
      <form action="#" class="search">
        <img id="search" src="./images/icon1.png" :class="showIcon?'':'hide'"/>
        <input :class="showIcon?'':'no-border'" type="text" maxlength="20" id="txtSearch" autocomplete="off" placeholder="请输入餐厅名称" v-model="keywords" @focus="focus" @blur="blur" />
      </form>
      <router-link class="personal" :to="{path: 'personal', query: {pageFlag: 'list'}}"><img src="./images/icon_personalCenter.png" /></router-link>
    </div>
    <div v-if="shopList.length" id="wrapper">
      <div id="scroll">
        <div class="buy" @click="showToast">推荐餐厅</div>
        <div v-for="item in shopList" :key="item.mcId" class="active">
          <router-link class="clearfix" :to="{path: 'merchant', query: {mcId: item.mcId, mchntNo: item.mchntNo, branId: item.branId}}">
            <div class="active-left">
              <img :src="item.mchntPic" @error="imgError($event)">
            </div>
            <div class="active-right">
              <div class="clearfix active-lt">
                <div>
                  <h3>{{item.mchtName}}</h3>
                  <p>人均：{{item.averageConsumes==0?'暂无人均价':item.averageConsumes+'/人'}}</p>
                </div>
                <span>
                  <i>{{(item.mchntDistant/1000).toFixed(2)}}</i>
                  &nbsp;km
                </span>
              </div>
              <p class="active-lb">
                <img src="./images/icon3.png" alt="">
                <em>{{item.supported?'正在等待...':'当前排队状况'}}</em>
                <span>{{item.supported?item.tables+'桌':'无需排队'}}</span>
              </p>
            </div>
          </router-link>
        </div>
        <div class="dropload-load">
          <div v-if="isLoading" class="dropload-noData">
            <span class="loading"></span>加载中...
          </div>
          <div v-else class="dropload-noData">{{loadMore ? '上拉加载更多' : '暂无更多商家'}}</div>
        </div>
      </div>
    </div>
    <!-- 努力加载中 -->
    <Loading v-if="loading" />
    <!-- 网络不给力 -->
    <div v-if="httpError" class="mesh">
      <img src="./images/icon7.png"/>
      <p>网络不给力</p>
    </div>
    <!-- 无搜索结果 -->
    <div v-if="shopList.length === 0" class="noshop">
      <img src="./images/icon8.png">
      <p>无相关餐厅</p>
    </div>
  </div>
</template>

<script>
import './css/merchantList.scss'
import Loading from '@/components/loading.vue'
// import utils from '@/utils'

export default {
  name: 'merchantList',
  data () {
    return {
      keywords: '',
      httpError: false,
      showIcon: true,
      isLoading: true, // 下拉加载
      loading: true, // 页面初始化loading
      latitude: sessionStorage.getItem('latitude'),
      longitude: sessionStorage.getItem('longitude'),
      mobileNo: ''
    }
  },
  created () {
    document.title = '商家列表'
  },
  mounted () {
    let data = {
      mobileNo: this.mobileNo,
      latitude: this.latitude,
      longitude: this.longitude,
      pageNum: this.pageNum,
      pageSize: this.pageSize,
      mchntName: this.keywords,
      searchType: '1'
    }
    this.$store.dispatch('getShopList', data)
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  computed: {
    shopList () {
      return this.$store.state.merchantList.shopList
    },
    loadMore () {
      return this.$store.state.merchantList.loadMore
    },
    pageNum () {
      return this.$store.state.merchantList.pageNum
    },
    pageSize () {
      return this.$store.state.merchantList.pageSize
    }
  },
  methods: {
    focus () {
      this.showIcon = false
    },
    blur () {
      this.showIcon = true
    },
    imgError (e) {
      // return utils.imgError(e.currentTarget, './images/icon_shop_default.png')
    },
    showToast () {
      this.$toast('toast成功', 3000)
    }
  },
  components: {
    Loading
  }
}
</script>

<style lang="scss" scoped>
.header .search {
  img {
    transition: margin-left linear 0.3s;
  }
  .hide {
    margin-left: -1.2rem;
  }
  .no-border {
    border-left: none;
  }
}
.dropload-noData {
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.noshop {
  padding-top: 4rem;
  text-align: center;
  width: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  img {
    width: 3.6rem;
  }
  p {
    margin-top: 0.6rem;
    color: #939393;
    text-align: center;
  }
}
</style>
