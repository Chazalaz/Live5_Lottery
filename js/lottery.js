const N_NUMS = 6;
const NUM_MAX = 59;
const grid_container = document.querySelector("#grid_container");
this.isReset = true;
let my_numbers = [];

const button_run = document.querySelector("#button_run");
        button_run.addEventListener("click", () => {

            if(this.isReset){
                this.isReset = false;
                pick_numbers();
            }
            //getMatchingBalls(my_numbers, generated_numbers);
        });

const button_lucky = document.querySelector("#lucky_dip");
        button_lucky.addEventListener("click", () => {

            for(var i = 0; i < N_NUMS; i++){
                let num = Math.floor((Math.random() * NUM_MAX) + 1);

                if(my_numbers.length < N_NUMS && !my_numbers.includes(num)){
                    my_numbers.push(num)
                    grid_container.childNodes[num - 1].classList.add("grid_cursor");
                    create_my_numbers(num);
                }  
           }
        });

const reset_page = document.querySelector("#reset_page");
        reset_page.addEventListener("click", () => {
            this.isReset = true;
            location.reload();
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
        let div_num = document.createElement("div");
            div_num.setAttribute("class", "my_numbers");
            div_num.setAttribute("id", "my_numbers_" + num);

        let text_num = document.createTextNode(num);

        div_num.appendChild(text_num);
        generated_numbers_container.appendChild(div_num);
        if(!generated_numbers.includes(num)) generated_numbers.push(num)
    }
    console.log("Winning Numbers : ", generated_numbers);
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
