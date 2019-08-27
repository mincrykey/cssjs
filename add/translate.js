//简体中文与繁体中文切换
transurl = window.location.href;
function translate_zh_sg(){
    var transzhsg = "?variant=zh-sg"
    var transurl = transurl+transzhsg
    window.location.href=transurl
}
function translate_zh_tw(){
    var transzhtw = "?variant=zh-tw"
    var transurl = transurl+transzhtw
    window.location.href=transurl
}