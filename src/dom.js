function domBtns() {


    const navBtns = document.querySelectorAll("button");

    navBtns.forEach(btn => {
        btn.addEventListener("click", event => {
            console.log(btn.textContent);
        })
    });

}
export { domBtns };