var btns = document.querySelectorAll("button");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Loop melalui setiap button dan tambahkan event listener
btns.forEach(function(btn) {
    btn.onclick = function() {
        modal.style.display = "block";
    }
});

// Event listener untuk tombol close di modal
span.onclick = function() {
    modal.style.display = "none";
}

// Event listener untuk menutup modal jika klik di luar area modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Event listener untuk form booking
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var favorite = document.getElementById("favorite").value;
    
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Favorite:", favorite);

    modal.style.display = "none";
});
