
const submit=document.getElementById('btn')
const result=document.getElementById('output')
const ci=document.getElementById('ci')
const gntBtn=document.getElementById('gbtn')
const grd=document.getElementById('grade')
const unit=document.getElementById('unit')
const gd=document.getElementById("gd")
const rfs=document.querySelector(".rfs")




// courses=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

//units=[2,2,2,1,0,3,2,1]
grades2=[70,70,70,70,70,70,70,70]

gntBtn.onclick=generate
function generate(){
    let n=1
    ids=[]

    while (n<=ci.value){
        let g=document.createElement('input')
        g.id=`g${n}`
        ids.push(g.id)
        g.placeholder=`GRD ${n}`

        gd.appendChild(g)
        n++
    }
    // console.log(gd)
    // console.log(ids)

}



submit.onclick= chck
function chck(){
    grr=[]
    for(i=0;i<ids.length;i++){
        grr.push(parseInt(document.getElementById(`${ids[i]}`).value))
    }

//     const g1=document.getElementById('g1')
// const g2=document.getElementById('g2')
// const g3=document.getElementById('g3')
// const g4=document.getElementById('g4')
// const g5=document.getElementById('g5')
// const g6=document.getElementById('g6')
// const g7=document.getElementById('g7')
// const g8=document.getElementById('g8')
let units=unit.value.split(",")
console.log(grr)
// console.log(gd)

let unitss = units.map(function(str) {
    return parseInt(str);
  });
// console.log(units)

    // grades=[g1.value,g2.value,g3.value,g4.value,g5.value,g6.value,g7.value,g8.value]

    score_unit=grr.map((x)=>x>70?5:x>60?4:x>50?3:x>40?2:1)
    //console.log(score_unit)

    let tcu=0;
    for(let i of unitss){
        tcu+=i
    }
    //console.log(tcu)
    tgp=0
    for (k=0;k<score_unit.length;k++){
        gp=unitss[k]*score_unit[k]
        tgp+=gp
    }
    //console.log(tgp)

    let gpa=tgp/tcu
    //console.log(gpa)
    output.value=gpa.toFixed(2)
    //console.log(typeof gpa)
    //console.log(typeof toString(gpa))

    localStorage.setItem('report',JSON.stringify({grades:grr,gp:gpa, unit:units}))

    

}

rfs.addEventListener('click', ()=>{
    location.reload()
})








