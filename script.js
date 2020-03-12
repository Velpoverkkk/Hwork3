var inputData = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById('spisok');
var spans = document.getElementsByTagName('span');
var line = document.getElementsByTagName('li');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');


function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation(); 
        });
    }
};
function showLine(){
    for(let li of line){
        li.addEventListener('click', function(){
            li.classList.add('text');
        });
    }
};


function loadTodo(){
    if(localStorage.getItem('ApplicationTodo')){
        ulSpisok.innerHTML = localStorage.getItem('ApplicationTodo');
    };
    deleteTodo();
    showLine();
};


// addEventListener - обработчик события с последующим вызовом функции

inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = 'Delete ';

        var Info = this.value;
        this.value = " ";
        
        var re = / /gi;
        var newInfo = Info.replace(re, '');
        if(newInfo.length == 0 ){
            alert("Задача не введена ")
        }
        else{
           /* let textDecoration = 'line-through';
            ulSpisok.style.textDecoration = textDecoration;*/
            ulSpisok.appendChild(newLi).append(newSpan, Info, " ==> Время добавления задачи: ", new Date());
            deleteTodo();
            showLine();
        }
        
    }
    

});

saveBtn.addEventListener('click', function(){
    localStorage.setItem('ApplicationTodo', ulSpisok.innerHTML);       
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = " ";
    localStorage.setItem('ApplicationTodo', ulSpisok.innerHTML);  
})

deleteTodo();
loadTodo();
showLine();


show = function(state){
    document.getElementById('filter').style.display = state;
    document.getElementById('modal').style.display = state;
}

