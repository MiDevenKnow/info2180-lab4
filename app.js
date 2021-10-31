onload = function(){
    var btn=document.getElementById('btn');
    var xhr=new XMLHttpRequest();
    
    xhr.addEventListener("load",(event) =>{
        let output = xhr.responseText;
        this.alert(output);
    });

    btn.addEventListener('click',function(event){
        var url='superheroes.php'
        xhr.open('GET',url);
        xhr.send();
    });
}