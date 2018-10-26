'use strict';
let test = require('ava');
let { createElement: h } = require('react');
let ReactTestRenderer = require('react-test-renderer');
let useDeviceOrientation = require('./');

function render(val) {
  return ReactTestRenderer.create(val);
}

test(t => {
  function Component() {
    let value = useDeviceOrientation();
    return h('div', { value });
  }

  let input = render(h(Component));

  t.deepEqual(input.toJSON().props.value, {
		absolute: false,
		alpha: null,
		beta: null,
		gamma: null
	});
});
