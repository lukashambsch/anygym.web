import React from 'react';
import { mount } from 'enzyme';

import router from './router';

function setup() {
  const app = mount(router);

  return app;
}

describe('<App />', () => {

  it('App renders self and subcomponents', () => {
    const app = setup();

    expect(app.find('Nav').length).toEqual(1);
    expect(app.find('Route').length).toBeGreaterThan(5);
  });

});
