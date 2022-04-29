"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlHttpResqusetInit = void 0;
var form;
var formData;
var imgFiles;
function xmlHttpResqusetInit(formId, fileInputName, postUrl) {
    form = document.getElementById(formId);
    formData = new FormData(form);
    imgFiles = formData.getAll(fileInputName);
    if (imgFiles.length >= 1) {
        ajax(formData, postUrl);
    }
}
exports.xmlHttpResqusetInit = xmlHttpResqusetInit;
function ajax(formData, postUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open("post", postUrl, true);
    xhr.onload = uploadComplete;
    xhr.onerror = uploadFailed;
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.upload.onloadstart = function () {
        let ot = new Date().getTime();
        let oloaded = 0;
    };
    console.log('post');
    xhr.send(formData);
}
let response;
function uploadComplete(res) {
    console.log(res);
    response = JSON.parse(res.target.responseText);
    if (response.Success) {
        alert(response.Message);
        location.reload();
    }
    else {
        alert("!!!:" + response.Message);
    }
}
function uploadFailed(res) {
    response = JSON.parse(res.target.responseText);
    alert(response.Message);
}
