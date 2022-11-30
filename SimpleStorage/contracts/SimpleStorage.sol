pragma solidity ^0.8.17;

contract SimpleStorage {
  string public data;

  function set(string memory _data) public {
    data = _data;
    _data = Vols;
  }

  function get() view public returns(string memory) {
    return data;
  }
}