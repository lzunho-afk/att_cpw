function updateItensCollection() {
    for (var i in localStorage) {
        if (localStorage.getItem(i)) {
            let itemData = (localStorage.getItem(i)).split(";");
            console.log(localStorage.getItem(i));

            // item view card
            favourites_obj = document.getElementById('favourites-wrapper');
            var div = document.createElement('div');
            div.className = 'favourite';
            div.innerHTML = "<label for=\"" + i + "\">" + itemData[0] + "</label> => <a id=\"" + i + "\" href=\"" + itemData[1] + "\">" + itemData[1] + "</a>";
            favourites_obj.appendChild(div);
        }
    }
}

window.onload = function () {
    updateItensCollection();

    let itemForm = document.getElementById('add-item-form');
    let itemName = document.getElementById('item-name');
    let itemUrl = document.getElementById('item-url');

    itemForm.addEventListener('submit', event => {
        event.preventDefault();

        let itemNameInput = itemName.value;
        let itemUrlInput = itemUrl.value;

        // Gerando hash do nome
        let itemHash = md5(itemNameInput + itemUrlInput);

        // Adicionando valores ao localStorage
        if (!localStorage.getItem(itemHash)) {
            console.log("Item => ['" + itemNameInput + "', '" + itemUrlInput + "', '" + itemHash + "']");
            localStorage.setItem(itemHash, itemNameInput + ";" + itemUrlInput);
            updateItensCollection();
        } else {
            alert("Item já existe!");
        }

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
