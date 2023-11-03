let input = document.querySelector('input');
let list = document.querySelector('.list');
let button = document.querySelector('button');
let deleteClass = document.querySelector('.delete-main');
let label = document.querySelector('.label');
let deleteActive = document.querySelector('.delete-active-main');
let deleteImg = document.createElement('img');
let flag = true;
let arr = [];
function createfirstArray() {
    if(input.value !==""){
    arr.push(input.value);
    }
}
console.log(arr);


function prepareList () {
    
    button.addEventListener('click', ()=>{
        if(input.value !==""){
        if(flag) {
            let div = document.createElement('div');
            div.classList.add("listDiv")
            let p = document.createElement('p');
            let deleteImg = document.createElement('img');
            div.append(p);
            deleteImg.setAttribute(
                'src',
                './img/delete.png',
              );
              deleteImg.setAttribute('height', 20);
              deleteImg.setAttribute('width', 20);

            div.append(deleteImg); 
            deleteImg.classList.add("delete");
            p.innerHTML = input.value;
            list.append(div);
            arr.push(input.value);
            list.style.display = 'block';
            label.style.visibility = 'hidden';
            
            
            
            flag =!flag;
            
        }
        else{
            list.style.display = 'none';
            label.style.visibility = '';
            input.value="";
            flag =!flag;
        }}

        let img= document.querySelectorAll(".delete");
        img.forEach((elem)=>{
            elem.addEventListener("click",(e)=>{
                e.target.parentElement.remove()
            })

        });

        deleteClass.addEventListener("click",()=>{
            input.value="";
        })
       
    })
       
    let order = document.querySelector(".order");
    let check = true;
    function sortList() {
        let listDivs = document.querySelectorAll('.listDiv'); 
        let listArray = Array.from(listDivs); 
        if(check){
            listArray.sort(function(a, b) {
                let textA = a.querySelector('p').textContent.toLowerCase();
                let textB = b.querySelector('p').textContent.toLowerCase();
            if (textA < textB) return -1;
            if (textA > textB) return 1;
            return 0;
            });

            let decreasing = document.querySelector(".order img");
            decreasing.setAttribute(
                'src',
                './img/increasing.svg',
              );
            check =!check;
        }
        else{
            listArray.sort(function(b, a) {
                let textA = a.querySelector('p').textContent.toLowerCase();
                let textB = b.querySelector('p').textContent.toLowerCase();
                if (textA < textB) return -1;
                if (textA > textB) return 1;
                return 0;
                });

                let decreasing = document.querySelector(".order img");
                decreasing.setAttribute(
                    'src',
                    './img/decreasing.svg',
                );
                check =!check;
        }
        let listContainer = document.querySelector('.list');
        listContainer.innerHTML = '';
        listArray.forEach(function(listItem) {
        listContainer.appendChild(listItem);
        });
    }
  order.addEventListener("click", ()=>{
        sortList();
  })
  
  function changeImageOnHover() {
    deleteClass.style.display="none";
    deleteActive.style.display="inline";
  }
  function restoreOriginalImage() {
    deleteClass.style.display="inline";
    deleteActive.style.display="none";
  }

  deleteClass.addEventListener('mouseenter', changeImageOnHover);
  deleteClass.addEventListener('mouseleave', restoreOriginalImage);

  var divElements = document.querySelectorAll('.listDiv');
  divElements.forEach(function(divElement) {
    divElement.setAttribute('draggable', 'true');
  });

}
prepareList ();


                
