		var alumnos = ["Juan", "Pedro", "Maria", "Diana"];
		alumnos.push("Luis");
		console.log(alumnos);
		var alum_text = alumnos.join(" - ");
		console.log('Alumnos:' + alum_text);
		
		var apellidos = new Array("Lopez", "Perez", "Rodriguez");
		var ape_text = apellidos.toString();
		console.log('Apellidos:' + ape_text);
		
		var edades = [40, 100, 1, 5, 25, 10];
		edades.pop();
		console.log(edades)

		var estacion = [];			
		estacion[0] = "invierno";
		estacion[1] = "primavera";
		estacion[2] = "otoño";
		
		console.log(estacion);
		estacion.shift();
		console.log(estacion);
		
		var tam_alum = alumnos.length;
		console.log('Largo alumnos:' + tam_alum);
		
		var frutas = ["Banano", "piña", "Pera", "Mango"];
		frutas[3] = "manzana";
		console.log('Frutas:' + frutas);
		
		//Ordenar elementos del array
		frutas.sort();
		console.log('Frutas ordenadas:' + frutas);