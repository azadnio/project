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
            customerId: '00' + i,
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
            status:i%3,
            remarks:'send it today'
        }
    ,
    {
            id:'00' + i,
            customerId: '00' + i,
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
            status:i%3,
            remarks:'send it today'
        }
    ,
    {
            id:'00' + i,
            customerId: '00' + i,
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
            status:i%3,
            remarks:'send it today'
        }
    ,
    {
            id:'00' + i,
            customerId: '00' + i,
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
            status:i%3,
            remarks:'send it today'
        }
    ,
    {
            id:'00' + i,
            customerId: '00' + i,
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
            status:i%3,
            remarks:'send it today'
        }
    ,
    {
            id:'00' + i,
            customerId: '00' + i,
            total: 20000,
            date: '2-10-2017',
            customerName:'customer ' + i,
            status:i%3,
            remarks:'send it today'
        }];

var items = [{
        id: '001',
        category:'Window Accessories',
        categoryId:1,
        item:'Brass Stay - lanka',
        description: 'Top quality lankan made window brass stay',
        price:'200',
        quantity:1,
        unit: 'Nos',
        images:['doorhandle2.jpg','doorhandle.jpg','doorhanle.jpg']
    },
    {
        id: '002',
        category:'Window Accessories',
        categoryId:1,
        item:'Iron Casement tradsmann',
        description: 'Tradesmann brand strong irron window casement stay',
        price:'180',
        quantity:1,
        unit: 'Nos',
        images:['doorhandle2.jpg','doorhandle.jpg','doorhanle.jpg']
    },
    {
        id: '002',
        category:'Window Accessories',
        categoryId:1,
        item:'Iron Casement - ceyco',
        description: 'Top quality Ceyco brand strong irron window casement stay',
        price:'180',
        quantity:1,
        unit: 'Nos',
        images:['doorhandle2.jpg','doorhandle.jpg','doorhanle.jpg']
    }];

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