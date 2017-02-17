import Backbone from 'backbone'

const LandingView = Backbone.View.extend({
	el: '#app-container', 
   //el: css selector in backbone pointing to the DOM el 
	
	events : {
		"click .show-listings" : "handleShowListingsBtn",
		"click .more-cats-btn" : "handleMoreCatsBtn"

	},
	
	handleShowListingsBtn: function(){
		window.location.hash = 'products'
	},
	
	
	handleMoreCatsBtn: function(){
		 alert('COME BACK LATER THERE ARE NO CATS')
	},
	

	_templateHtml: function(data){
		return `
			<div class="jumbotron pawnstar">
			  <div class="container">
			    <h1>Billy's Pawnshop</h1>
				 <p>everything's for sale</p>
			    <button class='btn btn-primary btn-lg show-listings'>Recent Listings</button>
			  </div>
			</div>
			<div class="shop-by-cat">
				<div class="container text-center">
					<h2>Shop by Category</h2>
					<div class="row">
						<div class="col-sm-3 category">
							<img src="./images/icon-computer.png"/>
							<h5>Jewelry</h5>
						</div>
						<div class="col-sm-3 category">
							<img src="./images/icon-jewelry.png"/>
							<h5>Electronics</h5>

						</div>
						<div class="col-sm-3 category">
							<img src="./images/icon-maintenance.png"/>
							<h5>Tools</h5>
						</div>
						<div class="col-sm-3 category">
							<img src="./images/icon-robbery.png"/>
							<h5>Sundry & Stolen</h5>
						</div>
					</div>
				</div>
				<div class="more-cats text-center">
					<button class='btn btn-default btn-md more-cats-btn'>More Categories</button>
				</div>
			</div>
		`
	},

	render: function(data){
		//this.el === document.querySelector("#app-container")
		this.el.innerHTML = this._templateHtml(data)
	}
})

export default LandingView