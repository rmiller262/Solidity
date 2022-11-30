pragma solidity >=0.5.0;

 //import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
 //import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract sampletoken  is ERC20, ERC20Detailed {
    string public constant name = "sampletoken";
    string public constant symbol= "SLT";
    uint public constant decimals =18;



constructor (uint256 initialSupply)  public {
        require(_initialSupply > 0, ("INITIAL_SUPPLY has to be greater than 0");
        _mint(msg.sender, initialSupply);
    }
}


//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

//contract GLDToken is ERC20, ERC20Detailed {
  //  constructor(uint256 initialSupply) ERC20Detailed("Gold", "GLD", 18) public {
    //    _mint(msg.sender, initialSupply);
//    }
//}