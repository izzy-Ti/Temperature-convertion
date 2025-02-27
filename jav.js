let deg=document.getElementById(`temp`);
let far=document.getElementById(`tof`);
let cal=document.getElementById(`toc`);
let par=document.getElementById(`par`);
let ans;

function convert(){
    
    if(far.checked){
        ans=Number(deg.value);
        ans= ans * 9 / 5 + 32;  
        par.textContent=`F= ${ans.toFixed(2)}`;
    }
    else if(cal.checked){
        ans=Number(deg.value);
        ans= (ans-32) * (5 / 9);
        par.textContent=`C= ${ans.toFixed(2)}`;
    }
    else{
        par.textContent=`Please select a unit`;
    }
}


