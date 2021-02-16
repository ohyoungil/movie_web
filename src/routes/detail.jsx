import React from 'react';
import './detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if(location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const {location} = this.props;
    console.log(location);
    if (location.state) {
      return (
        <>
        <div className="detail">
            <img className="detail__img" src={location.state.poster} alt={location.state.title} title={location.state.title} />
          <div className="detail__container">
            <div className="detail__text">
              <h3 className="detail__title">{location.state.title}</h3>
              <h5 className="detail__year">{location.state.year}</h5>
              <div className="detail__summary__container">
                <p className="detail__summary">{location.state.summary}</p>
              </div>
                <ul className="detail__genres">
                  {location.state.genres.map((genre, index) => {
                  return <li key={index} className="detail__genre">{genre}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
        </>
      )
    } else {
      return null;
    }
  }
}

export default Detail;