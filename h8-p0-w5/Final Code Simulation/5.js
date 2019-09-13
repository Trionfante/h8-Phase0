/**
 * ///////////
 * User Weapon
 * ///////////
 * Function userWeapon adalah sebuah function yang berfungsi merubah senjata dari setiap karakter.
 * Function ini menerima parameter yaitu:
 *  - user = tipe data object, merupakan informasi dari user
 *  - weapon = tipe data string, merupakan senjata yang akan dipakai user
 * Function ini akan mengembalikan tipe data string yang berisi informasi perubahan senjata
 * 
 * [EXAMPLE]
 * Input:
 * - User: {
 *    name: 'yogs',
 *    weapon: 'redKnife',
 *    job: 'swordman',
 *    attack: 700
 *  }
 * - newWeapon: blackKnife
 * Proses:
 * - Apabila heroes tersebut dapat menggunakan weapon yang diminta maka akan diubah senjata
 *   dan menyesuaikan dengan output nilai yang baru. (700 - weaponLama(100) + weapon baru (300)) = 900
 * Output:
 * yogs menggunakan senjata blackKnife attack menjadi 900
 * 
 * [RULES]
 * 1. Dilarang menggunakan built in function kecuali .push() dan .unshift()
 * 2. Asumsi senjata awal pemain selalu ada dan sesuai
 * 3. Apabila ada karakter yang berusaha memakai senjata yang tidak bisa dipakai job tersebut
 *    maka kembalikan Invalid Weapon
 */

/**
 * DAFTAR WEAPONS
 * 
 * | Name           | Type    | Attack |
 * | -------------- | ------- | ------ |
 * | redKnife       | knife   | 100    |
 * | blackKnife     | knife   | 300    |
 * | crimsonSword   | katana  | 800    |
 * | moonLightSword | katana  | 400    |
 * | starKunai      | kunai   | 80     |
 * | huumaShuriken  | kunai   | 340    |
 * | emptyBracer    | knuckle | 20     |
 * | brokenArms     | knuckle | 40     |
 * 
 * 
 * DAFTAR HEROES
 * 
 * | Job      | Weapon Types         |
 * | -------- | -------------------- |
 * | swordman | knife, katana        |
 * | ninja    | knife, kunai, katana |
 * | samurai  | knife, katana        |
 * | monk     | knuckle              |
*/

// var heroes = [
//   {
//        job: 'swordman',
//     weapon: ['knife', 'katana']
//   },
//   {
//        job: 'ninja',
//     weapon: ['knife', 'kunai', 'katana']
//   },
//   {
//        job: 'samurai',
//     weapon: ['knife', 'katana']
//   },
//   {
//        job: 'monk',
//     weapon: ['knuckle']
//   }
// ]

var heroes = {
  swordman: ['knife', 'katana'],
     ninja: ['knife', 'kunai', 'katana'],
   samurai: ['knife', 'katana'],
      monk: ['knuckle']
}

var weapons = [
  {
      name: 'redKnife',
      type: 'knife',
    attack: 100
  },
  {
      name: 'blackKnife',
      type: 'knife',
    attack: 300
  },
  {
      name: 'crimsonSword',
      type: 'katana',
    attack: 800
  },
  {
      name: 'moonLightSword',
      type: 'katana',
    attack: 400
  },
  {
      name: 'starKunai',
      type: 'kunai',
    attack: 80
  },
  {
      name: 'huumaShuriken',
      type: 'kunai',
    attack: 340
  },
  {
      name: 'emptyBracer',
      type: 'knuckle',
    attack: 20
  },
  {
      name: 'brokenArms',
      type: 'knuckle',
    attack: 40
  }
]


function userWeapon(user, weapon) {
  // debugger
  var oldWeapon = [user.weapon];
  var newWeapon = [weapon];
  var heroesNew = [user.job];

  for (var i = 0; i < weapons.length; i++) {
    if (oldWeapon[0] == weapons[i].name) {
      oldWeapon.push(weapons[i].type);
      oldWeapon.push(weapons[i].attack);
    }
  }
  console.log(oldWeapon);

  for (var i = 0; i < weapons.length; i++) {
    if (newWeapon[0] == weapons[i].name) {
      newWeapon.push(weapons[i].type);
      newWeapon.push(weapons[i].attack);
    }
  }
  console.log(newWeapon);

  if (heroes[heroesNew[0]]) {
    heroesNew.push(heroes[heroesNew[0]]);
  }
  console.log(heroesNew);

  for (var i = 0; i < heroes[heroesNew[0]].length; i++) {
    debugger
    // console.log(i);
    // console.log(heroes[heroesNew[0]][i]);
    if (newWeapon[1] == heroes[heroesNew[0]][i]) {
      return user.name + ' menggunakan senjata ' + weapon + ' attack menjadi ' + (user.attack - oldWeapon[2] + newWeapon[2]);
    }
  }
  return 'Invalid Weapon';
}


var yogs = {
  name: 'yogs',
  job: 'swordman',
  weapon: 'redKnife',
  attack: 700
}
console.log(userWeapon(yogs, 'blackKnife'))
// yogs menggunakan senjata blackKnife attack menjadi 900


var arms = {
  name: 'arms',
  job: 'monk',
  weapon: 'emptyBracer',
  attack: 3000
}
console.log(userWeapon(arms, 'crimsonSword'))
// Invalid weapon


console.log(userWeapon({
  name: 'yuss',
  job: 'ninja',
  weapon: 'huumaShuriken',
  attack: 900
}, 'starKunai'))
// yuss menggunakan senjata starKunai attack menjadi 640