function getTime() {

    let date = new Date();
    let hour = date.getHours();
    let min  = date.getMinutes();
    let sec  = date.getSeconds();
    let day  = date.toLocaleDateString('it-it', {weekday: 'long'});
    let text = date.toLocaleDateString('it-it', {year: 'numeric', month: 'short', day: 'numeric'});

    hour = String(hour).padStart(2, '0');
    min  = String(min).padStart(2, '0');
    sec  = String(sec).padStart(2, '0');

    document.querySelector('.day').innerText  = day;
    document.querySelector('.time').innerText = [hour, min, sec].join(' : ');
    document.querySelector('.date').innerText = text;
    setTimeout(getTime, 1000);
}

getTime();