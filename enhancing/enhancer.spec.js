const enhancer = require('./enhancer.js');

const item = {
    name: "sword of ultimate smiting power over many things",
    durability: 80,
    enhancement: 15,
  };

  describe("repair an item", ()=>{
      it("returns item with full durability", ()=>{
        expectedItem = {
            name: "sword of ultimate smiting power over many things",
            durability: 100,
            enhancement: 15,
          }
          expect(enhancer.repair(item).toEqual(expectedItem))
      })
  })
  
describe("success", ()=>{
    it("increases the items enhancement by one, not to exceeed 20", ()=>{
        expectedItem = {
            name: "sword of ultimate smiting power over many things",
            durability: 100,
            enhancement: 16,
          }
          expect(enhancer.success(item).toEqual(expectedItem))
    })
})

describe("failure", ()=>{
    it("increases the items enhancement by one, not to exceeed 20", ()=>{
        expectedItem = {
            name: "sword of ultimate smiting power over many things",
            durability: 90,
            enhancement: 15,
          }
          expect(enhancer.fail(item).toEqual(expectedItem))
    })
})

describe("get", ()=>{
    it("changes the name of an item", ()=>{
        expectedItem = {
            name: `sword of ultimate smiting power over many things +15`,
            durability: 100,
            enhancement: 15,
          }
    })
})
// test away!
