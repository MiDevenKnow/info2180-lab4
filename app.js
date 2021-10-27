onload= function(){
    var btn=document.getElementById('btn');
    var httpRequest=new XMLHttpRequest();

    btn.addEventListener('click',function(event){
        var url='superheroes.php'
        httpRequest.onreadystatechange=httprequest();
        httpRequest.open('GET',url);
        httpRequest.send();
    });

    function httprequest(){
        if(httpRequest.readyState===XMLHttpRequest.DONE && httpRequest.status===200){
            var response=httpRequest.responseText;
            alert(response);
        }
    }
}