# `@rehooks/device-orientation`

> React hook for the Device Orientation API

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/device-orientation
```

## Usage

```js
import useDeviceOrientation from '@rehooks/device-orientation';

function MyComponent() {
  let value = useDeviceOrientation();
  return (
    <div>
      <p>Absolute: {value.absolute}</p>
			<p>Alpha: {value.alpha}</p>
			<p>Beta: {value.beta}</p>
			<p>Gamma: {value.gamma}</p>
    </div>
  );
}
```
