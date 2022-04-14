let reverse_a_number = require("../index");
let alphabetical_order = require("../index");
let convert_first_letter_to_uppercase = require("../index");
let check_if_prime = require("../index");
let get_unique_char = require("../index");
let get_unique_char2 = require("../index");

test("Test Unique Characters", () => {    
   expect(get_unique_char("abc")).toBe("abc");      
});

test("Get unique char", () => {    
  expect(get_unique_char("abc")).toBeTruthy();      
});

test("Get unique char length", () => { 
  expect(get_unique_char("hello")).toHaveLength(4);      
});

test('drinks returns', () => {
  const get_unique_char = jest.fn(() => 4);
  get_unique_char("hello");
  expect(get_unique_char).toHaveReturned();
});

test('get_unique_char2 calls get_unique_char', () => {
  const get_unique_char = jest.fn();
    get_unique_char2(get_unique_char, 'hello');
    expect(get_unique_char).toHaveBeenCalled();
});






