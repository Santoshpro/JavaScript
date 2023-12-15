let HPLaptop = {
    name:'HP',
    ram:'8',
    price:'40000',
    storage:'512',
    run: function run(){

    }
}


let DellLaptop = {
    name:'Dell',
    ram:'16',
    price:'60000',
    storage:'1024',
    run: function run(){

    }
}
let AppleLaptop = {
    name:'Apple',
    ram:'16',
    price:'160000',
    storage:'1024',
    run: function run(){

    }
}
// 2nd Approach
//create a function
function createLaptop(name,ram,price, storage){
    // let laptop={}
    laptop.name= name
    laptop.ram= ram
    laptop.price= price
    laptop.storage= storage
    // return laptop
}


let lenovolaptop=createLaptop('lenovo','8', '50000', '1024')
console.log(lenovolaptop)

// 3rd Approach
//create another function
function laptop(name, ram, price, storage){
    this.name= name
    this.ram= ram
    this.price= price
    this.storage= storage
}
let acerLaptop= new laptop('acer','8', '50000', '1024')
console.log(acerLaptop)