const kuis = [
    {
        pertanyaan: "Apa ibu kota Indonesia?",
        pilihan: ["Jakarta", "Bandung", "Surabaya"],
        jawabanBenar: 0 // Index jawaban benar
    },
    {
        pertanyaan: "Apa ibu kota Prancis?",
        pilihan: ["Paris", "London", "Berlin"],
        jawabanBenar: 0
    },
    {
        pertanyaan: "Apa ibu kota Malaysia?",
        pilihan: ["Hanoi", "Kuala Lumpur", "Jakarta"],
        jawabanBenar: 1
    },
    
];

let soalSekarang = 0;
let skor = 0;

function tampilkanPertanyaan() {
    const pertanyaan = kuis[soalSekarang];
    document.getElementById('pertanyaan').textContent = pertanyaan.pertanyaan;

    let pilihanJawaban = '';
    pertanyaan.pilihan.forEach((pilihan, index) => {
        pilihanJawaban += `<input type="radio" name="jawaban" value="${index}"> ${pilihan}<br>`;
    });
    document.getElementById('pilihan-jawaban').innerHTML = pilihanJawaban;
}

function cekJawaban() {
    const jawabanBenar = kuis[soalSekarang].jawabanBenar;
    const jawabanPengguna = parseInt(document.querySelector('input[name="jawaban"]:checked').value);

    if (jawabanBenar === jawabanPengguna) {
        skor++;
        alert("Jawaban benar!");
    } else {
        alert("Jawaban salah!");
    }

    soalSekarang++;
    if (soalSekarang < kuis.length) {
        tampilkanPertanyaan();
    } else {
        alert(`Kuis selesai! Skor Anda: ${skor}/${kuis.length}`);
        document.getElementById('ulangi-btn').style.display = 'block'; // Tampilkan tombol ulangi setelah kuis selesai
    }
}
function mulaiUlang() {
    soalSekarang = 0; // Reset ke pertanyaan pertama
    skor = 0;         // Reset skor
    tampilkanPertanyaan(); // Tampilkan kembali pertanyaan pertama
}
tampilkanPertanyaan();