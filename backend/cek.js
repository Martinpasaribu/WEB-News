

let a = [
    
    {
        'nama': 'martin',
        'kelas': 1
    },
    {
        'nama': 'lusi'
    },
    {
        'nama': 'biru'
    },
    {
        'nama': 'heta'
    }
]

let s = [
    
    {
        'nama': 'budi',
        'kelas': 1
    }
]
let r = [

    {
        'nama': 'martin',
        'kelas': 1
    }
]



console.log(a.slice(0,3))

// let b = a.slice(0,3)

// let x = a

let b = 'martin'

let hasil = x.filter( items => items.nama === b )

console.log(x[0].nama === b)


// const cek = () => {
    
//     let temu = x.

//     if(x.nama === b ){
//         console.log('Bisa')
//     }else{
//         console.log(' Salah')
//     }
// }


// const hasil = cek()


// ngecek data yang sama dan menyimpanya :

// let data = a.filter(itemA => r.some(itemR => itemR.nama === itemA.nama));

// console.log(data)
