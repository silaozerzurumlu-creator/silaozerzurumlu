// 1. ÜRÜNÜ SEPETE EKLEME FONKSİYONU
function sepeteEkle(urunAdi, urunFiyat) {
    // Hafızada önceden sepet var mı kontrol et, yoksa boş bir liste (dizi) oluştur
    let sepet = JSON.parse(localStorage.getItem("sepet")) || [];

    // Yeni ürünü obje olarak listeye ekle
    sepet.push({
        isim: urunAdi,
        fiyat: urunFiyat
    });

    // Güncel sepeti tarayıcı hafızasına (localStorage) kaydet
    localStorage.setItem("sepet", JSON.stringify(sepet));

    // Kullanıcıya eklendiğine dair tatlı bir uyarı ver
    alert(urunAdi + " sepetinize başarıyla eklendi!");
}

// 2. SEPETTEN TEK BİR ÜRÜNÜ SİLME FONKSİYONU
function urunSil(index) {
    let sepet = JSON.parse(localStorage.getItem("sepet")) || [];
    
    // Belirtilen sıradaki ürünü sepetten çıkart
    sepet.splice(index, 1);
    
    // Güncel sepeti hafızaya kaydet
    localStorage.setItem("sepet", JSON.stringify(sepet));
    
    // Sepet sayfasındaki listeyi anında yenile
    if (typeof sepetiGoster === "function") {
        sepetiGoster();
    }
}