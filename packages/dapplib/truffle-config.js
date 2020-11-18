require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe stove cruise spike exchange inner kangaroo army ghost'; 
let testAccounts = [
"0xb82b9d38c1e7371623c6a7c015459cdac900eeced74574afe3ea011ba75d82e9",
"0x88249605fdabbe3a19d3176818c427b08822ac50b56ce44f9f49bc8cb4c73d91",
"0x551f3f2c298a56819587aad722139b98f0e773ea4085f7cb5933fa5ba1c732ab",
"0xd02dd5809150e018865ed943f892ccf6f9d422c572578d9000f6441c33fcf310",
"0xdd33cd79e56d81efd59494e00ce31dac834f31ee6526c4052b92863d94dd5e28",
"0x52a72951196928ea42916141c7154e3d1d50b09298d9541fd630943a30be414d",
"0xe6ae6ba7c5e736cf2ea72f6ea4ecb818b55473d2c5e7b7c42c2a514001d2137d",
"0xaad5848b2b20f7a877e6f876d430937c0dde0d90a6c67fa1ba492e0e33db1d3d",
"0xebbe8debfc1a9609c39128c2317ff2c8520c34afe39fcf7c19443a8f731afa33",
"0x53f678d9e4811fc09acf5e32b683e65b71a75cbf6caa1b6ac37b6796e36f0d05"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
