import Backbone from 'backbone'

const FormView = Backbone.View.extend({
	el: '#app-container',
   events : {
		//from input/button element with type='submit'
		'submit #new-product-record' : 'handleProductSubmit'
		// «event-type» «dom-selector» : «event-method	»
	},
	
	handleProductSubmit: function(evt){
		evt.preventDefault();
		let formEl = evt.target
		// console.log(formEl.inputName)
			// console.log(formEl.inputPrice)
		// console.log(formEl.inputDescription)
		// console.log(formEl.inputImageLink)
		let formData = {
			name: formEl.inputName.value,
			price: formEl.inputPrice.value,
			description: formEl.inputDescription.value,
			imageLink: formEl.inputImageLink.value
		}
		console.log(formData)
	},
	
	_templateHtml: function(){
		return `
			<div class="container">
				<h2 class="bg-info text-center">CREATE A NEW ITEM</h2>
				<hr/>
				<form class='row' id="new-product-record">
				  <div class="col-sm-offset-3 col-sm-6 form-group">
				    <label name="">Name</label>
				    <input name="inputName" type="text" class="form-control" placeholder="Name">
				  </div>
				  <div class="col-sm-offset-3 col-sm-6 form-group">
				    <label name="">Price</label>
				    <input name="inputPrice" type="text" class="form-control"  placeholder="Price">
				  </div>
				  <div class="col-sm-offset-3 col-sm-6 form-group">
 				    <label name="">Description</label>
 				    <input name="inputDescription" type="text" class="form-control" placeholder="Description">
 				  </div>
				  <div class="col-sm-offset-3 col-sm-6 form-group">
 				    <label name="">Image Link</label>
 				    <input name="inputImageLink" type="text" class="form-control"  placeholder="Password">
					 <div class="img-preview">
					 </div>
 				  </div>
				  <div class="col-sm-offset-3 col-sm-6 text-right">
					  <button type="submit" class="btn btn-success">Submit</button>
				  </div>
			  </form>
			</div>
		`
	},

	render: function(data){
		this.el.innerHTML = this._templateHtml(data)
	}
})

export default FormView