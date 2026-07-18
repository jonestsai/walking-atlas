const required = (name: string): string => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
};

export const config = {
  apiUrl: required("EXPO_PUBLIC_API_URL").replace(/\/$/, ""),
  supabaseUrl: required("EXPO_PUBLIC_SUPABASE_URL"),
  supabasePublishableKey: required("EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY"),
  mapStyleUrl: required("EXPO_PUBLIC_MAP_STYLE_URL"),
};
