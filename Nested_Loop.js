const ROWS = 6;

for (let i = 1; i <= ROWS; i++) {

    let line = "";

    // starting value depends on row number
    let value = i % 2;

    for (let j = 1; j <= i; j++) {
        line += value + " ";
        value = 1 - value; // toggle between 0 and 1
    }

    console.log(line.trim());
}
