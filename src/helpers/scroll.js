

export default function SmoothVerticalScrolling(e, time = 275, where = "") {

    var smoothScrollFeature = 'scrollBehavior' in document.documentElement.style;

    if(smoothScrollFeature)
        return e.scrollIntoView({ behavior: "smooth" })

    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}