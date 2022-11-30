pragma solidity 0.8.3;

import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AisthisiToken is ERC721PresetMinterPauserAutoId {

    constructor  ERC721PresetMinterPauserAutoId ("AisthisiToken", "AIS", "https://aisthisi.art/metadata/") {}
    
    function tokenURI(uint256 tokenId) public view virtual override{
    returns (string memory) {
        return
    string (abi.encodePacked(super.tokenURI(tokenId), ".json));

    }
}
