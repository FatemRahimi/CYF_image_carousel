var image_url_list;

// Describe this function...
function initialise() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  image_url_list = ['https://images.unsplash.com/photo-1650837458604-677cb9450c32?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388', 'https://images.unsplash.com/photo-1652776439041-9baabaa5397b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387', 'https://images.unsplash.com/photo-1651180557348-921ddc73d114?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387', 'https://images.unsplash.com/photo-1635003937156-7d4e4cd71ff2?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387', 'https://images.unsplash.com/photo-1652822154192-955bb6f1df77?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387'];
}


initialise();
let element_image = document.getElementById('image');
element_image.setAttribute("src", image_url_list[0]);


document.getElementById('previous').addEventListener('click', (event) => {
  image_url_list.unshift(image_url_list.pop());
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", image_url_list[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  image_url_list.push(image_url_list.shift());
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", image_url_list[0]);

});

document.getElementById('first').addEventListener('click', (event) => {
  initialise();
  let element_image4 = document.getElementById('image');
  element_image4.setAttribute("src", image_url_list[0]);

});

document.getElementById('last').addEventListener('click', (event) => {
  initialise();
  image_url_list.unshift(image_url_list.pop());
  let element_image5 = document.getElementById('image');
  element_image5.setAttribute("src", image_url_list[0]);

});