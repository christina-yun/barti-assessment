import Reach from 'react';
import result from './result'
import {connect} from 'react-redux';

const ResultList = (props) => {
    const results = props.results;

    return (
        <div className='resultList'>
            {results === null||undefined ? 
                <h3>No results</h3> : 
            results.map(drink => {
                return <Result key={result.id} result={result} />
            })}
        </div>
        
    )
}
const mapStateToProps = (state) => {
    return ({
        results: state.search
    })
}
export default connect(mapStateToProps)(ResultList);