function o(){let l=document.getElementById("input").value.split(`
`),t=50,i=0;for(let f of l)[t,i]=n(f.substring(0,1),Number(f.substring(1)),t,i);let e=document.getElementById("output");e.innerText=i}function n(s,l,t,i){let e=0;for(s==="L"?(t===0&&e--,t-=l):t+=l;t<0;)t+=100,e++;for(;t>100;)t-=100,e++;return t%100===0&&(t=0,e++),s==="L"&&t===0&&e===0&&e++,[t,i+(e<0?0:e)]}export{o as default};
