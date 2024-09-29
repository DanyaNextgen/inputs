const btn = document.querySelector('#saveBtn'),
    error = document.querySelector('#error'),
    titles = document.querySelectorAll('.active'),
    inputs = [
        'name', 'age', 'email', 'javascript', 'html', 'css', 'about'
    ]

btn.onclick = () => {
    let acting = true;

    inputs.forEach(id => {
        const input = document.querySelector(`#${id}`)
        if (!input.value.trim()) { 
            input.classList.add('error')
            acting = false; 
        } 
        else {
            input.classList.remove('error')
        }
    })

    if (acting) {
        btn.classList.remove('red');
        titles.forEach(title => title.classList.remove('red'))
    } 
    else {
        btn.classList.add('red');
        titles.forEach(title => title.classList.add('red'))
    }
}

