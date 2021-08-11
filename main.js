let add = document.getElementById('add').addEventListener("click", function() {
let input_mess = document.querySelector('.advice').value;
let input_lenght = document.getElementById('in').value.length;

if(input_lenght <= 0) {

    } else {
        let div1 = document.createElement('div');
        div1.classList.add("diva");
        document.querySelector(".div5").appendChild(div1);


        let div2 = document.createElement('div');
        document.querySelector(".diva").appendChild(div2);

        let p1 = document.createElement('p');
        document.querySelector(".diva > div").appendChild(p1);
        p1.innerHTML = input_mess;


        let div3 = document.createElement('div');
        div3.classList.add("delete");
        document.querySelector(".diva").appendChild(div3);

        let i1 = document.createElement('i');
        i1.classList.add("fa fa-trash-o");
        document.querySelector(".delete").appendChild(i1);
    }
});