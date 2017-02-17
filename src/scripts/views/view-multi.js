import Backbone from 'backbone'

const MultiView = Backbone.View.extend({
	el: '#app-container',

	events: {
		"click .btn-show-single": 'handleShowSingleBtn'
	},

	handleShowSingleBtn: function(evt){
		// console.log(evt.target)
		// console.log(evt.target.dataset.id)
		let productId = evt.target.dataset.id
		window.location.hash = `products/${productId}`
	},
	
	_productThumbnailHtml: function(productObj){
			return `
				<div class="col-sm-6 col-md-4">
					 <div class="thumbnail">
						<img src="${productObj.get('imageLink')}" alt="...">
						<div class="caption">
						  <h3>${productObj.get('name')}</h3>
						  <p>${productObj.get('description')}</p>
						  <p>	
								<button data-id="${productObj.get('id')}" href="#" class="btn btn-warning btn-show-single" role="button">More Info</button>
							</p>
						</div>
					 </div>
			  </div>
			`
	},

	_templateHtml: function(coll){
		let listOfProducts = coll.models
		return `
			<div class="container">
				<h2>All Products</h2>
				<hr/>
				<div class="row">
					${	listOfProducts.map(this._productThumbnailHtml).join('') }

				</div>
			</div>
		`
	},

	render: function(data){
		this.el.innerHTML = this._templateHtml(data)
	}
})

export default MultiView