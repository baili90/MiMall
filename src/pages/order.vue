<template>
  <div>
    order
    <order-header></order-header>
    <router-view></router-view> <!--路由嵌套-->
    <order-footer></order-footer>
  </div>
</template>
<script>
  import OrderHeader from '../components/OrderHeader'
  import OrderFooter from '../components/NavFooter'
  
  export default{
    components:{
      OrderHeader,
      OrderFooter,
    }
    
  }
</script>