document.getElementById("absenForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const namaInput = document.getElementById("nama");
    const nama = namaInput.value.trim();

    if (nama === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    const tabel = document.getElementById("tabelAbsen").getElementsByTagName("tbody")[0];
    const barisBaru = tabel.insertRow();

    const no = tabel.rows.length;
    const waktu = new Date().toLocaleString("id-ID");

    const cellNo = barisBaru.insertCell(0);
    const cellNama = barisBaru.insertCell(1);
    const cellWaktu = barisBaru.insertCell(2);

    cellNo.textContent = no;
    cellNama.textContent = nama;
    cellWaktu.textContent = waktu;

    namaInput.value = "";
});
