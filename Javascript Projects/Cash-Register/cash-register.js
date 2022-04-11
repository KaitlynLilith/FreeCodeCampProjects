function checkCashRegister(price, cash, cid) {
    // Makes a variable to keep track of change owed and fix it to 2 decimal places
    var change = Number((cash - price).toFixed(2));

    // Makes a variable that holds the original change amount and fix it to 2 decimal places
    const unchanged = Number((cash - price).toFixed(2));

    // Copies the array from arguments
    var cidCopy = [...cid];
    // Reverses the array from arguments
    var cidCopyRev = [...cid.reverse()];

    // Makes a clean drawer to add change for the return object
    var drawer = [ 
        [ 'ONE HUNDRED', 0 ],
        [ 'TWENTY', 0 ],
        [ 'TEN', 0 ],
        [ 'FIVE', 0 ],
        [ 'ONE', 0 ],
        [ 'QUARTER', 0 ],
        [ 'DIME', 0 ],
        [ 'NICKEL', 0 ],
        [ 'PENNY', 0 ] ];
    // Makes a template for the return object
    var statusChange = {
        status: "",
        change: []
    };
  
    // Make a variable to hold the sum of all change
    var sum = 0;
    // For each amount in the given array
    for (let i = 0; i < cidCopy.length; i++) {
        // Add the amount of the second value in each element to the sum variable
        sum += cidCopy[i][1];
    }

    // Round the variable and fix it to 2 decimal places
    sum = Math.round(sum * 100) / 100;
    // Makes variable have 2 decimal places
    sum = sum.toFixed(2);

    // If sum is less than unchanged
    if (sum < unchanged) {
        // Change status to "INSUFFICIENT_FUNDS"
        statusChange.status = "INSUFFICIENT_FUNDS";
        // return the statusChange
        return statusChange;
        // If the sum is equal to unchanged
    } else if (sum == unchanged) {
        // Change status to "CLOSED"
        statusChange.status = "CLOSED";
        // Make the change in the return object the original array
        statusChange.change = [...cidCopy];
        // return the statusChange
        return statusChange;
        // If none of the previous statements work
    } else {
        // Change status to "OPEN"
        statusChange.status = "OPEN";
  
        // While change is greater than or equal to 100
        while (change >= 100) {
            // If the reverse argument copy is greater than or equal to 100
            if (cidCopyRev[0][1] >= 100) {
                // Add 100 to the return value
                drawer[0][1] += 100;
                // Subtract 100 from the reverse argument copy
                cidCopyRev[0][1] -= 100;
                // Subtract 100 from the change
                change -= 100;
                // If not
            } else {
                 // Break the while loop
                break;
            }
        }
        // Round the variable and fix it to 2 decimal places
        change = (Math.round(change * 100) / 100).toFixed(2);
  
        // While change is greater than or equal to 20
        while (change >= 20) {
            // If the reverse argument copy is greater than or equal to 20
            if (cidCopyRev[1][1] >= 20) {
                // Add 20 to the return value
                drawer[1][1] += 20;
                // Subtract 20 from the reverse argument copy
                cidCopyRev[1][1] -= 20;
                // Subtract 20 from the change
                change -= 20;
                // If not
            } else {
                 // Break the while loop
                break;
            }
        }
        // Round the variable and fix it to 2 decimal places
        change = (Math.round(change * 100) / 100).toFixed(2);
  
        // While change is greater than or equal to 10
        while (change >= 10) { 
            // If the reverse argument copy is greater than or equal to 10
            if (cidCopyRev[2][1] >= 10) {
                // Add 10 to the return value
                drawer[2][1] += 10;
                // Subtract 10 from the reverse argument copy
                cidCopyRev[2][1] -= 10;
                // Subtract 10 from the change
                change -= 10;
                // If not
            } else {
                // Break the while loop
                break;
            }
        }
        // Round the variable and fix it to 2 decimal places
        change = (Math.round(change * 100) / 100).toFixed(2);
  
        // While change is greater than or equal to 5
        while (change >= 5) {
            // If the reverse argument copy is greater than or equal to 5
            if (cidCopyRev[3][1] >= 5) {
                // Add 5 to the return value
                drawer[3][1] += 5;
                // Subtract 5 from the reverse argument copy
                cidCopyRev[3][1] -= 5;
                // Subtract 5 from the change
                change -= 5;
                // If not
            } else {
                 // Break the while loop
                break;
            }
        }
        // Round the variable and fix it to 2 decimal places
        change = (Math.round(change * 100) / 100).toFixed(2);

        // While change is greater than or equal to 1
        while (change >= 1) {
            // If the reverse argument copy is greater than or equal to 1
            if (cidCopyRev[4][1] >= 1) {
                // Add 1 to the return value
                drawer[4][1] += 1;
                // Subtract 1 from the reverse argument copy
                cidCopyRev[4][1] -= 1;
                // Subtract 1 from the change
                change -= 1;
                // If not
            } else {
                 // Break the while loop
                break;
            }
        }
        // Round the variable and fix it to 2 decimal places
        change = (Math.round(change * 100) / 100).toFixed(2);
  
        // While change is greater than or equal to 0.25
        while (change >= 0.25) {
            // If the reverse argument copy is greater than or equal to 0.25
            if (cidCopyRev[5][1] >= 0.25) {
                // Add 0.25 to the return value
                drawer[5][1] += 0.25;
                // Subtract 0.25 from the reverse argument copy
                cidCopyRev[5][1] -= 0.25;
                // Subtract 0.25 from the change
                change -= 0.25;
                // If not
            } else {
                 // Break the while loop
                break;
            }
        }
        // Round the variable and fix it to 2 decimal places
        change = (Math.round(change * 100) / 100).toFixed(2);

        // While change is greater than or equal to 0.1
        while (change >= 0.1) {
            // If the reverse argument copy is greater than or equal to 0.1
            if (cidCopyRev[6][1] >= 0.1) {
                // Add 0.1 to the return value
                drawer[6][1] += 0.1;
                // Subtract 0.1 from the reverse argument copy
                cidCopyRev[6][1] -= 0.1;
                // Subtract 0.1 from the change
                change -= 0.1;
                // If not
            } else {
                 // Break the while loop
                break;
            }
        }
        // Round the variable and fix it to 2 decimal places
        change = (Math.round(change * 100) / 100).toFixed(2);

        // While change is greater than or equal to 0.05
        while (change >= 0.05) {
            // If the reverse argument copy is greater than or equal to 0.05
            if (cidCopyRev[7][1] >= 0.05) {
                // Add 0.05 to the return value
                drawer[7][1] += 0.05;
                // Subtract 0.05 from the reverse argument copy
                cidCopyRev[7][1] -= 0.05;
                // Subtract 0.05 from the change
                change -= 0.05;
                // If not
            } else {
                 // Break the while loop
                break;
            }
        }
        // Round the variable and fix it to 2 decimal places
        change = (Math.round(change * 100) / 100).toFixed(2);

        // While change is greater than or equal to 0.01
        while (change >= 0.01) {
            // If the reverse argument copy is greater than or equal to 0.01
            if (cidCopyRev[8][1] >= 0.01) {
                // Add 0.01 to the return value
                drawer[8][1] += 0.01;
                // Subtract 0.01 from the reverse argument copy
                cidCopyRev[8][1] -= 0.01;
                // Subtract 0.01 from the change
                change -= 0.01;
                // Round the variable and fix it to 2 decimal places
                change = (Math.round(change * 100) / 100).toFixed(2);
                // If not
            } else {
                 // Break the while loop
                break;
            }
        }
    }
    // Round the variable and fix it to 2 decimal places
    change = (Math.round(change * 100) / 100).toFixed(2);
  
    drawer = drawer.filter(item => item[1] !== 0);
    statusChange.change = [...drawer];

    // If change is greater than zero
    if (change > 0) {
        // Return the "INSUFFICIENT_FUNDS" statusChange
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }
    }
    // Return the statusChange object
    return statusChange;
}
  
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// should return {status: "OPEN", change: [["QUARTER", 0.5]]}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
// should return {status: "INSUFFICIENT_FUNDS", change: []}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

// should return {status: "INSUFFICIENT_FUNDS", change: []}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
  
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);