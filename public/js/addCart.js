const sequelize = require('../config/connection');

const addToCart = async (event) => {
    event.preventDefault();
  
    const item_name = document.querySelector('#item_name').value.trim();
    const item_description = document.querySelector('#item_description').value.trim();
    const price = document.querySelector('#price').value.trim();
  
    if (item_name && price) {
      const response = await fetch(`/api/item`, {
        method: 'POST',
        body: JSON.stringify(
          { 
            item_name,
            item_description,
            price,
            stock,
         }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to confirm item, please try again.');
      }
    }
}

/*
totalCost: {
              include: [
                [
                  sequelize.literal(
                    '(SELECT SUM(price) FROM item WHERE cart.item_id = item.id)'
                  ),
                  'totalCost',
                ],
              ]}*/