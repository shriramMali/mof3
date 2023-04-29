async function getMenu() {
    try {
      const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
      const menu = await response.json();
      console.log(menu);
    } catch (error) {
      console.error(error);
    }
  }
  
  // Take order
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = ['cheeseburger', 'veggie burger', 'chicken burger'];
        const order = {
          burgers: [
            burgers[Math.floor(Math.random() * burgers.length)],
            burgers[Math.floor(Math.random() * burgers.length)],
            burgers[Math.floor(Math.random() * burgers.length)],
          ]
        };
        resolve(order);
      }, 2500);
    });
  }
  
  // Order preparation
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        const order_status = true;
        const paid = false;
        resolve({ order_status, paid });
      }, 1500);
    });
  }
  
  // Pay order
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const order_status = true;
        const paid = true;
        resolve({ order_status, paid });
      }, 1000);
    });
  }
  
  // Thank you function
  function thankYouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  // Run the functions in sequence
  async function run() {
    await getMenu();
    const order = await takeOrder();
    console.log(order);
    const orderPrepStatus = await orderPrep();
    console.log(orderPrepStatus);
    const orderPaymentStatus = await payOrder();
    console.log(orderPaymentStatus);
    if (orderPaymentStatus.paid) {
      thankYouFnc();
    }
  }
  
  run();