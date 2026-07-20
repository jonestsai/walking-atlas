import { NativeModules, Platform } from "react-native";

type LocationAccuracyModule = {
  isPreciseLocationEnabled(): Promise<boolean>;
};

export async function hasPreciseLocationAccess(): Promise<boolean> {
  if (Platform.OS !== "ios") return true;
  // Accessing a legacy native module while the new-architecture renderer is
  // still booting can abort a Release build. Resolve it only when a Walk is
  // being started, after the app has finished mounting.
  const locationAccuracyModule = NativeModules.LocationAccuracyModule as LocationAccuracyModule | undefined;
  if (!locationAccuracyModule) return false;

  try {
    return await locationAccuracyModule.isPreciseLocationEnabled();
  } catch {
    return false;
  }
}
