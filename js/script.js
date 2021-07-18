const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Hello devs!');
    let email= document.getElementById('email').value;
    let data = {
        email
    }
    let convertData = JSON.stringify(data);
    console.log(data);
    localStorage.setItem('lead', convertData)
})