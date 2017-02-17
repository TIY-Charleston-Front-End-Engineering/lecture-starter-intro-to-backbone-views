import Backbone from 'backbone'

const SingleView = Backbone.View.extend({
	el: '#app-container',
	
	_templateHtml: function(data){
		return `
			<div class="container">
				<h2> Viewing Product ID: <mark>${data}</mark> </h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		`
	},

	render: function(data){
		console.log('wat')
		this.el.innerHTML = this._templateHtml(data)
	}
})

export default SingleView