window.onload = function () {
    let resetBtn = document.getElementById('reset-btn');
    let itemForm = document.getElementById('add-item-form');
    let itemName = document.getElementById('item-name');
    let itemUrl = document.getElementById('item-url');
    
    if (storageVerify()) {
        resetBtn.addEventListener('click', event => {
            localStorage.clear();
            updateItensCollection();
        });

        itemForm.addEventListener('submit', event => {
            event.preventDefault();

            let itemNameInput = itemName.value;
            let itemUrlInput = itemUrl.value;

            // Gerando hash do nome
            let itemHash = md5(itemNameInput + itemUrlInput);

            // Adicionando valores ao localStorage
            addToDatabase(itemNameInput, itemUrlInput, itemHash);
            updateItensCollection();

            // Resetando o formulário & fade-out do modalbox
            itemName.value = '';
            itemUrl.value = '';
            window.location = "#close";
        });

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
    } 
}
