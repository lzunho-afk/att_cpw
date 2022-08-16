const form = document.getElementById("archive-form");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const archive_filename = document.getElementById("archive-input-name");
    const files = document.getElementById("archive-input");
    
    const formData = new FormData();
    formData.append("archive-input-name", archive_filename.value);
    for (let i = 0; i < files.files.length; i++) {
        formData.append("archive-input", files.files[i]);
    }

    fetch("http://localhost:8000/fileupload", {
        method: 'POST',
        body: formData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
        .then((res) => console.log(res))
        .catch((err) => ("Archive form error occured", err));
});
