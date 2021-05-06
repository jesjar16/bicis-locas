function validateForm(){
	/* Escribe tú código aquí */
	console.log('Entró a validar el formulario');

	// Quita los span con mensajes de error previos
	$('.error-message').remove();

	// Comienzo recepción de variables del formulario
	let name= $('#name').val();
	let lastname= $('#lastname').val();
	let input_email= $('#input-email').val();
	let input_password= $('#input-password').val();
	let type= $('.form-group select').val();
	let input_social= $('#input-social').val();
	let checkbox= $('.checkbox label input').val();

	// Console log de valores recibidos
	/*console.log('Nombre', name);
	console.log('Apellido', lastname);
	console.log('Correo', input_email);
	console.log('Clave', input_password);
	console.log('Tipo', type);
	console.log('Red', input_social);
	console.log('Checkbox', checkbox);*/

	// Comienzo validaciones campos obligatorios
	if (name === ''){
		console.log('El nombre está vacío');
		$('#name').after("<span class='error-message'>Debe ingresar su nombre</span>");
	}

	if (lastname === ''){
		console.log('El apellido está vacío');
		$('#lastname').after("<span class='error-message'>Debe ingresar su apellido</span>");
	}

	if (input_email === ''){
		console.log('El correo está vacío');
		$('#input-email').after("<span class='error-message'>Debe ingresar su correo electrónico</span>");
	}

	if (input_password === ''){
		console.log('La clave está vacía');
		$('#input-password').after("<span class='error-message'>Debe ingresar su clave</span>");
	}

	if (type === '0'){
		console.log('No ha seleccionado tipo');
		$('.form-group select').after("<span class='error-message'>Debe seleccionar su tipo de bici</span>");
	}
		
	// Validación sólo letras de la A-Z para nombre y apellido
	const onlyLetters = /^[A-Za-z]+$/;

	if (!name.match(onlyLetters))
		$('#name').after("<span class='error-message'>Su nombre sólo puede contener letras</span>");

	if (!lastname.match(onlyLetters))
		$('#lastname').after("<span class='error-message'>Su nombre sólo puede contener letras</span>");
	

}