function color() {
    var color = document.getElementById('color').value; 
    document.querySelector(".content").style.color = color;
    document.getElementById('color').value = '';
}

// Modal
$('#open-modal1').click(function() {
    $('#modal1').show();
})
$('#close-modal1').click(function() {
    $('#modal1').hide();
})


// Mobile Navbar
function toggleNav() {
    document.querySelector('.mobynav').classList.toggle('hide')
}
for (const x of document.querySelectorAll('.toggle-nav')) {
    x.addEventListener('click', toggleNav)
}