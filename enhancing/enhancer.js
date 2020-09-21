const db = require("../knexconfig");

function repair(item) {
  return { ...item, durability: 100 };
}

function success(item) {
  if (item.enhancement >= 20) {
    return {...item, enhancement: 20};
  } else {
    return { ...item, enhancement: (item.enhancement += 1) };
  }
}
/* - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
- If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
- If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17). */
function fail(item) {
  if (item.enhancement < 15) {
    return { ...item, durability: (item.durability -= 5) };
  } else if (item.durability > 15) {
    if (item.enhancement >= 16) {
      return {
        ...item,
        enhancement: (item.enhancement -= 1),
        durability: (item.durability -= 10),
      };
    }
    return { ...item, durability: (item.durability -= 10) };
  }
}

function get(item) {
  if(item.enhancement > 0){
    return{...item, name: `${item.name} +${item.enhancement} `}
  }
  return { ...item };
}

module.exports = {
  success,
  fail,
  repair,
  get,
};
