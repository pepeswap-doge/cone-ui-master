import BigNumber from 'bignumber.js'
import * as contractsTestnet from './contractsTestnet'
import * as contracts from './contracts'
import * as actions from './actions'

let isTestnet = 2000

// URLS
let scan = 'https://explorer.dogechain.dog/'
let cont = contracts

if (isTestnet) {
  scan = 'https://mumbai.polygonscan.com/'
  cont = contractsTestnet
}

export const ETHERSCAN_URL = scan

export const CONTRACTS = cont
export const ACTIONS = actions

export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed(0)
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const CONE_ADDRESS = '0x997705E09B10ADE008298050D66Cb19aeA205A04'.toLowerCase();
export const WWDOGE_ADDRESS = '0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101'.toLowerCase();


export const BLACK_LIST_TOKENS = []

export const BASE_ASSETS_WHITELIST = [
  {
    id: "0x765277eebeca2e31912c9946eae1021199b39c61",
    address: "0x765277eebeca2e31912c9946eae1021199b39c61",
    chainId: "2000",
    symbol: "USDC",
  },
  {
    id: "0xb44a9b6905af7c801311e8f4e76932ee959c663c",
    address: "0xb44a9b6905af7c801311e8f4e76932ee959c663c",
    chainId: "2000",
    symbol: "WETH",
  },
  {
    id: "0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C",
    address: "0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C",
    chainId: "2000",
    symbol: "DAI",
  },
  {
    id: "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
    address: "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
    chainId: "2000",
    symbol: "USDT",
  },
  {
    id: "0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101",
    address: "0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101",
    chainId: "2000",
    symbol: "WWDOGE",
  },
  {
    id: "0x332730a4f6e03d9c55829435f10360e13cfa41ff",
    address: "0x332730a4f6e03d9c55829435f10360e13cfa41ff",
    chainId: "2000",
    symbol: "BUSD",
  },
  {
    id: CONE_ADDRESS,
    address: CONE_ADDRESS,
    chainId: "2000",
    symbol: "PEPE",
  },
];

const ROUTE_ASSETS_SYMBOLS = [
  "USDC",
  "WWDOGE",
  "BUSD",
  "PEPE",
  "USD+",
];

export const ROUTE_ASSETS = BASE_ASSETS_WHITELIST.filter(x => ROUTE_ASSETS_SYMBOLS.includes(x.symbol));
