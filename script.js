    import checkComplete from "./components/checkComplete.js";
    import deleteIcon from "./components/deleteIcon.js";

    const btn = document.querySelector("[data-form-btn]");

    const createTask = (evento) => {
    evento.preventDefault();//Evita que la pagina se recargue
    const input = document.querySelector("[data-form-input]");
    const value = input.value; //Guardamos en una constante lo que llegue a value
    const list = document.querySelector('[data-list]'); // Se requiere agregar toda la tarea al elemento lista
    const task = document.createElement('li'); //Aquí se agrega lo que tiene value a la tarjeta, tiene una clase que se llamada card
    task.classList.add("card"); //Aqui agregamos la clase al elemento
    input.value = ''; //Hacemos que el value se quede vacío despupes de hacer click en el boton agregar

    //Backticks
    //Template strings con backticks para agregar el contenido del value a la pagina
    console.log(checkComplete());
    const taskContent = document.createElement('div');

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    //Aquí agregamos la funcion hijo del bote de basura ****************************************
    //taskContent.appendChild(deleteIcon());

    /*
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>` 
    task.innerHTML = content;
     */

    task.appendChild(taskContent);

    //3 .- Aqui agregamos al bote de basura al elemento padre ********************************************
    task.appendChild(deleteIcon());

    list.appendChild(task); //Con el appendChild agregamos el hijo (task) a la lista (list)
    //Con esto se agrega el HTML a la vista es decir al dar clic en agregar ya funciona agregar la tarea

    //console.log(content);
    };

    console.log(btn);

    //Necesitamos un listener en este caso será de tipo click existen otros tipos
    //AddEventListener recibe dos parametros el primero es el que quiero escuchar
    //El segundo es que quiero que pase después de que el usuario haga la acción
    /*btn.addEventListener("click", function (evento) {
        evento.preventDefault();//Evita que la pagina se recargue
        const input = document.querySelector("[data-form-input]");
        console.log(input.value);
    })*/

    //Pasar todo el codigo a Arrow functions o funciones flecha o funciones anonimas es lo mismo 
    btn.addEventListener("click", createTask);

    // Aquí mandamos a llamar la IIFE inmediatamente 
