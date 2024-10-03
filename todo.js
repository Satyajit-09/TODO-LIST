let input= document.querySelector('#in');
let btn= document.querySelector('#sb');
let list= document.querySelector('.list');
function localput(){
      let len= localStorage.length;
          if(len!=0){
              for(let i=1;i<=len;i++){
                    addnewelement(localStorage.getItem(`${i}`));
              } 
          }
}                        
localput(); 
function localadd(str){  
        localStorage.setItem('todo',JSON.stringify()); 
}                  
function addnewelement(task){
      let nel =  document.createElement('li');
      let nbtn= document.createElement('button');
      nbtn.textContent='DELETE';
      nbtn.classList.add('newbutton');
      nel.textContent=  task;
      list.append(nel);
      nel.append(nbtn);
      add(nbtn,localStorage.length);
}
function removefile(itn){
       localStorage.removeItem(itn);
} 
function add(x,y){
      x.addEventListener('click',()=>{
            let par= x.parentElement;
            removefile(y);
            par.remove();   
      })  
}         
btn.addEventListener('click',()=>{
         if(input.value!=''){
            let task= input.value;
            localadd(input.value); 
            addnewelement(task);
            input.value='';
         }  
})  
localStorage.setItem('task',JSON.stringify(['fire','hllo','muder']));
let arr= JSON.parse(localStorage.getItem('task'));
arr[0]='fuck';
console.log(arr[0]);


