function sepeteEkle(urunAdi, urunFiyat) {
   
    let sepet = JSON.parse(localStorage.getItem("sepet")) || [];

    sepet.push({
        isim: urunAdi,
        fiyat: urunFiyat
    });

    localStorage.setItem("sepet", JSON.stringify(sepet));

    alert(urunAdi + " sepetinize başarıyla eklendi!");
}

function urunSil(index) {
    let sepet = JSON.parse(localStorage.getItem("sepet")) || [];
    
    sepet.splice(index, 1);
    
    localStorage.setItem("sepet", JSON.stringify(sepet));
    
    if (typeof sepetiGoster === "function") {
        sepetiGoster();
    }
}
