//if else

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