jQuery(document).ready(function() {
    $(".qtyplus").click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr("name");
        var t = parseInt($("input[name=" + fieldName + "]").val());
        if (!isNaN(t)) {
            $("input[name=" + fieldName + "]").val(t + 1)
        }
        else {
            $("input[name=" + fieldName + "]").val(1)
        }
    });
    $(".qtyminus").click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr("name");
        var t = parseInt($("input[name=" + fieldName + "]").val());
        if (!isNaN(t) && t > 0) {
            $("input[name=" + fieldName + "]").val(t - 1)
        }
        else {
            $("input[name=" + fieldName + "]").val(0)
        }
    })
})
