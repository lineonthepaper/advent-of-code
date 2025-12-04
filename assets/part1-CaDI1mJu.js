function o(){let t=document.getElementById("input").value.split(`
`),e=50,u=0;for(let r of t)e+=i(r.substring(0,1),Number(r.substring(1))),e%=100,e===0&&u++;let l=document.getElementById("output");l.innerText=u}function i(n,t){return n==="L"?-t:t}export{o as default};
