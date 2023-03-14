const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener("click", completeTask);
    return i;
};

// Inmediately invoked function expression IIFE
// Para que las funciones que creamos no estén al alcance del usuario por medio de la consola se
// Invocan las IIFE y así las funciones se ejecutan inmediatamente al ser declaradas 
const completeTask = (event) => {
    //console.log(event.target);
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};

export default checkComplete;