import Backbone from 'backbone'

const NavView = Backbone.View.extend({
	el: '#app-container',
	
	_templateHtml: function(){
		return `
			<div class='container-fluid'>
				<div class='row'>
					<div class='col-sm-3'>
						HOME
					</div>
					<div class='col-sm-3'>
						INVENTORY ITEMS
					</div>
					<div class='col-sm-3'>
						ABOUT
					</div>
					<div class='col-sm-3'>
						LOCATIONS
					</div>

				</div>
			</div>
		`
	},

	render: function(data){
		this.el.innerHTML = this._templateHtml(data)
	}
})

export default NavView