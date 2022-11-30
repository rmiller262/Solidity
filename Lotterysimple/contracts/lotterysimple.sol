pragma solidity >=0.4.17 <0.6.12;

contract Lottery {
    address public manager;
    address [] public players;
    
    function LotteryOne() public {
        manager = msg.sender;
        
    }
    
    function enter () public payable {
        require(msg.value > .01 ether);
        
        players.push(msg.sender);
    }
    
    function random () private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }
    
    function pickWinner() public restricted{
        uint index = random() % players.length;
        players[index].transfer(this.balance);    //this.balance sends the entire balance of the contract to a given address
        players = new address [] (0);
        
    }
    
    modifier restricted() {                       //modifier is used when repetitive logic is used so we don't have to repeat ourselves.
        require(msg.sender == manager);
        _;
    }


  function getPlayers() public view  {
     //return 
     players;
  
  } 
  
 
}