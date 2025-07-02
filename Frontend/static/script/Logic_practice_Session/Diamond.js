function starDiamond(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";
        for (let j = 1; j <= rows-i; j++) {
            line += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += "*";
        }
        console.log(line);
    }
    for (let i = rows; i >=1; i--) {
        if (i === rows){
            continue;
        }
        else{
            let line = "";
            for (let j = 1; j <= rows-i; j++) {
                line += " ";
            }
            for (let k = 1; k <= 2 * i - 1; k++) {
                line += "*";
            }
            console.log(line);
        }
    }
}
const rows= prompt("Enter no. of rows: ");
starDiamond(rows);