contenidoEntrada = `
<section>
<h2>Ecuaciones de Primer Grado</h2>
    <p>Una ecuación de primer grado es una igualdad donde hay un número que no conocemos (la incógnita, normalmente x) y que no tiene exponente. Resolverla es encontrar qué valor tiene que tener x para que los dos lados sean iguales.</p>

    <h3>Procedimiento general</h3>
    <p>Como identificarlas: tienen una sola letra elevada a la 1, o sea, sin cuadrados ni cubos, por ejemplo 2x + 3 = 11.</p>
    <p>Procedimiento: yo lo veo como una balanza, lo que le hago a un lado también se lo tengo que hacer al otro para que siga equilibrada. Los pasos son:</p>
    <ul>
        <li>Primero quito los paréntesis, multiplicando el número de afuera por todo lo de adentro.</li>
        <li>Si hay fracciones, multiplico toda la ecuación por el número que sea múltiplo de todos los denominadores para quitarlas.</li>
        <li>Junto los términos parecidos de cada lado.</li>
        <li>Paso las x a un lado y los números al otro, y recuerdo que al pasarlos cambian de signo.</li>
        <li>Despejo la x dividiendo entre el número que la acompaña.</li>
        <li>Al final siempre compruebo: cambio la x por mi resultado en la ecuación original y veo si los dos lados dan lo mismo, igual que cuando pruebo un programa para ver si funciona.</li>
    </ul>

    <h3>Ecuaciones enteras</h3>
    <p>Como identificarlas: solo tienen números enteros y la x, sin fracciones ni paréntesis.</p>
    <p>Ejemplo: 7x - 4 = 3x + 20</p>
    <p>Como resolverlo: paso las x a la izquierda y los números a la derecha, 7x - 3x = 20 + 4, entonces 4x = 24 y x = 6.</p>
    <p>Comprobación: lado izquierdo 7(6) - 4 = 42 - 4 = 38. Lado derecho 3(6) + 20 = 18 + 20 = 38. Como 38 = 38, está bien.</p>

    <h3>Ecuaciones fraccionarias</h3>
    <p>Como identificarlas: la x o los números aparecen como fracciones, por ejemplo x/2.</p>
    <p>Ejemplo: 3x/5 + 1/2 = x/2 + 2</p>
    <p>Como resolverlo: el número que es múltiplo de 5 y de 2 es el 10, así que multiplico todo por 10 y queda 6x + 5 = 5x + 20. Paso las x a un lado y los números al otro, 6x - 5x = 20 - 5, y queda x = 15.</p>
    <p>Comprobación: lado izquierdo 3(15)/5 + 1/2 = 9 + 0.5 = 9.5. Lado derecho 15/2 + 2 = 7.5 + 2 = 9.5. Como 9.5 = 9.5, está bien.</p>

    <h3>Ecuaciones con signos de agrupación</h3>
    <p>Como identificarlas: tienen paréntesis con números multiplicando por fuera.</p>
    <p>Ejemplo: 3(2x - 1) - 2(x + 4) = 16 - (x - 3)</p>
    <p>Como resolverlo: primero quito los paréntesis y queda 6x - 3 - 2x - 8 = 16 - x + 3. Junto términos parecidos, 4x - 11 = 19 - x. Paso las x a un lado y los números al otro, 4x + x = 19 + 11, entonces 5x = 30 y x = 6.</p>
    <p>Comprobación: lado izquierdo 3(2(6) - 1) - 2(6 + 4) = 3(11) - 2(10) = 33 - 20 = 13. Lado derecho 16 - (6 - 3) = 16 - 3 = 13. Como 13 = 13, está bien.</p>

    <h3>Ecuaciones con literales</h3>
    <p>Como identificarlas: además de la x tienen otras letras como a, b o c que representan números que ya conocemos, y la respuesta queda con esas letras.</p>
    <p>Ejemplo: 4x + 3a = 2x + 9a</p>
    <p>Como resolverlo: trato a la a como si fuera un número. Paso las x a la izquierda y las a a la derecha, 4x - 2x = 9a - 3a, entonces 2x = 6a y al dividir entre 2 queda x = 3a.</p>
    <p>Comprobación: si a = 2, entonces x = 6. Lado izquierdo 4(6) + 3(2) = 24 + 6 = 30. Lado derecho 2(6) + 9(2) = 12 + 18 = 30. Como 30 = 30, está bien.</p>

    <h3>Problema de planteamiento</h3>
    <p>Problema: mi mamá me dio 200 pesos para la semana y todos los días gasto 25 pesos en el camión para ir a la escuela. Hoy me quedan 75 pesos. ¿Cuántos días han pasado?</p>
    <p>Paso 1, incógnita: x = los días que han pasado.</p>
    <p>Paso 2, traducción: empecé con 200 pesos, cada día se me van 25 (eso es 25x) y lo que me queda es 75.</p>
    <p>Paso 3, ecuación: 200 - 25x = 75</p>
    <p>Paso 4, solución: paso el 200 restando, -25x = 75 - 200, entonces -25x = -125. Divido entre -25 y queda x = 5. Han pasado 5 días.</p>
    <p>Paso 5, validación contra el enunciado: en 5 días gasté 25 x 5 = 125 pesos, y si a 200 le quito 125 me quedan 75 pesos, que es lo que dice el problema. Entonces sí está bien.</p>
</section>`;
