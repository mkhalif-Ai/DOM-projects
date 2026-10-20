function addItem(){
    const list = document.querySelector("#lists")
    const newItem = document.createElement("li")
    newItem.textContent = "new item"
    list.appendChild(newItem)
}
   function removeItem() {
            const list = document.querySelector("#lists");
            if (list.lastChild) {
                list.removeChild(list.lastChild);
            }
        }