
// clase para crear canciones de encuestados
class Cancion {	
	constructor(titulo, artista){
		this.titulo = titulo;
		this.artista = artista;
	}
}

// clase donde se crean las personas encuestadas
class Encuestado{
	
	constructor(nombre, Cedula, fechaNacimiento, correo, ciudadResidencia, ciudadOrigen ){
		
		this.nombre = nombre;
		this.Cedula = Cedula;
		this.fechaNacimiento = fechaNacimiento;
		this.correo = correo;
		this.ciudadResidencia = ciudadResidencia;
		this.ciudadOrigen = ciudadOrigen;
		this.cancionesfavoritas = [];
	}
	
	agregarCancionFavorita(cancion){
		if (this.cancionesfavoritas.length < 3){
			this.cancionesfavoritas.push(cancion);
			console.log('cancion ', cancion.titulo, 'agregada a las favoritas de ', this.nombre);
		}else {
			console.log('No se puede agragar mas de 3 canciones favoritas.');
		}
	}
	
	mostrarCancionesFavoritas(){
		for(let i = 0; i < this.cancionesfavoritas.length; i++){
			console.log('Cancion Favorita No.',i+1);
			console.log('Titulo: ', this.cancionesfavoritas[i].titulo);
			console.log('Artista: ', this.cancionesfavoritas[i].artista);
		}
	}
	
	mostrarInfoEncuestado(){
		console.log('Informacion del encuestado:');
		console.log('nombre:', this.nombre);
		console.log('Cedula:', this.Cedula);
		console.log('Fecha de Nacimiento:', this.fechaNacimiento);
		console.log('Corre Electronico:', this.correo);
		console.log('Ciudad de Residencia:', this.ciudadResidencia);
		console.log('Ciudad de Origen:', this.ciudadOrigen);
		this.mostrarCancionesFavoritas()
	}
}



var encuestados = [];

function agregarEncuestado(){
	const nombre = prompt('Nombre:');
	const cedula = prompt('Cedula:');
	const fechaNacimiento = prompt('Fecha de Nacimiento:');
	const Correo = prompt('Corre Electronico:');
	const ciudadResidencia = prompt('Ciudad de Residencia:');
	const ciudadOrigen = prompt('Ciudad de Origen:');
	
	//variable en donde se almacena el objeto encuestado
	enc = new Encuestado(nombre, cedula, fechaNacimiento, Correo, ciudadResidencia, ciudadOrigen);

	//bloque de código para agregar canciones del encuestado
	const num_canciones = parseInt(prompt('Digite la cantidad de canciones favoritas (máximo 3): '));
	if (num_canciones>0 && num_canciones<=3){
		for (i=0;i<num_canciones;i++){
			const titulo = prompt('Digite titulo de cancion favorita: ');
			const artista = prompt('Digite artista de cancion favorita: ');
			c = new Cancion(titulo,artista);
			enc.agregarCancionFavorita(c);
		}
		
	}else {
		alert ('El número de canciones no es válido');
	}	
	
	encuestados.push(enc);
	alert('Persona agregada con éxito');
	
	agregarCancionesEncuestado();
}

function obtenerStringListaEncuestados(){
	let string_lista = "\n "
	for(let i = 0; i < this.encuestados.length; i++){
	string_lista = string_lista + i + ". " + encuestados[i].nombre + "\n "
	}
	return string_lista;
}

function mostrarInformacionEncuestado(){
	const posicion = parseInt(prompt('Ingrese la posición del encuestado a mostrar:' + obtenerStringListaEncuestados()));
	
	if (posicion >= 0 && posicion < this.encuestados.length){
		const e = encuestados[posicion];
		e.mostrarInfoEncuestado();
	} else {
		alert ('la posicion ingresada no es válida');
	}
}

function mostrarmenu(){
	let opcion;
	do {
		opcion = parseInt(prompt('Seleccione una opcion: \n 1. Agregar un encuestado \n 2. Mostrar información del encuestado\n  3. Salir'));
		
	switch (opcion){
		case 1:
			agregarEncuestado();			
			break;
		case 2:
			mostrarInformacionEncuestado();
			break;		
		case 3:
			alert('Hasta Luego.');
			break;
		default:
			alert('Opción no válida. Por favor, seleccione una opcion válida.');
	}	
		
	}while(opcion !== 3);
	
	
}
 
mostrarmenu();



		