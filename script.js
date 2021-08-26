function LogOut(element){
element.innerText = "Logout";
}
function remove(element){
    element.remove();
    }

function Like(element){
alert ('Ninja was liked')

}

function count(Element){

    var count = parseInt(document.querySelector("#count").innerText);
    document.querySelector("#count").innerText = (count+1) +' '+ 'Likes';

    console.log(count)
}

// function count(Element){
//     var x = 0;
//     var count = parseInt (document.querySelector("#count").innerText);
//     document.querySelector("#count").innerText = (count+1) +' '+ " Likes";

// }

