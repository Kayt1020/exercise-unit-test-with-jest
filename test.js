//const { default: test } = require("node:test");
//const { sum, euroToUsd } = require("./app.js");


//test("adds 14 + 9 to equal 23", () => expect(sum(14, 9)).toBe(23));

//test("sum,and euroToUsd", () => expect(euroToUsd(5)).toBe(6));

// one euro is:

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('Convert from Euro to Dollar', () => {
    expect(fromEuroToDollar(1)).toBe(1.2);
});

test('Convert from Dollar to Yen', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(106.58, 2);
});

test('Convert from Yen to Pound', () => {
    expect(fromYenToPound(1)).toBeCloseTo(0.0063, 4);
});