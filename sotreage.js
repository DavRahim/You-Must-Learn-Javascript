localStorage.setItem('userId', 502049450);

const addToLocalStorage = () =>{
    const idInput = document.getElementById('sotrage-id');
    const id = idInput.value
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value


    //add local storage;

    if(id && value){
        localStorage.setItem(id, value)
    }

    idInput.value = '';
    valueInput.value = '';
}