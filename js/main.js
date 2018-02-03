$(function () {
    $("#create").hide();
    $("#read").hide();
    $("#warningLabel").hide();
    $("a").on("click", function () {
        var name = $(this).attr("href");
        $("section").slideUp("slow");
        $(name).delay(500).slideDown("slow");
    });

    $("#submitButton").click(function () {
        var flag = emptyValidation();
        if (flag)
            saveInfo();
        else
            $("#warningLabel").show();
    });


});

function emptyValidation() {
    if ($("#inputEmail").val() == '') {
        return false;
    }
    if ($("#inputName").val() == '') {
        return false;
    }
    if ($("#inputLastName").val() == '') {
        return false;
    }
    return true;
}

function saveInfo() {
    var user = new User($("#inputEmail").val(), $("#inputName").val(), $("#inputLastName").val());
    addRow(user);
    $("a[href='#read']").trigger("click")
}

function User(email, name, lastName) {
    this.email = email;
    this.name = name;
    this.lastName = lastName;
}

function addRow(user) {
    $("table tbody").append("<tr class='table-default'>" + "<td>" + user.email + "</td>" + "<td>" + user.name + "</td>" + "<td>" + user.lastName + "</td></tr>");
}
