/* window data object size verification */
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch(e) {
        console.error(e);
        return (
            e instanceof DOMException &&
            (e.code === 22 || e.code === 1014 ||
                e.name === "QuotaExceededError" ||
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            storage && storage.length !== 0
        );
    }
}

function emptyMsgHandler() {
    console.log(localStorage.length);
    favourites_obj = document.getElementById('favourites-wrapper');
    favourites_obj.innerHTML = "";
    if (localStorage.length == 0) {
        // empty card message
        var div = document.createElement('div');
        div.style.color = 'white';
        div.style.textAlign = 'center';
        div.style.fontSize = '14px';
        div.innerHTML = '<p>Para adicionar novos card utilize o botão de favoritos</p>';
        favourites_obj.appendChild(div);
    }
}

function updateItensCollection() {
    emptyMsgHandler();
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        if (localStorage.getItem(localStorage.key(i))) {
            let itemData = (localStorage.getItem(localStorage.key(i))).split(";");

            // item view card
            favourites_obj = document.getElementById('favourites-wrapper');
            let div = document.createElement('div');
            div.className = 'favourite';
            div.innerHTML = "<a id=\"" + localStorage.key(i) + "\" href=\"" + itemData[1] + "\" target=\"_blank\">" + itemData[0] + "</a>";
            favourites_obj.appendChild(div);

            // Update index number
            window.viewCardCount += 1;
        }
    }
}

function storageVerify() {
    if (storageAvailable("localStorage")) {
        updateItensCollection();
        return true;
    } else {
        // Console error
        console.error("Unable to use localStorage storage type!");

        // Site error
        favourites_obj = document.getElementById('favourites-wrapper');
        var div = document.createElement('div');
        div.className = 'site-error';
        div.innerHTML = '<h5>Unable to use localStorage! Please, enable it...</h5>';
        favourites_obj.appendChild(div);
        return false;
    }
}

function addToDatabase(itemNameInput, itemUrlInput, itemHash) {
    if (!localStorage.getItem(itemHash)) {
        console.log("Item => ['" + itemNameInput + "', '" + itemUrlInput + "', '" + itemHash + "']");
        localStorage.setItem(itemHash, itemNameInput + ";" + itemUrlInput);
    } else {
        alert("Item já existe!");
    }
}
