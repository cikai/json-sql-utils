import Vue from 'vue'
import AppHeader from './components/Header'
import AppFooter from './components/Footer'

/* init header */
new Vue({
  el: '#app-header',
  template: '<AppHeader/>',
  components: { AppHeader }
})

/* init footer */
new Vue({
  el: '#app-footer',
  template: '<AppFooter/>',
  components: { AppFooter }
})

/* init app */
var app = new Vue({
  el: '#app',
  data: {
    message: 'Json格式化',
    code: '',
    result: ''
  },
  methods: {
  	jsonParser: function() {
      let code = JSON.parse(this.code);
  		// 缺少Json格式数据校验 2017/1/2
  		this.result = JSON.stringify(code, null, 4);
  	}
  }
})
