var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');

function puke (object) {
    return <pre>{JSON.stringify(object, null, 2)}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <UserDetailsWrapper header="Player 1">
            <UserDetails info={props.playerInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player 2">
            <UserDetails info={props.playerInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}>
              <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
              Initiate Battle!
              </button>
          </div>
          <div className="col-sm-12" style={styles.space}>
              <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
              </Link>
          </div>
        </div>
      </div>

}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playerInfo: PropTypes.array.isRequired,
}

module.exports = ConfirmBattle;
