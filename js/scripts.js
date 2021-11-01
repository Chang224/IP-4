$(document).ready(function() {
    $("#delivery").click(function() {
    $("#delivery-textbox").show();
    $(":button").show();
    });
});
$(document).ready(function() {
    $("#city-centre-branch-pick-up").click(function() {
    $("#delivery-textbox").hide();
    $(":button").hide();
    });
});
$(document).ready(function() {
    $("#westlands-branch-pick-up").click(function() {
    $("#delivery-textbox").hide();
    $(":button").hide();
    });
});
$(document).ready(function() {
    $("#lavington-branch-pick-up").click(function() {
    $("#delivery-textbox").hide();
    $(":button").hide();
    });
});
$(document).ready(function() {
    $("#karen-branch-pick-up").click(function() {
    $("#delivery-textbox").hide();
    $(":button").hide();
    });
});
$(document).ready(function() {
    $(":button").click(function() {
    alert("Thank you!! Delivery time is one hour.")
    });
});