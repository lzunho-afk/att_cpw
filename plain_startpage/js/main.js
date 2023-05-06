const itemName  = document.getElementById('item-name');
const itemUrl   = document.getElementById('item-url');

function addItem() {
    let itemForm = document.querySelector('#add-item-form');
    itemForm.addEventListener('submit', event => {
        event.preventDefault();

        let itemNameInput = itemName.value;
        let itemUrlInput = itemUrl.value;

    });
}

function delItem() {

}

/* form validation */
itemName.addEventListener("input", (event) => {
    if (itemUrl.validity.typeMismatch) {
        itemUrl.setCustomValidity("Adicione um nome válido!");
    } else {
        itemUrl.setCustomValidity("");
    }
});

itemUrl.addEventListener("input", (event) => {
    if (itemUrl.validity.typeMismatch) {
        itemUrl.setCustomValidity("Uma URL é esperada para esse campo!");
    } else {
        itemUrl.setCustomValidity("");
    }
});
