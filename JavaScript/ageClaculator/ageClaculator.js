function age() {
    var d1 = parseInt(document.getElementById('date').value);
    var m1 = parseInt(document.getElementById('month').value);
    var y1 = parseInt(document.getElementById('year').value);
  
    if (m1 > 12 || m1 < 1 || d1 < 1 || d1 > 31) {
        document.getElementById('age').innerHTML = 'Please enter a valid date.';
        return;
    }
  
    var date = new Date();
    var d2 = date.getDate();
    var m2 = date.getMonth() + 1;
    var y2 = date.getFullYear();
  
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // Check for leap year
    if ((y2 % 4 == 0 && y2 % 100 != 0) || (y2 % 400 == 0)) {
        month[1] = 29;
    }

    // Handle invalid day input for the specified month
    if (d1 > month[m1 - 1]) {
        document.getElementById('age').innerHTML = 'Please enter a valid date.';
        return;
    }
  
    if(d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
  
    document.getElementById('age').innerHTML = 'Your Age is ' + y + ' Years ' + m + ' Months ' + d + ' Days';
}  
