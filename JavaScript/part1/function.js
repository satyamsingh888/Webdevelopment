function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
}
let teaOrder = (makeTea('green tea'));
// console.log(teaOrder);

function orderTea(){
    function confirmOrder(){
        return `Order confirmed for chai`
    }
return confirmOrder();
}
let orderConfirmation = orderTea();
// console.log(orderConfirmation);


//Arrow function
const calculateTotal =   (price, quantity) =>{
    price * quantity;
}
let totalCost = calculateTotal(499*100);



function makeTea(typeOfTea){
    return `makeTea: ${typeOfTea}`
}
function processTeaOrder(teaFunction){
return teaFunction("earl grey")
}


function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    };
}
let teaMaker = createTeaMaker();
console.log(teaMaker('chai'));