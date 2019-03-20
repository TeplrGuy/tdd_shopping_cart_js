const Cart = require('./Cart');
const Item = require('./Item');

let cart = new Cart;
let item = new Item;

test('test to test empty cart', () => {
    expect(cart.getItems.length)
    .toBe(0);
  });

test('adding item to the cart', () => {
    cart.addItem(new Item('soap',100,true),2);
    cart.addItem(new Item('soap',100,true),1);
    cart.addItem(new Item('HandBag',200,true),1);
    expect(cart.getTotalPrice())
    .toBe("Your Total Price: 500 and Number of Items in the cart: 4");
  });

  test('test to get the item quantities', () => {
    var handBag = new Item('HandBag',100,true)
    cart.addItem(handBag,1);
    cart.addItem(handBag,2);
    expect(cart.getItemQuantities()[0])
    .toBe("soap - x2");
  });

  test('test to get the itemized quantities', () => {
    var soap = new Item('soap',100,true);
    cart.addItem(soap,2);
    expect(cart.getItemizedList()[0])
    .toBe("soap x2 - $200");
  });
  
  test('test to get the items onSale', () => {
    cart.addItem(new Item('soap',100,true),2);
    cart.addItem(new Item('HandBag',200,false),1);
    expect(cart.getItemizedList()[0])
    .toBe("soap x2 - $200");
  });
