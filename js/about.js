const btnCvFr = document.getElementById("resume-fr");
const btnCvEn = document.getElementById("resume-en");

btnCvFr.addEventListener("click", () => {
    openResumeFr()
})

btnCvFr.addEventListener("click", () => {
    openResumeEn()
})

function openResumeFr() {
    let newTab = document.createElement('a');
    newTab.href = "https://drive.google.com/file/d/1crzaER7lyeycV82aB6oB-kNWsok7hgx-/view";
    newTab.target = "_blank";
    newTab.click();
}

function openResumeEn() {
    let newTab = document.createElement('a');
    newTab.href = "#";
    newTab.target = "_blank";
    newTab.click();
}