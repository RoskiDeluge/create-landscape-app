import { api } from './api';
import { store } from './store';

export class Subscription {

  // uncomment the following code to start up a subscription on the '/' path
  //
  // see on-watch in your app's hoon file for behaviour
  //
  start() {
    if (api.authTokens) {
      // this.initializekindling();
    } else {
      console.error("~~~ ERROR: Must set api.authTokens before operation ~~~");
    }
  }

  // initializekindling() {
  //   api.bind('/', 'PUT', api.authTokens.ship, 'kindling',
  //     this.handleEvent.bind(this),
  //     this.handleError.bind(this));
  // }

  handleEvent(diff) {
    store.handleEvent(diff);
  }

  handleError(err) {
    console.error(err);
    api.bind('/', 'PUT', api.authTokens.ship, 'kindling',
      this.handleEvent.bind(this),
      this.handleError.bind(this));
  }
}

export let subscription = new Subscription();
