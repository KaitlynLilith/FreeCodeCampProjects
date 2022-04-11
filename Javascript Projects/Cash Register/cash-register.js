function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    change = change.toFixed(2);
    var unchanged = cash - price;
    unchanged = unchanged.toFixed(2);
    var cidCopy = [...cid];
    var cidCopyRev = [...cid.reverse()];
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
    var statusChange = {
      status: "",
      change: []
    }
  
    var sum = 0;
    for (let i = 0; i < cidCopy.length; i++) {
      sum += cidCopy[i][1];
    }
    sum = Math.round(sum * 100) / 100;
    sum = sum.toFixed(2);
  
  
    console.log(sum);
    console.log(unchanged);
    if (sum < unchanged) {
        statusChange.status = "INSUFFICIENT_FUNDS";
        console.log("The third call gets stuck here!!!");
        console.log(statusChange);
        return statusChange;
    } else if (sum === unchanged) {
        statusChange.status = "CLOSED";
        statusChange.change = [...cidCopy];
        console.log(statusChange);
        return statusChange;
    } else {
        statusChange.status = "OPEN";
        console.log(statusChange);
  
        while (change >= 100) {
            if (cidCopyRev[0][1] >= 100) {
                drawer[0][1] += 100;
                change -= 100;
            } else {
                break;
            }
        }
        change = Math.round(change * 100) / 100;
        change = change.toFixed(2);
        console.log(change);
  
        while (change >= 20) {
            if (cidCopyRev[1][1] >= 20) {
                drawer[1][1] += 20;
                change -= 20;
            } else {
                break;
            }
        }
        change = Math.round(change * 100) / 100;
        change = change.toFixed(2);
        console.log(change);
  
        while (change >= 10) {
            if (cidCopyRev[2][1] >= 10) {
                drawer[2][1] += 10;
                change -= 10;
            } else {
                break;
            }
        }
        change = Math.round(change * 100) / 100;
        change = change.toFixed(2);
        console.log(change);
  
        while (change >= 5) {
            if (cidCopyRev[3][1] >= 5) {
                drawer[3][1] += 5;
                change -= 5;
            } else {
                break;
            }
        }
        change = Math.round(change * 100) / 100;
        change = change.toFixed(2);
        console.log(change);
  
        while (change >= 1) {
            if (cidCopyRev[4][1] >= 1) {
                drawer[4][1] += 1;
                change -= 1;
            } else {
                break;
            }
        }
        change = Math.round(change * 100) / 100;
        change = change.toFixed(2);
        console.log(change);
  
        while (change >= 0.25) {
            if (cidCopyRev[5][1] >= 0.25) {
                drawer[5][1] += 0.25;
                change -= 0.25;
            } else {
                break;
            }
        }
        change = Math.round(change * 100) / 100;
        change = change.toFixed(2);
        console.log(change);
  
        while (change >= 0.1) {
            if (cidCopyRev[6][1] >= 0.1) {
                drawer[6][1] += 0.1;
                change -= 0.1;
            } else {
                break;
            }
        }
        change = Math.round(change * 100) / 100;
        change = change.toFixed(2);
        console.log(change);
  
        while (change >= 0.05) {
            if (cidCopyRev[7][1] >= 0.05) {
                drawer[7][1] += 0.05;
                change -= 0.05;
            } else {
                break;
            }
        }
        change = Math.round(change * 100) / 100;
        change = change.toFixed(2);
        console.log(change);
  
        while (change >= 0.01) {
            if (cidCopyRev[8][1] >= 0.01) {
                drawer[8][1] += 0.01;
                change -= 0.01;
            } else {
                break;
            }
        }
    }
    change = Math.round(change * 100) / 100;
    change = change.toFixed(2);
    console.log(change);
  
    drawer = drawer.filter(item => item[1] !== 0);
    console.log(drawer);
    statusChange.change = [...drawer];
    console.log(statusChange);

    if (change > 0) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }
    }
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