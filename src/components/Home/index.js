import React, { Component } from 'react';
import Weather from '../Weather/index';
import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import { AuthUserContext } from '../Session';


{/*import Cards from '../Covid/Cards';
import fetchCovidData from '../../api';
import Covid from '../Covid/Covid'
import CovidTracker from '../CovidTracker/Index'
import PresetCovid from '../PresetCovid/Index'*/}

class HomePage extends React.Component {

  state = {
    data: {},
    city: []
  }

  /* async componentDidMount() {
    const fetchedData = await fetchCovidData();
    this.setState({ data: fetchedData });
  } */
  componentDidMount() {


    this.props.firebase.user(this.props.firebase.auth.currentUser.uid).child('city').on('value', snapshot => {
      const countryObject = snapshot.val();
      if (countryObject) {
        const countries = Object.keys(countryObject);

        this.setState({
          countries,
        });
      }
    });

  }

  componentWillUnmount() {
    this.props.firebase.user(this.props.firebase.auth.currentUser.uid).child('city').off();
  }

  render() {
    const { data } = this.state;

    return (<div>
      <h1>Home Page</h1>

      <br></br>
      {/*  <Covid /> */}
      {/*this.state.countries.map((item, index) => (<PresetCovid key={index} order={index + 1} country={item} />))*/}
      {/* <PresetCovid order='1' country='sweden' />
      <PresetCovid order='2' country='norway' />
      <PresetCovid order='3' country='mongolia' /> 
      <MultiCovid order='4' countries={['norway', 'sweden'] */}
      {/*   <CovidTracker /> */}
      {/*infected={false}} 
        {/*  <Cards data={data} />
      <Chart />
      <Country /> */}

      <Weather />
      <h3>My favourite cities</h3>
      <FavCities />
    </div>
    )
  }
};

class FavCitiesBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      loading: false,
      favourites: [],
    };
  }
  onChangeText = event => {
    this.setState({ text: event.target.value });
  };

  onCreateFavourite = (event, authUser) => {
    this.props.firebase.favourites().push({
      text: this.state.text,
      userId: authUser.uid,
    });

    this.setState({ text: '' });
    event.preventDefault();
  };

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.favourites().on('value', snapshot => {
      const favObject = snapshot.val();

      if (favObject) {
        const FavCitiesList = Object.keys(favObject).map(key => ({
          ...favObject[key],
          uid: key,

        }));

        this.setState({
          favourites: FavCitiesList,
          loading: false,
        });

      } else {
        this.setState({ favourites: null, loading: false });
      }
    });
  }

  /*componentWillUnmount() {
    this.props.firebase.favourites().off();
  }*/

  render() {
    const { text, favourites, loading } = this.state;

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            {loading && <div>Loading ...</div>}
            {favourites ? (
              <FavCitiesList favourites={favourites} />
            ) : (
              <div>You have no favourite cities ...</div>
            )}
            <form onSubmit={event => this.onCreateFavourite(event, authUser)}>
              <input
                type="text"
                value={text}
                onChange={this.onChangeText}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const FavCitiesList = ({ favourites }) => (
  <ul>
    {favourites.map(favourites => (
      <FavCitiesItem key={favourites.uid} favourites={favourites} />
    ))} </ul>
);

const FavCitiesItem = ({ favourites }) => (
  <li>
    <strong>{favourites.userId}</strong> {favourites.text}
  </li>
);

const FavCities = withFirebase(FavCitiesBase);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);