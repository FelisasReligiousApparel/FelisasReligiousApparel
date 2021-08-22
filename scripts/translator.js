var divs = [
	'title','title-description','nav-logo','home','about','card-bname','card-p','card-cname','cli1','cli2','card-sname','a1','a2'
];

var content = [
	['Welcome!','¡Bienvenidos!'],
	['Thank you so much for visiting our website take a look around.','Muchas gracias por visitar nuestro sitio web, eche un vistazo.'],
	['Felisa\'s Religious Apparel','Ropa religiosa de Felisa'],
	['Home','Casa'],
	['About','Acerca de'],
	['Felisa\'s Religious Apparel','Ropa religiosa de Felisa'],
	['This business is about some good quality and above all responsible to customers, above all respect and kindness to our customers.','Este negocio se trata de una buena calidad y sobre todo responsable con los clientes, sobre todo respeto y amabilidad con nuestros clientes.'],
	['Contact','Contacto'],
	['Phone: (725)-710-6914','Teléfono: (725) -710-6914'],
	['Email: gefelisaboutique@gmail.com','Correo electrónico: gefelisaboutique@gmail.com'],
	['Site Links','Enlaces del sitio'],
	['Home','Casa'],
	['about','Acerca de']
];

//Translates page content to spanish or english
var translator = {
	translate: {
		english: function(data) {
			document.getElementById('translate').innerText = 'English';
			for (var i = 0; i < data.length; i++) {
				document.getElementById(data[i]).innerText = content[i][1];
			}

			document.getElementById('end-card3').style.marginLeft = '200px';
			document.getElementById('end-card2').style.marginLeft = '200px';
		},
		spanish: function(data) {
			for (var i = 0; i < data.length; i++) {
				document.getElementById('translate').innerText = 'Español';
				document.getElementById(data[i]).innerText = content[i][0];
			}

			document.getElementById('end-card3').style.marginLeft = '290px';
			document.getElementById('end-card2').style.marginLeft = '290px';
		}
	}
};