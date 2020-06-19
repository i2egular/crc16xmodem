const assert = require('assert');
const validator = require('../dist/bundle');

const ex1 = '00020101021129370016A000000677010111011300660000000005802TH53037646304';
const ex1c = '8956';

function testCalculate(str, output) {
    const result = validator.calculateChecksum(str);
    assert.equal(result, output);
}

function testValidate(str, output) {
    const result = validator.validateChecksum(str);
    assert.equal(result, output);
}

describe('crc16xmodem', function() {
    describe('calculateChecksum', () => {
        it('should has correct hash checksum', () => {
            testCalculate(ex1, ex1c);
        })
    });
    describe('validateChecksum', () => {
        it('should return false if str length < 5', () => {
            testValidate('1234', false);
        })
        it('should return true for example 1', () => {
            testValidate(`${ex1}${ex1c}`, true);
        });
    });
});
