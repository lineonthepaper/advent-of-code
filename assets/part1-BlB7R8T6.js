function o(){let n=document.getElementById("input").value.split(`
`),t=0;for(let e of n)t+=r(e);let l=document.getElementById("output");l.innerText=t}function r(u){let n=0;for(let t=0;t<u.length-1;t++){let l=u[t]+"";for(let e=t;e<u.length;e++)t!==e&&Number(l+u[e])>n&&(n=Number(l+u[e]))}return n}export{o as default};
