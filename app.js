var button_translate = document.querySelector("#btn-translate")
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

var server_link = "https://api.funtranslations.com/translate/chef.json"

function getreallink(text){
    return server_link+"?text="+text;
}

function error_handle(error){
    console.log("error");
    alert("Some error has occured,May be API is not working");
}

function clickEventHandler(){
    var input = txtinput.value;
    fetch(getreallink(input))
        .then(response => response.json())
        .then(json=>{
            var translated_text = json.contents.translated;
            outputdiv.innerText = translated_text;
        })
        .catch(error_handle)
}


button_translate.addEventListener("click", clickEventHandler);