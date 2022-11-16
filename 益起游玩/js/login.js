var start = document.querySelector('.star')
			var login = document.querySelector('.login')
			var close = document.querySelector('.close')
			var zzc = document.querySelector('.zzc')
			start.addEventListener('click', function() {
				login.style.display = 'block';
				zzc.style.display = 'block';
				start.style.display = 'none';
			});
			close.addEventListener('click', function() {
				login.style.display = 'none';
				zzc.style.display = 'none';
				start.style.display = 'block';
			})

			var dl = document.querySelector('#dl');
			var form = document.querySelector('.form')

			dl.addEventListener('click', function() {

				var num = document.querySelector('#num').value
				var pas = document.querySelector('#pas').value
				console.log(num);
				console.log(pas);
				if (num == 66786747 && pas == 123456) {
					location.replace("page1.html")
				} else {
					alert('登录失败');
				}
			})