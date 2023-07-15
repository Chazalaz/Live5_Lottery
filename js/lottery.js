const N_NUMS = 6;
const NUM_MAX = 59;
const grid_container = document.querySelector("#grid_container");

let my_numbers = [];

const button_run = document.querySelector("#button_run");
        button_run.addEventListener("click", () => {
            
            pick_numbers();
            //display_numbers();

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

const pick_numbers = () => {

    my_numbers = [];
    while(my_numbers.length < N_NUMS){
        let num = Math.floor((Math.random() * NUM_MAX) + 1);
        if(!my_numbers.includes(num)) my_numbers.push(num)
    }

    //my_numbers.sort((num_1, num_2) => (num_1 - num_2));
    console.log("my numbers : ", my_numbers);
}

// const display_numbers = () => {

//     for (let i = 0; i < NUM_MAX; i++){
//         grid_container.childNodes[i].classList.remove("grid_cursor");
//     }
//     for(let num of my_numbers){
//         grid_container.childNodes[num - 1].classList.add("grid_cursor");  
//     }
//     console.log(grid_container.childNodes);
// }

create_the_grid();
