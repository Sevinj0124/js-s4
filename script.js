
const telebelerS4 = [ 
    {
   list:1,
    ad:'Jale',
    soyad:'Zuliyeva',
    tehsili:{
        ordaMekteb:"63 nomreli mekteb",
        bakalavriatura:'ADNSU',
        magistratura:"AzTU",
        doktorantura:{
            mudafieIli:'2028',
            mudafieMovzusu:'IT esaslari'
        }
       
    }
},


{
    list:2,
    ad:'Ayxan',
    soyad:'Mahmudzade',
    tehsili:{
        ordaMekteb:"153 nomreli mekteb",
        bakalavriatura:'Aztu',
        magistratura:"BANM",
        doktorantura:{
            mudafieIli:'2034',
            mudafieMovzusu:'IT esaslari'
        }
      
    }
},


{
    list:3,
    ad:'Sevinc',
    soyad:'Cavadova',
    tehsili:{
        ordaMekteb:"1 nomreli mekteb",
        bakalavriatura:'UNEC',
        magistratura:"ADA",
        doktorantura:{
            mudafieIli:'2033',
            mudafieMovzusu:'Kiber hucumlarin analizi'
        }
      
    }
},

{
    list:4,
    ad:'Perviz',
    soyad:'Abdullayev',
    tehsili:{
        ordaMekteb:"18 nomreli mekteb",
        bakalavriatura:'ADNSU',
        magistratura:"BANM",
        doktorantura:{
            mudafieIli:'2033',
            mudafieMovzusu:'SIEM'
        }
      
    }
},


]



// console.log('MIT Academyde "Front-end uzre" tehsil alan '+ telebelerS4 [0].ad + " " + telebelerS4[0].soyad)
// console.log('MIT Academyde "Front-end uzre" tehsil alan '+ telebelerS4 [1].ad + " " + telebelerS4[1].soyad)
// console.log('MIT Academyde "Front-end uzre" tehsil alan '+ telebelerS4 [2].ad + " " + telebelerS4[2].soyad)



for( let i=0; i<telebelerS4.length; i++)
 {
    // console.log('MIT Academyde "Front-end uzre" tehsil alan '+ telebelerS4 [i].ad + " " + telebelerS4 [i].soyad + " " + telebelerS4[i].tehsili.bakalavriatura)


document.querySelector("#melumatlar").innerHTML += `<tr>
<th scope="row">${telebelerS4[i].list}</th>
<td>${telebelerS4[i].ad}</td>
<td>${telebelerS4[i].soyad}</td>
<td>${telebelerS4[i].tehsili.ordaMekteb}</td>
<td>${telebelerS4[i].tehsili.bakalavriatura}</td>
<td>${telebelerS4[i].tehsili.magistratura}</td>
</tr>`
}