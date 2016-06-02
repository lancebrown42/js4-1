(function(){
	angular.module('myApp',[])
		.controller('buttonCtrl', function(){
			var buttonCtrl = this
			buttonCtrl.on = false
			buttonCtrl.list = false
		})
		.controller('textController',textController)

		function textController(){
			var txtCtrl = this
			var defaultColor = 'black'
			console.log('textController')
			txtCtrl.pinkify = function(event){
				// console.log(event)
				// console.log(event.target.style.color)
				// defaultColor = event.target.style.color
				event.target.style.color = 'pink'
				// console.log(defaultColor)
			}
			txtCtrl.unpink = function(event){
				// console.log('mouseleave')
				event.target.style.color = defaultColor
			}
			txtCtrl.confirm = function(event){
				// console.log('you clicked')
				if(window.confirm('ARE YOU SURE')){

				}
				else{
					event.preventDefault()
					event.target.remove()
				}
				// event.preventDefault()
			}
			txtCtrl.bangify = function(event){
				// console.log(event)
				event.target.innerText+='!'
			}
			txtCtrl.unbang = function(event){
				event.target.innerText = event.target.innerText.replace(/!/,'')
			}
			txtCtrl.modal = true
		}
})()