
//1 .- ************************************************************************
//Aquí agregamos las clases y la función para el bote de basura
const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener("click", deleteTask);
    return i;//Se retorna para poder mandar llamar a la función
};

//2 .- ************************************************************************* 
//Esto se agreregó después del deleteIcon es la función del bote de basura, es decir elimina la tarea o Card
const deleteTask = (evento)  => { 
    //console.log("Eliminar tarea");
    const parent =  evento.target.parentElement //Aquí estamos accediendo al dom como queremos eliminar el padre
    //Vamos hasta la clase en HTML que se llama "Card" que es el padre del bote de basura
    parent.remove();
};

export default deleteIcon;