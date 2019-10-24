let shownModal = false;

function hideModal() {
    document.getElementById('settings-modal').classList.remove('show');
    shownModal = false;
}

function showModal() {
    document.getElementById('settings-modal').classList.add('show');
    document.getElementById('table-size').value = rowLength;
    shownModal = true;
}

function saveTableSize() {
    let elem = document.getElementById('table-size');
    rowLength = Number(elem.value);
    cardAmount =  rowLength*rowLength;
    restart();
    hideModal()
}
