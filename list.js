function addTask( ){ 
    let inputbox = document.querySelector('.input-box').value;
    let listcont = document.querySelector('.list-cont');
    if(  inputbox !== ''){
        let li = document.createElement( 'li' );
        li.textContent = inputbox;
        listcont.appendChild( li );
        document.querySelector('.input-box').value = '';
    }


    
}

