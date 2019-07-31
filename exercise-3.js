//if else

var nama = 'Mikael';
var peran = 'Ksatria';



if (nama == '' && peran == ''){
  console.log('Nama harus diisi!');
} else if (typeof nama == 'string' && peran == ''){
  console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!');
} else if (typeof nama == 'string' && peran == 'Ksatria'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama + ',\nHalo '+peran+' '+nama+' kamu dapat menyerang dengan senjatamu!');
} else if (typeof nama == 'string' && peran == 'Tabib'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama + ',\nHalo '+peran+' '+nama+' kamu akan membantu temanmu yang terluka.');
} else if (typeof nama == 'string' && peran == 'Penyihir'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama + ',\nHalo '+peran+' '+nama+' ciptakan keajaiban yang membantu kemenanganmu!');
}