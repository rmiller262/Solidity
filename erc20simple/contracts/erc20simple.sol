// SPDX-License-Identifier: MIT
pragma solidity >=0.4.17 <0.6.12;
import "@openzeppelin/contracts/math/SafeMath.sol";

contract ERC20Basic {

    string public constant name = "ERC20Basic";
    string public constant symbol = "BSC";
    uint8 public constant decimals = 18;

    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
    event Transfer(address indexed from, address indexed to, uint tokens);

mapping(address => uint256) balances;
mapping(address => mapping (address => uint256)) allowed;

//Total number of ICO tokens





uint256 totalSupply_;





using SafeMath for uint256;

constructor  (uint256 total) public 
    totalSupply_ = total;
    balances[msg.sender] = totalSupply_;

}

//get Total Token Supply
 
function totalSupply() public view returns (uint256) {
    return totalSupply_;
}
//Get token balance of owner

function balanceof(address tokenOwner) public view returns (uint) {
    return balances[tokenOwner];

}
// Transfer tokens to another account

function transfer (address receiver,uint numTokens) public returns (bool) {
    require(numTokens <= balances[msg.sender]);
    balances[msg.sender] = balances[msg.sender].sub(numTokens);
    balances[receiver] = balances[receiver].add(numTokens);
    emit Transfer(msg.sender, receiver, numTokens);
    return true;
}
//Approve Delegate to Withdraw Tokens

function approve(address delegate, uint numTokens) public returns(bool) {
    allowed[msg.sender] [delegate] = numTokens;
    emit Approval(msg.sender, delegate, numTokens);
    return true;
}
//Get  Number of tokens approved for Withdrawal

function allowance(address owner, address delegate) public view returns (uint) {
    return allowed[owner][delegate];
}
//Transfer Tokens by Delegate

function transferFrom(address owner, address buyer, uint numTokens) public returns (bool) {
    require(numTokens <= balances[owner]);
    require(numTokens <= allowed[owner][msg.sender]);
    
    balances[owner] = balances[owner].sub(numTokens);
    allowed[owner][msg.sender] = allowed(owner)[msg.sender].sub(numTokens);
    balances[buyer] = balances[buyer].add(numTokens);
    Transfer(owner, buyer, numTokens);
    return true;

}

//library SafeMath { 
function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <=a);
    return a-b;
}    
    
 function add(uint256 a, uint256 b) internal pure returns (uint256) {
    uint256 c = a + b;
    assert (c>=a);
    assert (c >= a);
    return c;
    
 }
}
