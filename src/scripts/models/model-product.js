import Backbone from 'backbone'

export const ProductModel = Backbone.Model.extend({})

export const ProductCollection = Backbone.Collection.extend({
	model: ProductModel,
	url : 'https://api.myjson.com/bins/uw379',
   parse: function(rawJsonRes){
		return rawJsonRes.data
	},
	initialize: function(){ /* no op */ }
})