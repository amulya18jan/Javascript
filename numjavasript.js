<input id="num">
    <button type="button"oneclick="myfunction()">SUBMIT</button>
<p id="demo"></p>
</input>
<script>
    function myfunction(){
        var x,text;
        x= document.getElementById("num").value;
        if (isNaN(x)||x< 1|| x>10){
            text="Invalid";
        }else{
            text="valid";
        }
        document.getElementById("demo").innerHTML="text;"
        }
    
</script>