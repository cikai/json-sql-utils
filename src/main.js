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

/* json formatter */
var app = new Vue({
  el: '#json',
  data: {
    json_message: 'Json格式化',
    code: '',
    result: ''
  },
  methods: {
  	jsonFormatter: function() {
      let code = JSON.parse(this.code);
  		// 缺少Json格式数据校验 2017/1/2
  		this.result = JSON.stringify(code, null, 4);
  	},
    jsonCompress: function() {
      let result = JSON.parse(this.result);
      // 缺少Json格式数据校验 2017/1/4
      this.code = JSON.stringify(result);
    }
  }
})

/* decodeuri */
var app = new Vue({
  el: '#uri',
  data: {
    uri_message: 'URL解码',
    code: '',
    result: ''
  },
  methods: {
    decodeUri: function() {
      let code = this.code;
      this.result = decodeURI(code);
    },
    encodeUri: function() {
      let result = this.result;
      this.code = encodeURI(result);
    }
  }
})
