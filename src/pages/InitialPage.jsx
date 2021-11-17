import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
// import { getCharactersHP } from '../services/requestAPI';

import { fetchApiWithThunk } from '../redux/actions'

class InitialPage extends React.Component {
  componentDidMount() {
    const { getHPAPI } = this.props;
    getHPAPI();
    console.log(getHPAPI());
  }
  render() {
    // const { getPic } = this.props;
    // const getPicArray = Object.keys(getPic);
    // console.log(getPicArray)
    return (
      <>
        <Header />
        {/* { getPicArray.map((item, index) => (
          <p>{item}</p>
        ))} */}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getPic: state.imageChar,
});

const mapDispatchToProps = (dispatch) => ({
  getHPAPI: () => dispatch(fetchApiWithThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage);
