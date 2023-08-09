function Score(props) {
    return (
      <div>
        <p>User score: {props.userScore}</p>
        <p>Computer score: {props.computerScore}</p>
      </div>
    );
  }
  
  export default Score;