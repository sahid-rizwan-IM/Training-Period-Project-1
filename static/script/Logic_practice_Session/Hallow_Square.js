const square=prompt("enter a number of rows and columns for square:");
for(let row=1;row<=square;row++){
    if (row==1||row==square){
        for(let col=1;col<=square;col++){
            process.stdout.write("*\t");
        }
        process.stdout.write('\n');
    }
    if (row!=1 && row!=square){
        for(let col=1;col<=square;col++){
            if (col==1||col==square){
                process.stdout.write("*\t");
            }
            else{
                process.stdout.write("\t");
            }
        }
        process.stdout.write('\n');
    }
}