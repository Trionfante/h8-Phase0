//switch

var tanggal = 17
var bulan = 08
var tahun = 1945

if ((tanggal > 31 || bulan > 12 || tahun > 2200) || (tanggal < 1 || bulan < 1 || tahun < 1900)){
    console.log("tanggal yang anda masukkan salah :(");
} else {
    switch (bulan){
        case 1:
            bulan = "Januari";
            break;
        case 2:
            bulan = "Februari";
            break;
        case 3:
            bulan = "Maret";
            break;
        case 4:
            bulan = "April";
            break;
        case 5:
            bulan = "Mei";
            break;
        case 6:
            bulan = "Juni";
            break;
        case 7:
            bulan = "Juli";
            break;
        case 8:
            bulan = "Agustus";
            break;
        case 9:
            bulan = "September";
            break;
        case 10:
            bulan = "Oktober";
            break;
        case 11:
            bulan = "November";
            break;
        case 12:
            bulan = "December";
    }
    console.log(tanggal + ' ' + bulan + ' ' + tahun);
}