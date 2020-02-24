module.exports = function toReadable(num) {
    let a = 0;
    let naturals = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let doubleRound = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(num <= 19) {
        for(let i = 0; i <= num; i++){
           a = naturals[i];
        } return a;
    }
        
    let b = 0;
    if(num < 100 && num > 19){
        num = String(num).split("");

        for(let i = -1;i < parseInt(num[0]-1); i++) {
            a = doubleRound[i];
        }

        for(i = 1; i <= parseInt(num[1]); i++) {
            b = naturals[i];
        }

        if(num[1] < 1){
          return `${a}`  
        }

        return `${a} ${b}`
    }

    let c = 0;
    if(num >= 100){
        num = String(num).split("");
        if(parseInt(num[1]) < 2 && parseInt(num[2]) >= 0) {
            for(let i = 1;i <= parseInt(num[0]); i++) {
                a = naturals[i];
            }  
            num = num.slice(1).join('');

            if(num === '00') {
                return `${a} hundred`
            }

            for(i = 0; i <= num; i++) {
                b = naturals[i];
            } 

            return `${a} hundred ${b}`   
        } else {
            for(let i = 1;i <= parseInt(num[0]); i++) {
                a = naturals[i];
            }

            for(i = 0; i <= parseInt(num[1]-2); i++) {
                b = doubleRound[i];
            }

            for(i = 1; i <= parseInt(num[2]); i++) {
                c = naturals[i];
            }

            if(num[1] < 1 && num[2] < 1){
               return `${a} hundred`  
            } else if(num[2] < 1 && num[1] >= 1) {
                return `${a} hundred ${b}`
            }

            return `${a} hundred ${b} ${c}`
        }
    }
}
