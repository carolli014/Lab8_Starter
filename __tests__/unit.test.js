// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('626-616-1518 is a valid phone number', () => {
  expect(functions.isPhoneNumber('626-616-1518')).toBe(true);
});
test('626-362-0027 is a valid phone number', () => {
  expect(functions.isPhoneNumber('626-362-0027')).toBe(true);
});
test('666 is an invalid phone number', () => {
  expect(functions.isPhoneNumber('666')).toBe(false);
});
test('8-2323 is an invalid phone number', () => {
  expect(functions.isPhoneNumber('8-2323')).toBe(false);
});

test('carol@gmail.com is a valid email address', () => {
    expect(functions.isEmail('carol@gmail.com')).toBe(true);
});
test('mil014@ucsd.edu is a valid email address', () => {
    expect(functions.isEmail('mil014@ucsd.edu')).toBe(true);
});
test('abc@gmail.comn is an invalid email address', () => {
    expect(functions.isEmail('abc@gmail.comn')).toBe(false);
});
test('abc@123.com is an invalid email address', () => {
    expect(functions.isEmail('abc@123.com')).toBe(false);
});

test('dksdJsm is a StrongPassword', () => {
    expect(functions.isStrongPassword('dksdJsm')).toBe(true);
});
test('asdlOSAD is a StrongPassword', () => {
    expect(functions.isStrongPassword('asdlOSAD')).toBe(true);
});
test('abc is not a StrongPassword', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});
test('123123 is not a StrongPassword', () => {
    expect(functions.isStrongPassword('123123')).toBe(false);
});

test('11/14/2021 is a valid date', () => {
  expect(functions.isDate('11/14/2021')).toBe(true);
});
test('1/14/2020 is a valid date', () => {
  expect(functions.isDate('1/14/2020')).toBe(true);
});
test('11/141/2021 is an invalid date', () => {
  expect(functions.isDate('11/141/2021')).toBe(false);
});
test('1/20/20000 is an invalid date', () => {
  expect(functions.isDate('1/20/20000')).toBe(false);
});

// TODO - Part 2
test('#FF5733 is a HexColor', () => {
    expect(functions.isHexColor('#FF5733')).toBe(true);
});
test('#F6FF33 is a HexColor', () => {
    expect(functions.isHexColor('#F6FF33')).toBe(true);
});
test('#1213456 is not a HexColor', () => {
    expect(functions.isHexColor('#1213456')).toBe(false);
});
test('121212E is not a HexColor', () => {
    expect(functions.isHexColor('121212E')).toBe(false);
});