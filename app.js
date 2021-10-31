onload = function(){
    var btn=document.getElementById('btn');
    var result = document.getElementById('result');
    var text = document.getElementById('textbox');
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load",() =>{
        let output = xhr.responseText;
        result.innerHTML = output;
    });

    btn.addEventListener('click', () => {
        var url='superheroes.php?query='+text.value;
        xhr.open('GET',url);
        xhr.send();
    });
}