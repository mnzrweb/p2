// scripts
function id(x) {
    return document.querySelector('#' + x);
}
function cls(y) {
    return document.querySelector('.' + y);
}
function tag(z) {
    return document.querySelector(z);
}
const ftoken = window.location.hash;
const myodp1 = 'https://onedrive.live.com/download?resid=';
const myodp2 = '&authkey=';
const yturl0 = 'https://youtu.be/';
const docbody = document.querySelector('body');
if (ftoken.substr(ftoken.length - 17).slice(0, 15) == 'dy5grvgf9ufyc5f') {
    let dataanchor = document.createElement('a');
    dataanchor.setAttribute('id', 'dataanchor');
    dataanchor.setAttribute('href', '#');
    dataanchor.setAttribute('value', ftoken.substr(1));
    docbody.appendChild(dataanchor);
    dataanchor.click();
}
if (id('dataanchor')) {
    let dataanchor = id('dataanchor').getAttribute('value');
    let identifier = dataanchor.slice(0, 6);
    let dataquery = dataanchor.substr(6);
    let prowait = dataanchor.substr(dataanchor.length - 2);
    let selectRes0 = prowait;
    if (window.location.origin == 'file://') {
        fpath = './Data';
    } else {
        fpath = 'https://mnzrweb.github.io/p2/Data';
    }
    if (selectRes0 == 'ra') {
        selectRes = 144;
    } else if (selectRes0 == 'rb') {
        selectRes = 240;
    } else if (selectRes0 == 'rc') {
        selectRes = 360;
    } else if (selectRes0 == 'rd') {
        selectRes = 480;
    } else if (selectRes0 == 're') {
        selectRes = 720;
    } else if (selectRes0 == 'rf') {
        selectRes = 1080;
    } else if (selectRes0 == 'rg') {
        selectRes = 1440;
    } else if (selectRes0 == 'rh') {
        selectRes = '4k';
    } else if (selectRes0 == 'ri') {
        selectRes = '8k';
    } else if (selectRes0 == 'aa') {
        selectRes = 'mp3';
    } else if (selectRes0 == 'ab') {
        selectRes = 'm4a';
    } else if (selectRes0 == 'ac') {
        selectRes = 'webm_audio';
    } else if (selectRes0 == 'ad') {
        selectRes = 'aac';
    } else if (selectRes0 == 'ae') {
        selectRes = 'flac';
    } else if (selectRes0 == 'af') {
        selectRes = 'opus';
    } else if (selectRes0 == 'ag') {
        selectRes = 'ogg';
    } else if (selectRes0 == 'ah') {
        selectRes = 'wav';
    }
    let adp1 = id('adplc1');
    let adp2 = id('adplc2');
    let adp3 = id('adplc3');
    let proelement = '<img class="proimg" src="' + fpath + '/prcs.gif">';
    if (identifier == 'y6burf') {
        ytdowngenfun();
    } else {
        downgenfun();
    }
    function ytdowngenfun() {
        let yturlkey = id('dataanchor').getAttribute('value').substr(6).slice(0, 11);
        let yturl = yturl0 + yturlkey;
        let downnotic = "<h3>Once the file is transferred to a stable, secure and fast server according to your IP. So do not use Virtual Proxy Network (VPN) else download will be dropped. If all goes well, the file will then be available for the fastest and restartable download.</h3>";
        let ytdownpluginurl = 'https://loader.to/api/button/?url=' + yturl + '&f=' + selectRes + '&color=000000';
        let ytdownplugin = '<h3>Click below Button to Start Processing.</h3><div class="mydiv disableCM" style="width: 300px; display: flex; height: 29px; overflow: hidden; margin: 20px auto; border-radius: 25px;"><iframe class="myframe" id="myframe" scrolling="no" src="' + ytdownpluginurl + '" sandbox="allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" style="width: 1000px; height: 70px; border: 0; margin: -15px 0px;"></iframe></div>' + downnotic + '';
        let jumpanchor = document.createElement('a');
        jumpanchor.setAttribute('id', 'jumpanchor');
        jumpanchor.setAttribute('href', '#adplc2');
        docbody.appendChild(jumpanchor);
        adp2.innerHTML = ytdownplugin;
        setTimeout(() => {
            jumpanchor.click();
            jumpanchor.remove();
            id('dataanchor').setAttribute('href', '#Processing...');
            id('dataanchor').click();
        }, 200);
        var ytdownpluginact = setInterval(function () {
            var elem = document.activeElement;
            if (elem && elem.id == 'myframe') {
                clearInterval(ytdownpluginact);
                return elem.setAttribute('style', 'visibility:hidden;width: 1000px; height: 70px; border: 0; margin: -20px 0px;'), setTimeout(() => { elem.style.visibility = 'visible'; }, 500);
            }
        }, 100);
    }
    function downgenfun() {
        adp1.innerHTML = '<img class="adimg" src="' + fpath + '/msg0.png"><div id="downbtn" class="btnv2 adbtn">Proceed</div>';
        setInterval(() => {
            adp1.style.height = adp1.children[0].clientHeight + adp1.children[1].clientHeight + 11 + 'px';
        }, 500);
        window.onresize = function () {
            adp1.style.height = adp1.children[0].clientHeight + adp1.children[1].clientHeight + 11 + 'px';
        }
        id('downbtn').onclick = function () {
            id('downbtn').remove();
            adp1.children[0].style.opacity = 50 + '%';
            adp1.innerHTML = adp1.innerHTML + proelement;
            setTimeout(() => {
                adp1.innerHTML = '<img class="adimg" src="' + fpath + '/msg1.png"><div id="downbtn" class="btnv2 adbtn">Continue...</div>';
                adp1.children[0].style.opacity = 100 + '%';
                id('downbtn').onclick = function () {
                    let jumpanchor = document.createElement('a');
                    jumpanchor.setAttribute('id', 'jumpanchor');
                    jumpanchor.setAttribute('href', '#adplc2');
                    docbody.appendChild(jumpanchor);
                    setTimeout(() => {
                        jumpanchor.click();
                        jumpanchor.remove();
                        id('dataanchor').setAttribute('href', '#Processing...');
                        id('dataanchor').click();
                    }, 200);
                    adp1.innerHTML = '';
                    adp1.style.height = 0 + 'px';
                    downexpofun();
                }
            }, prowait * 1000);
        }
    }
    function downexpofun() {
        adp2.innerHTML = '<img class="adimg" src="' + fpath + '/msg2.png"><div id="downbtn" class="btnv2 adbtn">Fetch Source</div>';
        setInterval(() => {
            adp1.style.height = adp2.children[0].clientHeight + adp2.children[1].clientHeight + 11 + 'px';
        }, 500);
        window.onresize = function () {
            adp1.style.height = adp2.children[0].clientHeight + adp2.children[1].clientHeight + 11 + 'px';
        }
        id('downbtn').onclick = function () {
            id('downbtn').remove();
            adp2.children[0].style.opacity = 50 + '%';
            adp2.innerHTML = adp2.innerHTML + proelement;
            setTimeout(() => {
                adp2.innerHTML = '<img class="adimg" src="' + fpath + '/msg3.png"><div id="downbtn" class="btnv2 adbtn">Generate Download</div>';
                adp2.children[0].style.opacity = 100 + '%';
                id('downbtn').onclick = function () {
                    id('downbtn').remove();
                    adp2.children[0].style.opacity = 50 + '%';
                    adp2.innerHTML = adp2.innerHTML + proelement;
                    setTimeout(() => {
                        adp2.innerHTML = '<img class="adimg" src="' + fpath + '/msg4.png"><div id="downbtn" class="btnv2 adbtn">Go to Download</div>';
                        adp2.children[0].style.opacity = 100 + '%';
                        id('downbtn').onclick = function () {
                            let jumpanchor = document.createElement('a');
                            jumpanchor.setAttribute('id', 'jumpanchor');
                            jumpanchor.setAttribute('href', '#adplc3');
                            docbody.appendChild(jumpanchor);
                            jumpanchor.click();
                            jumpanchor.remove();
                            id('dataanchor').setAttribute('href', '#Done!');
                            id('dataanchor').click();
                            adp2.innerHTML = '';
                            adp2.style.height = 0 + 'px';
                            finalexpofun();
                        }
                    }, prowait * 1000);
                }
            }, prowait * 1000);
        }
    }
    function finalexpofun() {
        if (identifier == 'gdr65w') {
            let id1 = dataquery.slice(0, 22);
            let id2 = dataquery.slice(22, 37);
            let dataurl = myodp1 + id1 + myodp2 + id2;
            adp3.innerHTML = '<img class="adimg" src="' + fpath + '/msg5.png"><div id="downbtn" class="btnv2 adbtn">Download</div>';
            setTimeout(() => {
                window.onresize = function () {
                    adp1.style.height = adp3.children[0].clientHeight + adp3.children[1].clientHeight + 11 + 'px';
                }
            }, 500);
            setInterval(() => {
                adp1.style.height = adp3.children[0].clientHeight + adp3.children[1].clientHeight + 11 + 'px';
            }, 500);
            if (id('downbtn')) {
                id('downbtn').onclick = function () {
                    if (id('dataurlfrm')) { id('dataurlfrm').remove() };
                    let dataurlfrm = document.createElement('iframe');
                    dataurlfrm.setAttribute('src', dataurl);
                    dataurlfrm.setAttribute('id', 'dataurlfrm');
                    dataurlfrm.style.display = 'none';
                    docbody.appendChild(dataurlfrm);
                }
            }
        }
    }
}























function home() {
    id('html').scrollIntoView({ behavior: 'smooth' });
}
