window.addEventListener("keyup", (e) => {
    console.log(e.key, e.code)
    if (e.ctrlKey && e.shiftKey && e.code === "KeyC") { // Ctrl + Shift + C 
        window.location.href = URL.parse(window.location.href).searchParams.get("continue");
        console.log('done')
    }
})