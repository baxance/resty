import './results.scss';

function Results(props) {
  return (
    <div className="resultsDiv">
      <h3>Results</h3>
      <p>RESULTS HERE</p>
      <p>{props.method} {props.url}</p>

    </div>
  )
}

export default Results;