import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authorized from './Authorized';

class AuthorizedRoute extends React.Component {
  render() {
    const {
      component: Component,
      render,
      authority,
      redirectPath,
      ...rest
    } = this.props;
    console.log(this);
    return (
      <Authorized
        authority={authority}
        noMatch={
          <Route
            {...rest}
            render={() => <Redirect to={{ pathname: redirectPath }} />}
          />
        }
      >
        <Route
          {...rest}
          render={props =>
            (Component ? <Component {...props} /> : render(props))
          }
        />
      </Authorized>
    );
  }
}

export default AuthorizedRoute;
