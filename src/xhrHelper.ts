// import { getAuthHeader } from "./file";


/**
 * 功能-用于Form表单批量图片的压缩和上传
 *Author:leeneo
 *Contact:leeneo@xingzhihen.com
 *posturl:上传图片的服务url
 *postFormID:要提交的form表单的id
 *fileInputName：要上传的图片关联input的name
 */
///

var form: HTMLFormElement;
var formData: FormData;
var imgFiles: File[];

export function xmlHttpResqusetInit(formId: string, fileInputName: string, postUrl: string): void {
    form = document.getElementById(formId) as HTMLFormElement;
    formData = new FormData(form);
    imgFiles = formData.getAll(fileInputName) as File[];
    if (imgFiles.length >= 1) {
        ajax(formData, postUrl);
    }
}

function ajax(formData: any, postUrl: string) {
    var xhr = new XMLHttpRequest(); // XMLHttpRequest 对象
    xhr.open("post", postUrl, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
    xhr.onload = uploadComplete; //请求完成
    xhr.onerror = uploadFailed; //请求失败
    // xhr.setRequestHeader("Authorization", getAuthHeader() as string);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //xhr.upload.onprogress = progressFunction;//【上传进度调用方法实现】
    xhr.upload.onloadstart = function () { //上传开始执行方法
        let ot = new Date().getTime(); //设置上传开始时间
        let oloaded = 0; //设置上传开始时，以上传的文件大小为0
    };
    console.log('post');
    xhr.send(formData); //开始上传，发送form数据
}
let response: any;

//上传成功响应
function uploadComplete(res: any) {
    console.log(res)
    response = JSON.parse(res.target.responseText);
    //服务断接收完文件返回的结果
    //if ($("#hidStatus").val() == 0) {
    //    alert("发布成功！");
    //    location.reload();
    //}
    if (response.Success) {
        alert(response.Message);
        location.reload();
    }
    else {
        alert("!!!:" + response.Message);
    }

}
//上传失败
function uploadFailed(res: any) {
    response = JSON.parse(res.target.responseText);
    alert(response.Message);
}

