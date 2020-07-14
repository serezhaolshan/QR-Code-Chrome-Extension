"use strict";

//  let btn = document.querySelector(".btn");
//  let adress = window.location.href;


chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    qrcode.makeCode(tabs[0].url);
}); // chrome api for current URL and using of qrcode library

 var qrcode = new QRCode(document.getElementById('qrcode'));

//  function generateQR() {
//  	qrcode.makeCode(adress);
//  	console.log('a');
//  }

//  btn.addEventListener('click', generateQR());

