require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn pull harvest brass flush twenty'; 
let testAccounts = [
"0xfca9a2888232067c248e6f4096b0e6d979fc0b32be181077675fcf27b743c274",
"0xce5a1d07e6e2ff6b96e31efdd55f9ae015c131dfcde8bb979e70b91928662970",
"0x4a27bcf2bafcb0a2d4f2153676945baf005725b5d0d3a58086d6a7543c464899",
"0x8ec584d5d401bfdb37e909910f20d4e6046577df7c3be8fc4ef2bac2f7f71c2e",
"0x06346577fffa1a19b5a0cbfa7702243a6d5c1d7b5ab57406d23e6dfbfd740ce9",
"0x07f4a21fa99f569aa4a590dfe92651bf89bc247d5aece11be0f65a5d57e73fd3",
"0x92168c02b61ad8778d6b6c164d2cd9e27a77e1a571f4475e4dd483196692e8f0",
"0xfa903a5022fa7a4cc390abedb508f3972ca405181bf7fd4a375990bcb7c4626d",
"0x3f764e4fd1f2c692ce658cf4ce54a7bda85386c8200b7605ff1a280d54daf3a8",
"0xbe6b9dcf2f3d8e00f447a6ffdad51a6f7bc6a8923700f25fa4ce061775c2e21e"
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
            version: '^0.8.0'
        }
    }
};

