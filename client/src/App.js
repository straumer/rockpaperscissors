import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';
import Hero from 'react-bulma-components/lib/components/hero';
import Container from 'react-bulma-components/lib/components/container';
import Box from 'react-bulma-components/lib/components/box';
import Columns from 'react-bulma-components/lib/components/columns';
import "./App.scss";
import RockPaperScissorsPicker from "./RockPaperScissorsPicker";

// Rock Paper Scissors App
class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null
  };

  componentDidMount = async () => {
    try {
      //// Get network provider and web3 instance.
      //const web3 = await getWeb3();

      //// Use web3 to get the user's accounts.
      //const accounts = await web3.eth.getAccounts();

      //// Get the contract instance.
      //const networkId = await web3.eth.net.getId();
      //const deployedNetwork = SimpleStorageContract.networks[networkId];
      //const instance = new web3.eth.Contract(
      //  SimpleStorageContract.abi,
      //  deployedNetwork && deployedNetwork.address,
      //);

      //// Set web3, accounts, and contract to the state, and then proceed with an
      //// example of interacting with the contract's methods.
      //this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    //const { accounts, contract } = this.state;

    //// Stores a given value, 5 by default.
    //await contract.methods.set(5).send({ from: accounts[0] });

    //// Get the value from the contract to prove it worked.
    //const response = await contract.methods.get().call();

    //// Update state with the result.
    //this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return (
        <Hero className="is-fullheight">
          <Hero.Head>
          </Hero.Head>
          <Hero.Body>
            <Container className="has-text-centered">
              <Columns className="is-centered">
                <Columns.Column className="is-two-thirds-tablet is-half-desktop is-two-fifths-fullhd">
                  <Box>
                    <Columns className="is-mobile">
                      <Columns.Column>
                        <RockPaperScissorsPicker name="player1pick"/>
                      </Columns.Column>
                      <Columns.Column>
                        <RockPaperScissorsPicker name="player2pick"/>
                      </Columns.Column>
                    </Columns>
                  </Box>
                </Columns.Column>
              </Columns>
            </Container>
          </Hero.Body>
          <Hero.Footer>
          </Hero.Footer>
        </Hero>
      );
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 40</strong> of App.js.
        </p>
        <Button color="danger">My bulma button</Button>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    )
  }
}

export default App;
