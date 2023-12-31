const MINE_RATE = 1000; // 1 second
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '-----',
    hash: 'hash-one',
    data: [],
    nonce: 0,
    difficulty: INITIAL_DIFFICULTY,
}

const STARTING_BALANCE = 10000;

module.exports = { 
    GENESIS_DATA,
    MINE_RATE,
    STARTING_BALANCE
};