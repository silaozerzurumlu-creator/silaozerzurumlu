// 11. KRİTER İÇİN SATIR SATIR AÇIKLAMALI JAVASCRIPT KODLARI

// Bu fonksiyon sepete ürün eklemeye yarar. Ürün adı ve fiyatı alır.
function sepeteEkle(urunAdi, urunFiyati) {
    // Önce hafızada daha önce sepet oluşturulmuş mu ona bakıyoruz.
    let sepet = localStorage.getItem("sepetim");
    
    // Eğer sepet boşsa yeni bir dizi (array) oluşturuyoruz.
    if (sepet == null) {
        sepet = [];
    } else {
        // Eğer sepet varsa, metin formatından JavaScript nesnesine (diziye) çeviriyoruz.
        sepet = JSON.parse(sepet);
    }

    // Yeni ürünü obje olarak sepet dizisine ekliyoruz.
    sepet.push({ ad: urunAdi, fiyat: urunFiyati });

    // Güncel sepetimizi tekrar tarayıcı hafızasına (localStorage) kaydediy""oruz.
    localStorage.setItem("sepetim", JSON.stringify(sepet));

    // Kullanıcıya bilgi veriyoruz.
    alert(urunAdi + " sepete eklendi!");
}

// Bu fonksiyon sepet.html sayfasında sepet içeriğini ekranda listelemek için çalışır.
function sepetiGoster() {
    let sepet = localStorage.getItem("sepetim");
    let listeElemani = document.getElementById("sepet-listesi");
    let toplamFiyatElemani = document.getElementById("toplam-fiyat");

    // Eğer sepet boşsa veya içi temizlenmişse ekrana uyarı yazıyoruz.
    if (sepet == null || JSON.parse(sepet).length == 0) {
        listeElemani.innerHTML = "<li>Sepetinizde ürün bulunmamaktadır.</li>";
        toplamFiyatElemani.innerText = "0";
        return;
    }

    // Hafızadaki sepeti çözüyoruz.
    sepet = JSON.parse(sepet);
    listeElemani.innerHTML = ""; // Önce listenin içini boşaltıyoruz.
    let toplam = 0;

    // Klasik w3schools for döngüsü ile ürünleri tek tek dönüyoruz.
    for (let i = 0; i < sepet.length; i++) {
        // Her ürün için bir HTML liste elemanı (li) oluşturuyoruz.
        listeElemani.innerHTML += "<li>" + sepet[i].ad + " - " + sepet[i].fiyat + " TL</li>";
        // Toplam fiyata ekliyoruz.
        toplam += sepet[i].fiyat;
    }

    // Toplam tutarı ekrana yazdırıyoruz.
    toplamFiyatElemani.innerText = toplam;
}

// Sepeti tamamen sıfırlayan fonksiyon
function sepetiTemizle() {
    localStorage.removeItem("sepetim");
    // Ekranı güncellemek için fonksiyonu tekrar çağırıyoruz.
    sepetiGoster();
}