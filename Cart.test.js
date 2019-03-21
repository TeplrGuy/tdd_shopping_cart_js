const Cart = require('./Cart');
const Item = require('./Item');



test('test to test empty cart', () => {
    let cart = new Cart;
    expect(cart.getItems.length)
    .toBe(0);
  });

test('adding item to the cart', () => {
    let cart = new Cart;
    cart.addItem(new Item('soap',100,true),2);
    cart.addItem(new Item('soap',100,true),1);
    cart.addItem(new Item('HandBag',200,true),1);
    expect(cart.getTotalPrice())
    .toBe("Your Total Price: 500 and Number of Items in the cart: 4");
  });

  test('test to get the item quantities', () => {
    let cart = new Cart;
    var handBag = new Item('HandBag',100,true)
    cart.addItem(handBag,1);
    cart.addItem(handBag,2);
    expect(cart.getItemQuantities()[0])
    .toBe("HandBag - x3");
  });

  test('test to get the itemized quantities', () => {
    let cart = new Cart;
    var soap = new Item('soap',100,true);
    cart.addItem(soap,2);
    expect(cart.getItemizedList()[0])
    .toBe("soap x2 - $200");
  });
  
  test('test to get the items onSale', () => {
    let cart = new Cart;
    cart.addItem(new Item('soap',100,true),2);
    cart.addItem(new Item('HandBag',200,false),1);
    expect(cart.getItemsonSale()[0])
    .toBe("soap x2 - $200");
  });

  test('test to remove item from Cart', () => {
    let cart = new Cart;
    var soap = new Item('soap',100,true); 
    cart.addItem(soap,5);
    expect(cart.removeItem(soap, 1))
    .toBe("soap x4 - $400");
  });
