
function zerTim(time) {
    return time < 10 ? '0'+time : time;
}
function digital(twe) {
    if (twe > 12) {
        return twe - 12;
    } else if (twe == 0) {
        return 12;
    } else {
        return twe;
    }
}
function dayy(day) {
    if (day == 0) {
        return 'Sun';
    } else if (day == 1) {
        return 'Mon';
    } else if (day == 2) {
        return 'Tue';
    } else if (day == 3) {
        return 'Wed';
    } else if (day == 4) {
        return 'Thu';
    } else if (day == 5) {
        return 'Fri';
    } else if (day == 6) {
        return 'Sat';
    } else {
        return 'nai'
    }
}
function monthName(month) {
    if (month == 0) {
        return 'Jan';
    } else if (month == 1) {
        return 'Feb';
    } else if (month == 2) {
        return 'Mar';
    } else if (month == 3) {
        return 'Apr';
    } else if (month == 4) {
        return 'May';
    } else if (month == 5) {
        return 'Jun';
    } else if (month == 6) {
        return 'Jul';
    } else if (month == 7) {
        return 'Aug';
    } else if (month == 8) {
        return 'Sep';
    } else if (month == 9) {
        return 'Oct';
    } else if (month == 10) {
        return 'Nov';
    } else if (month == 11) {
        return 'Dec';
    }
}



function loader(count, starting) {
    return (count*100) / starting ;
}