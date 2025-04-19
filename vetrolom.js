document.addEventListener('DOMContentLoaded', ()=>{
    const ids = ['intro', 'characters', 'opinion', 'moments', 'data'];
    ids.forEach(id=> {
        const element= document.getElementById(id);
        if (element){
            element.style.display='none';//Скрываем текст
        }
    });



    const infoToggleBtns = document.getElementsByClassName('infoToggleBtns');
    for (let i = 0; i < infoToggleBtns.length; i++){
        infoToggleBtns[i].addEventListener('click', 
            (e)=>{
                const blockName = e.target.name;
                const infoBlock = document.getElementById(blockName);
                if (infoBlock.style.display == 'none'){
                    infoBlock.style.display = 'block';
                }
                else {
                    infoBlock.style.display = 'none';
                }
            }
        );
    }
});





function displayPlot(){
    console.log("Plot function is called");
    
    // const ids=['intro'];

    // ids.forEach(id=>{
    //     const element= document.getElementById(id);
    //     if(element){
    //         if(element.style.display==="none") {
    //             element.style.display="block";
    //             //Показываем элемент element.style.paddingTop="15px";
    //         }
    //         else{
    //             element.style.display="none";
    //             //Скрываем элемент
    //         }
    //     }
    // });
//Перенаправление window.location.href='#intro';
}

