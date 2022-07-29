function zakah() {
    let zakat = document.getElementById('amount').value / 40;
    document.getElementById('zakat').innerText = zakat;
}
function wirsah() {
    let inheritanceOfWife = document.getElementById('amount').value /8;
    let inheritanceOfson = document.getElementById('amount').value - inheritanceOfWife;
    document.getElementById('zakat').innerText = `The share of wife is (${inheritanceOfWife}) and share of son is (${inheritanceOfson})`;
}