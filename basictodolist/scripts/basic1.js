const todo =[];

function addFun(){
    const inputElement = document.querySelector('.input');
    const name = inputElement.value;
    todo.push(name);
    console.log(todo)

    inputElement.value = '';
}

function handleKeyDown(event){

    if(event.key = 'enter'){
        addFun();
    }

}