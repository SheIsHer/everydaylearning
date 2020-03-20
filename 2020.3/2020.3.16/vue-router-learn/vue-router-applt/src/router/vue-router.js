class HistoryRoute{
  constructor(){
    this.current = null
  }
}
class VueRouter {
  constructor(options){
    this.mode = options.mode || 'hash';
    this.routes = options.routes || [];
    // 传递的这个路由表是一个数组 {'/home':Home, '/about':About}
    this.routesMap = this.createMap(this.routes);
    this.history = new HistoryRoute;
    this.init();  //开始初始化操作
  }
  init(){
    if(this.mode === 'hash'){ 
      // 先判断用户打开时有没有hash 没有就跳转到#/
      location.hash ? '' : location.hash = '/';
      window.addEventListener('load', ()=>{
        this.history.current = location.hash.slice(1);
      }) 
      window.addEventListener('hashchange', ()=>{
        this.history.current = location.hash.slice(1);
      })
    }else{
      location.pathname?'':location.pathname = '/'
      window.addEventListener('load', ()=>{
        this.history.current = location.pathname;
      }) 
      window.addEventListener('popstate', ()=>{
        this.history.current = location.pathname;
      })
    }
  }
  go(){
  }
  back(){
  }
  push(){

  }
  createMap(routes) {
    return routes.reduce((memo, current) => {
      memo[current.path] = current.component;
      return memo;
    }, {})
  }
}
VueRouter.install = function(Vue, opts){
  // 在所有组件中获取同一个路由的实例
  Vue.mixin({
    beforeCreate(){ // 混合方法
      if(this.$options && this.$options.router){
        // 定位根组件
        this._root = this; //把当前实例挂载在_root上
        this._router = this.$options.router;// 把router实例挂载在_router上
      } else {
        // vue组件的渲染顺序 父 -> 子 -> 孙子
        this._root = this.$parent._root; // 如果想获取唯一的路由实例
        this._root._rooter
      }
      Object.defineProperty(this, '$router',{
        get(){
          return this._root._rooter
        }
      });
      Object.defineProperty(this, '$route',{
        get() {
          return {
            current: this._root._router.history.current
          }
        }
      })
    }
  })
  Vue.component('router-link',{
    render(h){
      return h('a', {}, '首页')
    }
  });
  Vue.component('router-view',{
    render(h){
      return <h1>首页</h1>
    }
  })
}
// 使用vue.use 就会调用install方法
export default VueRouter;