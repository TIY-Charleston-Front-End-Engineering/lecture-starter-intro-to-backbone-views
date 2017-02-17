import Backbone from 'backbone'
import $ from 'jquery'

import NavView from './views/view-nav.js'
import LandingView from './views/view-landing.js'
import MultiView from './views/view-multi.js'
import SingleView from './views/view-single.js'
import FormView from './views/view-form.js'
import {ProductModel, ProductCollection} from './models/model-product.js'

import dummyData from './dev/dummy-data.js'

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},
	
	routes: {
		"products/:id/edit" : "showEditProduct",
		"products/new" : "showCreateProduct", 
		"products/:id" : "showSingleProduct",
 		"products" : "showManyProducts" ,
		"" : "showLanding",
		"*default" : "showNotFound"
	},

	showLanding: function(){
		//(Ex.1) create instance of view constructor
		let viewObj = new LandingView()
		viewObj.render()
	},

	showManyProducts: function(){
		//(Ex:2.1) new instance of collection
		let productCollInstance = new ProductCollection()
		productCollInstance.fetch().then(function(serverRes){
			let viewObj = new MultiView()
			//(Ex:2.2) pass instance of collection to render()
			viewObj.render(productCollInstance)
		})
		
	},

	showSingleProduct: function(idVal){
		console.log('?????/')
		let view = new SingleView()
		view.render(idVal)
	},

	showCreateProduct: function(){
		let view = new FormView()
		view.render()
	},

	showEditProduct: function(){
		let view = new FormView()
		view.render()
	},

	showNotFound: function(){}
})


let myApp = new AppRouter()