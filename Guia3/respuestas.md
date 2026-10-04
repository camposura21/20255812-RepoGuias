Ejemplo 1

16a. Una sola fila, porque sin flex-wrap el valor por defecto es nowrap.
16b. Se encogen para caber todas en la fila.
16c. No, quedan muy angostas y el texto es difícil de leer.
17. Con flex-wrap, las tarjetas que no caben saltan a una nueva fila conservando su tamaño.
19. El gap separa las tarjetas entre sí. El relleno de .maravilla-contenido separa el texto del borde de cada tarjeta.
20a. En la última fila hay menos tarjetas, así que el espacio libre se reparte entre pocas y cada una crece más.
20b. flex-grow, el primer valor de flex: 1 1 300px.
20c. No, una tarjeta a todo el ancho se ve desbalanceada. Por eso se limitó a 360px y se centró la fila.
23a. Sí, con object-fit: cover mantienen la proporción aunque se recorten.
23b. Petra es vertical y pierde mucho contenido al recortarse a 220px de alto. Las horizontales pierden poco.
24. contain muestra la imagen completa con espacios vacíos. cover llena el área y recorta los bordes. Se conservó cover.
26. margin-top: auto empuja el enlace al final de la tarjeta, absorbiendo el espacio libre, y así los enlaces de una fila quedan alineados.
27a. A la derecha 50px y hacia abajo 30px.
27b. Desde su posición normal dentro del flujo.
27c. Sí, las demás no se mueven.
27d. Sí, puede superponerse. z-index: 2 la pone encima.
28a. Hacia la izquierda.
28b. right mide la distancia desde el borde derecho, así que un valor positivo lo empuja hacia la izquierda.
29a. Las demás se reacomodan y ocupan el lugar de Petra.
29b. No, al salir del flujo su espacio desaparece.
29c. Respecto del documento inicial, porque no tiene antecesor posicionado.
30a. Desde .maravillas.
30b. Posicionar no es lo mismo que desplazar. Con position: relative el contenedor no se mueve, pero se vuelve la referencia de sus descendientes absolutos.
31a. relative.
31b. absolute.
31c. Del antecesor posicionado más cercano. Si no hay ninguno, del documento inicial.
35a. No, sin top no hay punto de adhesión y el encabezado se desplaza con la página.
35b. Falta el valor de top.
36. El encabezado queda fijo arriba y las etiquetas pasan por debajo de él.
37. Las etiquetas tienen z-index: 1. El encabezado necesita un valor mayor para quedar encima.
38a. El encabezado conserva su espacio. El botón (fixed) sale del flujo.
38b. El botón.

Ejemplo 2

2. El input va antes del label, del aside y del main porque + y ~ solo afectan a los hermanos que vienen después.
5. Con left: -250px el menú queda fuera de la vista. Lo probé moviéndolo entre 0 y -250px antes de dejarlo fijo.
12. #checkMenu es un id, :checked el estado, ~ un hermano posterior, + el hermano inmediato, el espacio un descendiente (los iconos dentro del label) y > un hijo directo (el header dentro de .sidebar).
15. Con el checkbox sin marcar: el menú está en left: -250px, el botón de barras en left: 40px, el botón de cierre en left: -200px y el contenido sin margen.
16a. El label cambia el checkbox porque su for coincide con el id.
16b. Se activa :checked y las reglas que dependen de él.
16c. ~ mueve el menú a left: 0 y el contenido recibe margin-left: 250px.
16d. + selecciona el label y los descendientes intercambian los iconos.

Ejercicio complementario

Resultado 1: z-index aumenta de izquierda a derecha, así que el as queda al frente
Resultado 2: z-index disminuye de izquierda a derecha, así que el diez queda al frente 
