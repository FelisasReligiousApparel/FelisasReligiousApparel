var divs = [
	'title','title-description','nav-logo',
	'home','about','card-bname','card-p','card-cname',
	'cli1','cli2','card-sname','a1','a2','background-logo',
	'mobile-about-title','mobile-about-p1','mobile-about-p2','mobile-about-p3','mcard-bname','mcard-cname','mcard-sname',
	'mcard-p','am1','am2','cli1m','cli2m','mhome','mabout'
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
	['about','Acerca de'],
	['Felisa\'s Religious Apparel','Ropa religiosa de Felisa'],
	['About Us','Sobre Nosotras'],
	['We\'re a small business that enjoy\'s making religious apparel. We like to make sure our customers are treated with utmost respect, kindness, and are 100% satisfied with our services.','Somos una pequeña empresa que disfruta haciendo ropa religiosa. Nos gusta asegurarnos de que nuestros clientes sean tratados con el mayor respeto, amabilidad y que estén 100% satisfechos con nuestros servicios.'],
	['We sell anything from bracelets, and rosaries, to custom made dresses for first communions. You can visit our <a href="https://www.facebook.com/dressesboutiqu2">Facebook</a>, if you\'re interested in purchasing any of our products.','Vendemos de todo, desde pulseras y rosarios, hasta vestidos hechos a medida para primeras comuniones. Puede visitar nuestro <a href="https://www.facebook.com/dressesboutiqu2"> Facebook </a>, si está interesado en comprar alguno de nuestros productos.'],
	['If you have any questions or concerns, please do not hesitate to <a href="">Contact Us</a>.','Si tiene alguna pregunta o inquietud, no dude en <a href=""> Contáctenos </a>.'],
	['Felisa\'s Religious Apparel','Ropa religiosa de Felisa'],
	['Contact','Contacto'],
	['Site Links','Enlaces del sitio'],
	['We like to make sure our customers are treated with utmost respect, kindness, and are 100% satisfied with our services.','Nos gusta asegurarnos de que nuestros clientes sean tratados con el mayor respeto, amabilidad y que estén 100% satisfechos con nuestros servicios.'],
	['Home','Casa'],
	['about','Acerca de'],
	['Phone: (725)-710-6914','Teléfono: (725) -710-6914'],
	['Email: gefelisaboutique@gmail.com','Correo electrónico: gefelisaboutique@gmail.com'],
	['Home','Casa'],
	['about','Acerca de']
];

//Translates page content to spanish or english
var translator = {
	translate: {
		english: function(data) {
			document.getElementById('translate').innerHTML = 'English';
			document.getElementById('am3').innerHTML = 'English';
			document.getElementById('mtranslate').innerHTML = 'English';
			for (var i = 0; i < data.length; i++) {
				document.getElementById(data[i]).innerHTML = content[i][1];
			}

			document.getElementById('end-card3').style.marginLeft = '200px';
			document.getElementById('end-card2').style.marginLeft = '200px';
		},
		spanish: function(data) {
			for (var i = 0; i < data.length; i++) {
				document.getElementById('translate').innerHTML = 'Español';
				document.getElementById('am3').innerHTML = 'Español';
				document.getElementById('mtranslate').innerHTML = 'Español';
				document.getElementById(data[i]).innerHTML = content[i][0];
			}

			document.getElementById('end-card3').style.marginLeft = '290px';
			document.getElementById('end-card2').style.marginLeft = '290px';
		}
	}
};