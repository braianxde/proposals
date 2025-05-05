// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProposalStorage {
    struct Proposal {
        string title;
        string description;
    }

    Proposal[] public proposals;

    event ProposalCreated(string title, string description, address indexed creator);

    function createProposal(string memory _title, string memory _description) external returns (bool) {
        require(bytes(_title).length > 0, "Title cannot be empty");
         require(bytes(_description).length > 0, "Description cannot be empty");

        proposals.push(Proposal({
            title: _title,
            description: _description
        }));

      
        emit ProposalCreated(_title, _description, msg.sender);

        return true;
    }

    function getAllProposals() external view returns (Proposal[] memory) {       
        return proposals;
    }
}