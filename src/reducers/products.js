var initialState = [
    {
        id : 1,
        name : 'Iphone 7 Plus',
        image : 'https://images-na.ssl-images-amazon.com/images/I/51wcd%2Bz24TL._SX425_.jpg',
        description : 'Sản phẩm do apple sản phẩm',
        price : 500,
        inventory : 10,
        rating : 4
    },
    {
        id : 2,
        name : 'Samsung galaxy S7',
        image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2016/2/23/635918156584359185_s7-g1.jpg',
        description : 'Sản phẩm do samsung sản phẩm',
        price : 400,
        inventory : 15,
        rating : 3
    },
    {
        id : 3,
        name : 'Oppo F1s',
        image : 'https://dienmaythienhoa.vn/images/thumbnails/51/315/315/OPPO-F1S-64GB-GOLD-2.jpg&w=315&mode=scale',
        description : 'Sản phẩm do china sản phẩm',
        price : 450,
        inventory : 5,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;