/*

Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
Examples:
groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
*/

const groceries = items => {
    if (items.length === 1) {
      return items[0].item;
    }
    if (items.length === 2) {
      return `${items[0].item} and ${items[1].item}`
    }
    if (items.length > 2) {
    let list = items.map(item => item.item).toString().replace(/,/g, ", ");
    return list.replace(/,(?=[^,]*$)/, " and")
    }
    }
    console.log(groceries(  [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ))