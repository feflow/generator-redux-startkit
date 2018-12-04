import { connect } from 'react-redux';

import {
    setTitle
} from '../actions/actions';

// Map Redux state to component props
function mapStateToProps(state, ownProps) {
    return state;
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        setTitle: (title) => {dispatch(setTitle(title))}
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
);
