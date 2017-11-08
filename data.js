var orders = [{
            id:'001',
            customerId: '001',
            total: 22000,
            date: '20-10-2017',
            customerName:'Anuruddha Distributors',
            status:0,
            remarks:'Please arrange goods we will inform you where to send.'
        },
    {
            id:'002',
            customerId: '002',
            total: 18000,
            date: '20-10-2017',
            customerName:'Upali Hardware',
            status:0,
            remarks:'Deleveri lorry'
        },
    {
            id:'003',
            customerId: '004',
            total: 15000,
            date: '20-10-2017',
            customerName:'Gajindu Distributors',
            status:0,
            remarks:''
        }
    ,
    {
            id:'004',
            customerId: '006',
            total: 1200,
            date: '20-10-2017',
            customerName:'Senarath Hardware',
            status:1,
            remarks:'Deleveri lorry'
        }
    ,
    {
            id:'005',
            customerId: '00',
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ',
            status:3,
            remarks:'send it today'
        }
    ,
    {
            id:'00',
            customerId: '00',
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ',
            status:3,
            remarks:'send it today'
        }
    ,
    {
            id:'00',
            customerId: '00',
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' ,
            status:3,
            remarks:'send it today'
        }
    ,
    {
            id:'00' ,
            customerId: '00',
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' ,
            status:3,
            remarks:'send it today'
        }
    ,
    {
            id:'00',
            customerId: '00',
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' ,
            status:3,
            remarks:'send it today'
        }
    ,
    {
            id:'00' ,
            customerId: '00',
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ',
            status:3,
            remarks:'send it today'
        }];
    
    var locks = [{
            item   : "Shangai Door Lock",
            id      : "15",
            images:["doorhanle.jpg"],
            info    : "Brass cauted door handles",
            price   : "900",unit    : "Nos",
            categoryId:'1',
            category: "door Locks"
    },{
            item   : "Door Lock Silver",
            id      : "18",
            images:["doorhandle2.jpg"],
            categoryId:'1',
            info    : "Silver cauted door handle",
            price   : "1000",unit    : "Nos",
            category: "Screw Nails"
    },{
            item   : "Door Lock Gold",
            id      : "12",unit    : "Nos",
            images:["doorhandle.jpg"],
            info    : "Gold colour plated door handle",
            price   : "1000",
            categoryId:'1',
            category: "Screw Nails"
    }];
    
var items = [{
            item   : "Brass Stay",
            id      : "12",
            images:["brassstay.jpg"],
            info    : "Top quality lankan brass widow stay",
            price   : "200",
            unit    : "Nos",
            categoryId:'CA1',
            category: "Winow Accessories"
    },{
            item   : "Crocodile Hoe",
            id      : "17",
            images:["memoty.jpg"],
            info    : "No1 Original Corocodile hoe",
            price   : "1,000",unit    : "Nos",
            category: "Screw Nails"
    },{
            item   : "Concrete Nail 2'",
            id      : "21",unit    : "Nos",
            images:["convrestenails.jpg"],
            info    : "Imported Concrete naile",
            price   : "175",
            category: "PVC Ball Valve"
    },{
            item   : "Brass Door guard",
            id      : "22",unit    : "Nos",
            images:["doorguard.jpg"],
            info    : "Srilankan hand made oxidized brass door guard",
            price   : "490",
            category: "PVC Ball Valve"
    },{
            item   : "Gate Lock",
            id      : "12",unit    : "Nos",
            images:["doorlock.jpg"],
            info    : "Nickle quated gate locks",
            price   : "270",
            category: "PVC Ball Valve"
    },{
            item   : "Tile Cutter 12'",
            id      : "123",unit    : "Nos",
            images:["tilecutter.jpg"],
            info    : "Chinese tile cutter",
            price   : "900",
            category: "PVC Ball Valve"
    },{
            item   : "Siver coat Tap",
            id      : "26",unit    : "Nos",
            images:["silvertap.jpg"],
            info    : "This is quality lock",
            price   : "1000",
            category: "Roller Brush"
    },{
            item   : "Miter saw",
            id      : "27",unit    : "Nos",
            images:["mitersaw.jpg"],
            info    : "This is quality lock",
            price   : "1000",
            category: "Roller Brush"
    },{
            item   : "Sandra door locks",
            id      : "123",unit    : "Nos",
            images:["doorlock.jpg"],
            info    : "This is quality lock",
            price   : "1000",
            categoryId:'1',
            category: "Painting brush"
    },{
            item   : "Crow Bars",
            id      : "125",unit    : "Nos",
            images:['doorlock.jpg'],
            info    : "This is quality lock",
            price   : "1000",
            category: "Crow Bars"
    },{
            item   : "Jtech Handril",
            id      : "16",
            images:["handdril.jpg"],
            info    : "This is quality lock",
            price   : "1000",unit    : "Nos",
            category: "Pad Locks"
    },{
            item   : "Combination Player 8",
            id      : "20",unit    : "Nos",
            images:["combinationplayer.jpg"],
            info    : "This is quality lock",
            price   : "1000",
            category: "Screw Nails"
    }];
//
//var items = [{
//        id: '001',
//        category:'Window Accessories',
//        categoryId:1,
//        item:'Brass Stay - lanka',
//        description: 'Top quality lankan made window brass stay',
//        price:'200',
//        quantity:1,
//        unit: 'Nos',
//        images:[doorhandle2.jpg','doorhandle.jpg','doorhanle.jpg']
//    },
//    {
//        id: '002',
//        category:'Window Accessories',
//        categoryId:1,
//        item:'Iron Casement tradsmann',
//        description: 'Tradesmann brand strong irron window casement stay',
//        price:'180',
//        quantity:1,
//        unit: 'Nos',
//        images:['doorhandle2.jpg','doorhandle.jpg','doorhanle.jpg']
//    },
//    {
//        id: '002',
//        category:'Window Accessories',
//        categoryId:1,
//        item:'Iron Casement - ceyco',
//        description: 'Top quality Ceyco brand strong irron window casement stay',
//        price:'180',
//        quantity:1,
//        unit: 'Nos',
//        images:['doorhandle2.jpg','doorhandle.jpg','doorhanle.jpg']
//    }];

var offerItems = [{
        
        item   : "Shangai Door Lock",
        id      : "15",
        images: ["doorhanle.jpg"],
        description    : "This is quality lock",                    
        price   : "1250",
        categoryId:1,
        oldPrice: "1500",
        offerText: "Stock Clearence sale",
        category: "Door Locks"    
    },{
        
        price   : "1000",
        oldPrice: "1200",
        offerText: "Stock clearence sale",
        item   : "Jtech Handril",
        id      : "16",
        images: ["handdril.jpg"],
        description    : "This is quality lock",
        categoryId:1,
        category: "Pad Locks"
    },{
        
        item   : "Siver coat Tap",
        id      : "26",
        images: ["silvertap.jpg"],
        
        description    : "This is quality lock th asifsd afhis wefwefw",
        price   : "1000",
        oldPrice: "1200",
        categoryId:1,
        offerText: "Stock clearence sale",
        category: "Door Locks"
    },{
        
        item   : "Tile Cutter",
        id      : "123",
        images: ["tilecutter.jpg"],            
        description    : "This is quality lock th asifsd afhis wefwefw",
        price   : "1000",
        categoryId:1,
        oldPrice: "1200",
        offerText: "Stock clearence sale",
        category: "Door Locks"
    },{
        item   : "Brass Door guard",
        id      : "22",
        images: ["doorguard.jpg"],
        description    : "This is quality lock th asifsd afhis wefwefw",
        price   : "400",
        categoryId:1,
        oldPrice: "490",
        offerText: "Stock clearence sale",
        category: "Door Locks"
    },{
        
        item   : "Alexa Door Lock",
        id      : "12",
        images: ["doorhandle.jpg"],
        description    : "This is quality lock th asifsd afhis wefwefw",
        price   : "1550",
        categoryId:1,
        oldPrice: "1650",
        offerText: "Stock clearence sale",
        category: "Door Locks"
    },{
        item   : "Miter saw",
        id      : "27",
        images: ["mitersaw.jpg"],
        offerText    : "Stock Clearence sale",
        price   : "7300",
        oldPrice: "7990",
        categoryId:2,
        category: "Roller Brush"
    }];

var cheques = [{
        id : "12",
        number: "12345",
        date: "20-04-2016",
        amount: "2000",
        status: "pending",
        remarks: "test remarks"
    },{
        id : "12",
        number: "12345",
        date: "20-04-2016",
        amount: "2000",
        status: "pending",
        remarks: "test remarks"
    },{
        id : "12",
        number: "12345",
        date: "20-04-2016",
        amount: "2000",
        status: "pending",
        remarks: "test remarks"
    },{
        id : "12",
        number: "12345",
        date: "20-04-2016",
        amount: "2000",
        status: "pending",
        remarks: "test remarks"
    },{
        id : "12",
        number: "12345",
        date: "20-04-2016",
        amount: "2000",
        status: "pending",
        remarks: "test remarks"
    }];

var invoices = [{
        id:"123",
        orderId: "1234", 
        date: "20-4-2016", 
        total:"20000.00",
        remarks:"test remarks"
    },{
        id:"123",
        orderId: "1234", 
        date: "20-4-2016", 
        total:"20000.00",
        remarks:"test remarks"
    },{
        id:"123",
        orderId: "1234", 
        date: "20-4-2016", 
        total:"20000.00",
        remarks:"test remarks"
    },{
        id:"123",
        orderId: "1234", 
        date: "20-4-2016", 
        total:"20000.00",
        remarks:"test remarks"
    },{
        id:"123",
        orderId: "1234", 
        date: "20-4-2016", 
        total:"20000.00",
        remarks:"test remarks"
    }];

var customers = [{id:'CU1',name:'Anuruddha Distributors', city:'Kalutara'},
    {id:'CU2',name:'Gajindu Distributors', city:'Anuradhapura'},
    {id:'CU3',name:'Upali Harsware', city:'Peradeniya'},
    {id:'CU4',name:'Metro Hardware', city:'Kandy'},
{id:'CU5',name:'Matale Hardware', city:'Matale'},
{id:'CU6',name:'Mr. Hussain', city:'Galioya'},
{id:'CU7',name:'United Hardware', city:'Matale'},
{id:'CU8',name:'Mr. Ariyapala', city:'Kurunegala'},
{id:'CU9',name:'Golden Glass', city:'Kurunegala'},
{id:'CU10',name:'Kandy Hardware', city:'Kandy'}];