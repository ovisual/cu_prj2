let pg2op=document.getElementById('output2');

let btn=document.getElementById('chkk');
let grades=document.getElementById('grades');
let units=document.getElementById('units');


//units.innerHTML=obj.units

let an=localStorage.getItem('report')
let obj=JSON.parse(an)
let gg=obj.grades
let uu=obj.unit
grdd=0
gg.forEach((i)=>{
    ggg=document.createElement('div')

    let gb=grades.appendChild(ggg)
    
    gb.innerHTML=i
    
})

uu.forEach((i)=>{
    uuu=document.createElement('section')

    let unitss=units.appendChild(uuu)
    
    unitss.innerHTML=i
})

btn.onclick= ch
function ch(){
  
    pg2op.value=obj.gp

        }