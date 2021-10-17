
const angle = (hour) => {
    
    let [hh, mm] = hour.split(":");
    
    hh = ((parseInt(hh) % 12) * 60 + parseInt(mm)) * 0.5;
    mm = parseInt(mm) * 6;

    const diff = Math.abs(hh - mm);

    return Math.min(360 - diff, diff);
    
}

console.log(angle("12:30"));