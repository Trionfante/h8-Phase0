//if else

/*OBSOLETE
var nama = 'Mikael'
var peran = ''

if (nama == '' && peran == ''){
  console.log("Nama harus diisi!");
} else if (nama == 'Mikael' && peran == ''){
  console.log('Halo Mikael, pilih peranmu untuk memulai!');
} else if (nama == 'Nina' && peran == 'Ksatria'){
  console.log('Halo '+nama+',');
  console.log('Selamat datang '+peran+', kamu dapat menyerang musuh!');
} else if (nama == 'Danu' && peran == 'Tabib'){
  console.log('Halo '+nama+',');
  console.log('Selamat datang '+peran+', kamu dapat mengobati teman!');
} else if (nama == 'Zero' && peran == 'Penyihir'){
  console.log('Halo '+nama+',');
  console.log('Selamat datang '+peran+', kamu dapat membantu teman!');
}
*/

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