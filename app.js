// T A S K  1
console.log(' T A S K  1 ')

const ex = [];

function QC (quipu) {

    for (const i in quipu) {
        const pr = (i > 0) ? quipu[i-1] : null;
        const ch = quipu[i];
        const last = ex.length-1;

        if (['(',')','*','/','+','-'].includes(ch))
            ex.push(ch);

        if (ch === '@') {
            if (pr === '@')
                ex[last] += 1;
            else if (pr === '~' && ex[last]%10 === 0)
                ex[last] = ex[last] * 10 + 1;
            else if (pr === '~')
                ex[last] = ex[last] * 10 + 1;
            else if (!['~', '@'].includes(pr))
                ex.push(1);
        }

        if (ch === '~' && pr === '~')
            ex[last] = ex[last] * 10;
    }

    const result = eval(ex.join(''));
    const finRes = convertRes(result);

    return finRes;
}

function convertRes(num) {
    let s = `${num}`;
    let r = '';

    for (let ch of s)
        r += (ch === '0') ? '~' : '@'.repeat(+ch) + '~';

    if (s[s.length-1] !== '0')
        r = r.slice(0, -1);

    return r;
}

console.log(QC('@~@@*@@'));

// T A S K  2
console.log(' T A S K  2 ')

function findPartMaxProd (n) {
    const partitions = [];
    let maxProduct = 0;
  
    function getPartition(x, k = x, s = '', multiValue = 1) {
      if (x == 0) {
        if (multiValue > maxProduct) {
          maxProduct = multiValue;
        }
        const partition = [multiValue, Array.from(s).map(Number)];
        partitions.push(partition);
      }
      for (let i = 1; i <= Math.min(k, x); i++) {
        getPartition(x - i, i, s + i, multiValue * i);
      }
  
      return partitions;
    }
  
    getPartition(n);
    const partMaxProd = partitions.filter(item => item[0] === maxProduct)
      .map(item => item[1])
      .reverse();
    partMaxProd.push(maxProduct);
  
    return partMaxProd;
}

console.log(findPartMaxProd(8));

// T A S K  3
console.log(' T A S K  3 ')

function tickets (peopleInLine) {

    var a25 = 0,a50 = 0;
    for(var i = 0;i<peopleInLine.length;i++){
      if(peopleInLine[i] == 25){
        a25 += 1;
      }
      if(peopleInLine[i] == 50){
        a25 -= 1; a50 += 1;
      }
      if(peopleInLine[i] == 100){
        if(a50 == 0 && a25 >= 3){
          a25 -= 3;
        }else{
          a25 -= 1; a50 -= 1;
        }
      }
      if(a25 < 0 || a50 < 0){
         return 'NO';
      }
    }
    return 'YES';
}

console.log(tickets([25, 25, 50]));