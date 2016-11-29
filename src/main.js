import $ from 'jquery'

global.jQuery = $

import Vue from 'vue'
import App from './App'
import Title from './components/Title'
import VueResource from 'vue-resource'
import authentication from './app/authentication'
import AuthenticationPage from './components/authentication/AuthenticationPage'
import HomePage from './components/base/HomePage'
import PessoaListagemPage from './components/pessoas/PessoaListagemPage'
import PessoaFormPage from './components/pessoas/PessoaFormPage'
import Routes from './Routes'
import Axios from 'axios'

const axios = Axios.create({
	xsrfCookieName: 'csrftoken',
	xsrfHeaderName: 'X-CSRFToken'
})

Vue.prototype.$http = axios

authentication.recoverUserData()

new Vue({
  el: '#app',
  template: '<App></App>',
  components: { App, 'sd': Title },
  data () {
    return {
      'titulo': 'aff'
    }
  },
  router: Routes
})
