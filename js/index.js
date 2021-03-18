function addMessage() {
    const message = document.getElementById("message-in").value;
    document.getElementById("components")
        .innerHTML += `
            <pre>${message}</pre>
        `;
    document.getElementById("message-in").value = ""
}