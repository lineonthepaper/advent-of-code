function i(){let u=document.getElementById("input").value.split(`
`),t=0;for(let l of u)t+=o(l);let n=document.getElementById("output");n.innerText=t}function o(e){let u="",t=-1,n=11;for(let l=0;l<12;l++){let r=String(Math.max(...Array.from(e.substring(t+1,e.length-n)).map(Number)));u+=r,t=e.substring(t+1,e.length-n).indexOf(r)+t+1,n--}return Number(u)}export{i as default};
