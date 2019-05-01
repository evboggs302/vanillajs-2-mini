document.querySelector("form").addEventListener("submit", addToDo);

function addToDo(event) {
  event.preventDefault();
  // prevents the default action from running

  const item = document.createElement("li");
  // creates new list item

  item.innerText = document.getElementById("item").value;
  // set the text of the newly created list item to the value of the iput with an id of "item"

  item.addEventListener("click", completeToDo);
  // add completeToDo function to each item to grey out item on click

  const button = document.createElement("button");
  // creates new button element

  button.innerText = "X";
  // adding X to inside of button

  button.addEventListener("click", removeToDo);
  //add removeToDo function to the button of each list item created

  item.appendChild(button);
  //add the remove button to the newly created list item

  const list = document.querySelector("ul");
  //select the unordered list that will hold te newly created li

  list.appendChild(item);
  //attach the newly created li to the unordered list

  document.getElementById("item").value = "";
  // *user experience: clear input out after submission
}

function removeToDo(event) {
  event.target.parentNode.remove();
  //event.target ==> button
  //event.target.parentNode ==> individual li
}

function completeToDo(event) {
  // value of the 'aria-checked' attribute list item was clicked
  const value = event.target.getAttribute("aria-checked");
  if (value !== "true") {
    event.target.setAttribute("aria-checked", "true");
    // if value is 'false' set it to true
  } else {
    event.target.setAttribute("aria-checked", "false");
    //if value is 'true' set it to false
  }
}
