// soal 1
var list = [[5,3,2,4,1,6], [1,2,2,3,4],[1,3,5,7,9],[1,3,5,7,9],[1,3,5,7,9],[1,3,5,7,2]]

// pakai loop
// munculkan hasil penjumlahan dari array di dalam angka jika angka itu genap
// kalo contoh di atas outputnya 20
// dan di buat kedalam sebuah function//
// function hanya menerima 1 parameter array


// soal 2
// no4. munculin mobil SIAPA yang paling mahal, dan MOBILNYA APA 
var udin = {
  nama: "udin", 
  tinggi: 170, 
  usia: 21,
  bb: 71,
  kendaraan: [
    {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
    {merk: 'toyota', buildedBy: 'japan', price: 550000000, type: 'fortuner'}
  ],
  laptop: {
    merk: 'macbook',
    warna: 'dark grey',
    size: '15in'
  } 
}

var ujang = {
  nama: "ujang", 
  tinggi: 170, 
  usia: 21,
  bb: 71,
  kendaraan: [
    {merk: 'honda', buildedBy: 'japan', price: 500000000, type: 'civic'},
    {merk: 'toyota', buildedBy: 'japan', price: 120000000, type: 'agya'}
  ],
  laptop: {
    merk: 'macbook',
    warna: 'dark grey',
    size: '15in'
  } 
}

var dadang = {
  nama: "dadang", 
  tinggi: 170, 
  usia: 21,
  bb: 71,
  kendaraan: [
    {merk: 'honda', buildedBy: 'japan', price: 400000000, type: 'civic'},
    {merk: 'toyota', buildedBy: 'japan', price: 140000000, type: 'agya'}
  ],
  laptop: {
    merk: 'macbook',
    warna: 'dark grey',
    size: '15in'
  } 
}

listOrang = [udin, ujang, dadang]

// soal 3
const number1 = [1,5,7,8,2,3,6,4,3] // [8,3,3]
const number2 = [9,2,1,6,4,2,5,7,1] // [9]
const number3 = [] // [8,3,3]


// soal 4
let udin = {
  money: 1000000000,
  carPreference: {
    type: 'jpn',
    needed: 2,
    rangePrice: {from: 200000000, to: 450000000},
    mandatoryType: ['SUV', 'Hatchback']
  },
  carport: [],
}

let showRoom = [
  {buildBy: 'jpn', brand: 'toyota', price: 123000000, model: 'Agya', type: 'City Car'},
  {buildBy: 'jpn', brand: 'toyota', price: 275000000, model: 'Yaris', type: 'Hatchback'},
  {buildBy: 'eu', brand: 'chevrolete', price: 350000000, model: 'trax', type: 'SUV'},
  {buildBy: 'jpn', brand: 'toyota', price: 550000000, model: 'fortuner', type: 'SUV'},
  {buildBy: 'jpn', brand: 'honda', price: 375000000, model: 'HRV', type: 'SUV'},
]


// outputnya
/*
{
  money: 350000000,
  carPreference: {
    type: 'jpn',
    needed: 2,
    rangePrice: {from: 200000000, to: 450000000},
    mandatoryType: ['SUV', 'Hatchback']
  },
  carport: [
    Yaris,
    HRV
  ],
}

*/

// soal 5
class Orang {
  constructor(money, carPreference){
    this.money = money
    this.carPreference = carPreference
  }
  
  beliMobil(showRoom){
  }
}

const udin = new Orang(1000000000, {
  type: 'jpn',
  needed: 2,
  rangePrice: {from: 200000000, to: 450000000},
  mandatoryType: ['SUV', 'Hatchback']
})