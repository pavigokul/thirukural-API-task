let form=document.querySelector('.thiruform');

let thiruinput=document.querySelector('.thiruinput');

let thiruinfo=document.querySelector('.thiruinfo');

let searchButton=document.querySelector('.searchButton');

async function getdetails(num){
    try{
        let response=await fetch(`https://api-thirukkural.vercel.app/api?num=${num}`);

        let data=await response.json();

        console.log(data);

        let paragraph1=document.createElement('p');
        thiruinfo.innerHTML='';
        paragraph1.innerHTML=`<b>அதிகாரம்:</b> ${data.chap_tam}`;
        thiruinfo.appendChild(paragraph1);

        let paragraph2=document.createElement('p');
        paragraph2.innerHTML=`<b>இயல்:</b> ${data.chapgrp_tam}`;
        thiruinfo.appendChild(paragraph2);


        let paragraph3=document.createElement('p');
        paragraph3.innerHTML=`<b>குறள்:</b> ${data.number}`;
        thiruinfo.appendChild(paragraph3);

        let paragraph4=document.createElement('p');
        paragraph4.innerHTML=`<b>"</b>${data.line1}`;
        thiruinfo.appendChild(paragraph4);

        let paragraph5=document.createElement('p');
        paragraph5.innerHTML=`${data.line2}<b>"</b>`;
        thiruinfo.appendChild(paragraph5);

        let paragraph6=document.createElement('p');
        paragraph6.innerHTML=`<b>விளக்கம்:</b> ${data.tam_exp}.`;
        thiruinfo.appendChild(paragraph6);

    }catch(error){
        console.error('error fetching the details of the Thirukural');
    }
}



function handleSubmit(event){
    event.preventDefault();

    let num=thiruinput.value;

    getdetails(num);
}

form.addEventListener('submit',handleSubmit);
searchButton.addEventListener('click',handleSubmit);

