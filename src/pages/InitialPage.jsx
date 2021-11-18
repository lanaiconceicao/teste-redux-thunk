import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
// import { getCharactersHP } from '../services/requestAPI';

import { fetchApiWithThunk } from '../redux/actions'

class InitialPage extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    }
    this.nextImage = this.nextImage.bind(this);
  }

  componentDidMount() {
    const { getHPAPI, getPic } = this.props;
    getHPAPI(getPic);
    
  }

  nextImage() {
    this.setState({
      index: this.state.index + 1,
    })
  }

  render() {
    // const { getPic } = this.props;
    // const getPicArray = Object.keys(getPic);
    // console.log(getPicArray)
    const { getPic } = this.props;
    const { index } = this.state;
    return (
      <>
        <Header />
        {/* { getPic.map((item, index) => (
          <img key={index} src={item.image} alt={item.name}/>
        ))} */}
      
        <img
          src={getPic[index].image}
          alt={getPic[index].name}
          style={{width: '200px', height: '300px', objectFit: 'cover'}}
        />
        <button type="button" onClick={ this.nextImage }>Próximo</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  getPic: state.reducer.imagesChar,
});

const mapDispatchToProps = (dispatch) => ({
  getHPAPI: (state) => dispatch(fetchApiWithThunk(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InitialPage);
