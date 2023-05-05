/* window data object size verification */
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch(e) {
        return (
            e instanceof DOMException &&
            (e.code === 22 || e.code === 1014 ||
                e.name === "QuotaExceededError" ||
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            storage && storage.length !== 0
        );
    }
}

window.onload = function() {
    // Testing localStorage
    if (storageAvailable("localStorage")) {

    } else {
        // Console error
        console.error("Unable to use localStorage storage type!");

        // Site error
        favourites_obj = document.getElementById('favourites-wrapper');
        favourites_obj.appendChild(document.createElement('div')); // empty div (1st block)

        var div = document.createElement('div');
        div.className = 'site-error';
        div.innerHTML = '<h5>Unable to use localStorage! Please, enable it...</h5>';
        favourites_obj.appendChild(div); // Error msg block
    }
}
