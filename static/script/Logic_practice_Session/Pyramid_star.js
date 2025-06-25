function starPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = "";

        for (let j = 1; j < rows; j++) {
            line += " ";
        }

        for (let k = 1; k <= 2 * i - 1; k++) {
            line += "*";
        }
        console.log(line);
    }
}

const rows= prompt("Enter no. of rows: ");
starPyramid(rows);