let senderName = "";
let additionalText = "";

let senderNameInput = document.getElementById("senderName");
let additionalTextInput = document.getElementById("additionalText");

let senderNameTarget = document.getElementById("senderNameTarget");
let additionalTextTarget = document.getElementById("additionalTextTarget");
let lebaranCardResult = document.getElementById("lebaranCardResult");
let resultModalBtn = document.getElementById("resultModalBtn");
let choosenSrc = "";

let loadingText = document.getElementById("loadingText")



window.addEventListener('load', () => {
    loadingText.hidden = true;
    resultModalBtn.disabled = true;
})

let noPictureSelected = true;
resultModalBtn.addEventListener('click', () => {
    if (noPictureSelected) {
        alert("Silahkan pilih gambar terlebih dahulu!");
        return
    } else {
        loadingText.innderHtml = "Sedang Mengunduh Gambar ...";
        loadingText.hidden = true;
        senderName = senderNameInput.value;
        additionalText = additionalTextInput.value;

        senderNameTarget.innerText = senderName;
        additionalTextTarget.innerText = additionalText;
    }
})

function htmlToElement(html) {
    let temp = document.createElement('div');
    temp.innerHTML = html;
    return temp;
}


let downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener('click', () => {


    loadingText.hidden = false;
    var html = `
                <div id="lebaranCardResult">
                    <img src=${choosenSrc} alt="LebaranCard Image" id="lebaranCardImageResult">
                    <p className="text-center" id="senderNameTargetResult">${senderName}</p>
                    <p className="text-center" id="additionalTextTargetResult">${additionalText}</p>
                </div>`;
    var tempResult = document.getElementById("tempResult");
    tempResult.innerHTML = html;

    var node = document.getElementById("lebaranCardResult")


    domtoimage.toBlob(node)
        .then(function(blob) {
            saveAs(blob, `KartuLebaran - ${senderName}.png`);
            tempResult.innerHTML = "";
            loadingText.innerText = "Gambar Telah tersimpan"
        });
})


let lebaranCardOptions = document.querySelectorAll(".lebaranCardOption");

function updateSelectedId(id) {
    lebaranCardOptions.forEach((option) => {
        if (option.id == id) {
            option.classList.add("selectedOption")
        } else {
            option.classList.remove("selectedOption")
        }
    })
}



let lebaranCard = document.getElementById("lebaranCard");

let lebaranCardImage = document.getElementById("lebaranCardImage");

lebaranCardOptions.forEach((option) => {
    option.addEventListener('click', (e) => {


        lebaranCardImage.src = option.src
        choosenSrc = option.src;




        updateSelectedId(e.target.id);
        noPictureSelected = false;
        resultModalBtn.disabled = false;

    })
})