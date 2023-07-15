const N_NUMS = 6;
const NUM_MAX = 59;
const grid_container = document.querySelector("#grid_container");

let my_numbers = [];

const button_run = document.querySelector("#button_run");
        button_run.addEventListener("click", () => {
            
            pick_numbers();
            // setTimeout(() => {
            //     alert("Reloading Page")
            //     location.reload();
            // }, 1000);
            getMatchingBalls(my_numbers, generated_numbers);

        });

const create_the_grid = () => {
    for(let i = 0; i < NUM_MAX; i++){
        let my_li = document.createElement("li");
            my_li.setAttribute("class", "my_grid");
            my_li.setAttribute("id", "my_grid_" + (1 + i));

        let my_li_text = document.createTextNode(1 + i);
        
        my_li.appendChild(my_li_text);
        grid_container.appendChild(my_li);
    }
    console.log(grid_container);
}

grid_container.addEventListener("mouseover", (ev) => {
    let id = ev.target.id;
    console.log(`id: ${id}`);
});

grid_container.addEventListener("click", (ev) => {
    let id = ev.target.id;
    let num = ev.target.textContent;
    console.log(`id: ${id} -----> picked number ${num}`);
    console.log("Picked number : ", num);

    
    if(my_numbers.length < N_NUMS && !my_numbers.includes(num)){
        my_numbers.push(num)
        grid_container.childNodes[num - 1].classList.add("grid_cursor");
        create_my_numbers(num);
    }    
});


const create_my_numbers = (num) => {
    let div_num = document.createElement("div");
        div_num.setAttribute("class", "my_numbers");
        div_num.setAttribute("id", "my_numbers_" + num);

    let text_num = document.createTextNode(num);

    div_num.appendChild(text_num);
    my_numbers_container.appendChild(div_num);

}

const pick_numbers = () => {

    generated_numbers = [];
    while(generated_numbers.length < N_NUMS){
        let num = Math.floor((Math.random() * NUM_MAX) + 1);
        if(!generated_numbers.includes(num)) generated_numbers.push(num)
    }

    generated_numbers_container.append(generated_numbers);
    console.log("my numbers : ", my_numbers);

}

function getMatchingBalls(my_numbers, generated_numbers){

    var matches = [];

    for(var i = 0; i < my_numbers.length; i++){
        var userBall = my_numbers[i];
        var isMatch = false;

        for(var j = 0; j < generated_numbers.length; j++){
            if(userBall === generated_numbers[j]){
                isMatch = true;
                break;
            }
        }

        if (isMatch){
            matches.push(userBall);
        }
    }

    if(matches.length == 3){
        alert("Congratulations, you got 3 matching numbers, you now have a score of 50");
    }
    else if(matches.length == 4){
        alert("Congratulations, you got 4 matching numbers, you now have a score of 100");
    }
    else if(matches.length == 5){
       alert("Congratulations, you got 5 matching numbers, you now have a score of 200");
    }
    else if(matches.length == 6){
        alert("WOW YOU GOT ALL 6 NUMBERS! YOU HAVE A SCORE OF 600");
    }

}


create_the_grid();
