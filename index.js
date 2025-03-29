let mode=document.querySelector(".mode");
let body=document.querySelector("body");
let nav=document.querySelector("nav")
let textareas = document.querySelectorAll("#text"); 

mode.addEventListener("click",()=>{
    if(body.style.backgroundColor=="black"){
        nav.style.backgroundColor="gray"
        body.style.backgroundColor="white";
        body.style.color="black"
        textareas.forEach(text => text.style.backgroundColor = "white");
        textareas.forEach(text => text.style.borderColor = "black");
        textareas.forEach(text => text.style.color = "black");
    }
    else{
        nav.style.backgroundColor="#000000 "
        body.style.backgroundColor="black";
        body.style.color="white"
        textareas.forEach(text => text.style.backgroundColor = "black");
        textareas.forEach(text => text.style.borderColor = "white");
        textareas.forEach(text => text.style.color = "white");
    }
    
});
let output = document.querySelector(".op");
let run = document.querySelector("button");

// Run button event listener
run.addEventListener("click", () => {
    let htmlCode = document.querySelector(".html").value;
    let cssCode = document.querySelector(".css").value;
    let jsCode = document.querySelector(".js").value;

    let iframeDoc = output.contentDocument;

    if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
            <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}<\/script>
            </body>
            </html>
        `);
        iframeDoc.close();
    } else {
        console.error("Could not access iframe document.");
    }
});