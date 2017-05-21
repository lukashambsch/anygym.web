// @flow
import { connect } from 'react-redux';
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
import { withRouter } from 'react-router';

import App from './App';
import { checkForToken } from './auth/actions';
import type { AppStateProps, AppDispatchProps } from './App';

function mapStateToProps(state: Object): AppStateProps {
  return {};
}

function mapDispatchToProps(dispatch): AppDispatchProps {
  return {
    checkForToken: () => {
      dispatch(checkForToken())
    }
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default withRouter(AppContainer);
