$('.menu-link').on("click", function() {
    var section_id = $(this).attr("id");
    var pageid = "page"+section_id+".html";
    var alt_id = "#"+section_id;
    var out_id_content = "#content-"+section_id;

    // Requisição AJAX
    $.ajax({
        url: pageid,
        success: function(content) {
            $(out_id_content).html(content);
        },
        complete: function() {
            $("#" + id).css({background-color: #dce3e9});
            $(out_id_content).attr('cnt', 'true');
        }
    });
});

