function generate() {
    first = document.getElementById("firstNumber").value;
    last = document.getElementById("lastNumber").value;
    document.getElementById("number").innerHTML = "<img src='https://i.pinimg.com/originals/a4/f2/cb/a4f2cb80ff2ae2772e80bf30e9d78d4c.gif'>"
    fetch('https://www.random.org/integers/?num=1&min=' + first + '&max=' + last + '&col=1&base=10&format=plain&rnd=new')
        .then(response => response.json())
        .then(data => document.getElementById("number").innerHTML = data);

}