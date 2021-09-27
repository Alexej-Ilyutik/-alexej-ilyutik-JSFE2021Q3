const mixRandom = () => Math.random() - 0.5;
let arr = Array.from(document.querySelectorAll(".Gallery__pic"));
 let arrSrcMix = arr.map((event) => event.src).sort(mixRandom);
arr.map((event, i) => (event.src = arrSrcMix[i]));
