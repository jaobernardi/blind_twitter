setInterval(() => {
    document.querySelectorAll("[href$='/analytics']").forEach(e => 
        e.parentElement
        .parentElement
        .removeChild(e.parentElement)
        );
    console.log("Opa!")
}, 500);