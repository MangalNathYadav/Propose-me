
var name1 =document.getElementById('proposal');
var add_btn = document.getElementById('propose');
add_btn.addEventListener( 'click', (e) => {
    e.preventDefault();
    if ((name1.value=="I love you")||(name1.value=="Iloveyou")||(name1.value=="i love you")||(name1.value=="iloveyou")||(name1.value=="Iluvu")||(name1.value=="iloveu")||(name1.value=="Iloveu")){
        window.location.href="iloveyoutoo.html";
    }
	else{
		alert("Propose me correctly ");
	    window.location.href="index.html";	}
    });
