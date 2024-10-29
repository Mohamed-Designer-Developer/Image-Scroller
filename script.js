let scrollContainer = document.getElementById("images");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// mouse scroll 
scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
   //The WheelEvent.deltaY read-only property is a double representing the vertical scroll amount in the WheelEvent.deltaMode unit.
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "smooth";
})

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;
    scrollContainer.style.scrollBehavior = "smooth";
})

backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900;
    scrollContainer.style.scrollBehavior = "smooth";
})