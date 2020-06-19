# CRC16 XModem for JS

Derived from pycrc16 library implementation [(Link)](https://github.com/gtrafimenkov/pycrc16/blob/master/python2x/crc16/crc16pure.py)

For using in Node.js and Browser
No dependency needed
Tested and worked in Node 12, Chrome 83 
__(Not tested in JS import yet).__

---

## Usage

Step 1: Load script via Require / Browser script tag
```javascript
// For node.js
const crc16xmodem = require('crc16-xmodem'); 
```
```html
<!-- For browser -->
<script src="[path-to-file]/bundle.js"></script>
<script>
    // Should return type object if working
    console.log(typeof crc16xmodem);
</script>
```

Step 2: Methods
```javascript
// Calculate checksum with 4 digit hex output
const originalStr = '00020101021129370016A000000677010111011300660000000005802TH53037646304';
console.log(crc16xmodem.calculateChecksum(originalStr));
// Result: 8956
```
```javascript
// Validate from last 4 digit hex checksum
const fullStr = '00020101021129370016A000000677010111011300660000000005802TH530376463048956';
console.log(crc16xmodem.validateChecksum(fullStr));
// Result: true

```
```javascript
// or just crc16 input string with custom initial value like 0
crc16xmodem.crc16(str, initialValue);
```
