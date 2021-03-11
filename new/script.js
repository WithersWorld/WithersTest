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

function card(subtitle, title, date, picture) {
    var card = `
        <card>
            <img id="card-image" src=${picture}>
            <div class="card-content">
                <div class="titles">
                    <div class="subtitle">
                        ${subtitle}
                    </div>
                    <div class="title">
                        ${title}
                    </div>
                </div>
            </div>
            <div class="date">
                ${date}
            </div>
        </card>
            `
    $('.cards').append(card)
}
card("WEBY", "Weby is the best", "June 6, 2005", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Letter_w.svg/108px-Letter_w.svg.png")
card("HELLO", "Hello World", "Spring 2021", "https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png")
card("WEBY", "Weby's new update", "March, 2021", "")