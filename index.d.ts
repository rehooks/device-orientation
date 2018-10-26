interface DeviceOrientation {
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
  absolute: boolean;
}

export default function useDeviceOrientation(): DeviceOrientation;
