import React from 'react';

class ReadString extends React.Component {
  state = { dataKey: null, greet: '' };

  componentDidMount() {
    const { drizzle } = this.props;
    console.log(drizzle);
    const contract = drizzle.contracts.MyStringStore;
    const greet = drizzle.contracts.Greeter;
    console.log(greet);
    console.log(greet.address);
    // let drizzle know we want to watch the `myString` method
    const dataKey = contract.methods['myString'].cacheCall();
    this.setState({ greet: greet });
    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    // get the contract state from drizzleState
    const { MyStringStore } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const myString = MyStringStore.myString[this.state.dataKey];

    // if it exists, then we display its value
    return (
      <div>
        <p>My stored string: {myString && myString.value}</p>
        <p>
          Name: {this.state.greet.contractName} <br /> Address:
          {this.state.greet.address}
        </p>
      </div>
    );
  }
}

export default ReadString;
