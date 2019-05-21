httpRequest = new XMLHttpRequest();
document.getElementById("get1_button").addEventListener('click', get1);
document.getElementById("get2_button").addEventListener('click', get2);
document.getElementById("put_button").addEventListener('click', put);
document.getElementById("patch_button").addEventListener('click', patch);

var responseArea = document.getElementById("response_area");
httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            // Perfect!
            responseArea.innerHTML = httpRequest.responseText;
        } else {
            // There was a problem with the request.
            // For example, the response may have a 404 (Not Found)
            // or 500 (Internal Server Error) response code.
        }
    } else {
        // Not ready yet.
    }
};

function get1(){
    httpRequest.open('GET', 'http://localhost/tp4/list-users.php', true);
    httpRequest.send();
}

function get2(){
    httpRequest.open('GET', 'http://localhost/tp4/list-softwares.php', true);
    httpRequest.send();
}

function put(){
    var username = document.getElementById("username").value;
    var is_admin = document.getElementById("is_admin").value;
    var putString = 'username=' + username + '&is_admin=' + is_admin; 

    httpRequest.open('POST', 'http://localhost/tp4/add-user.php', true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send(putString);
}

function patch(){
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var type = document.getElementById("type").value;
    var company = document.getElementById("company").value;
    var patchString = 'name=' + name + '&type=' + type + '&company=' + company+ '&id=' + id; 

    httpRequest.open('POST', 'http://localhost/tp4/update-software.php', true);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send(patchString);
}