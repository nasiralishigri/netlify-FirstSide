pragma solidity ^ 0.5.0;
import '../node_modules/multi-token-standard/contracts/tokens/ERC1155/ERC1155.sol';
import '../node_modules/multi-token-standard/contracts/tokens/ERC1155/ERC1155Metadata.sol';

contract OurToken is ERC1155, ERC1155Metadata {
    constructor() public{

    }
}