
function formatText() {
    let first = document.getElementById('firstName').value[0];
    let last = document.getElementById('lastName').value[0];
    let inp1 = first.search(/[A-Z]/);
    let inp2 = last.search(/[A-Z]/);

    if(inp1 === -1 || inp2 === -1) {
        alert('Please capitalize first & last name, letters only')
    } else {
        alert('success!')
    }
}
