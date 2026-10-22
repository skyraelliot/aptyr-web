import homeScreenshot from '../assets/aptyr-home.png';
import adaptScreenshot from '../assets/aptyr-adapt.png';
import workoutScreenshot from '../assets/aptyr-workout.png';

// Use real HTTPS URLs only. Empty values render disabled controls, never fake links.
export const IOS_BETA_URL = 'https://testflight.apple.com/join/9vtPWG75';
export const ANDROID_GROUP_URL = 'https://groups.google.com/g/aptyr-beta-testers';
// Optional direct link; testers currently obtain the opt-in link in the group.
export const ANDROID_TESTING_URL = '';
export const FEEDBACK_FORM_URL = 'https://forms.gle/hREDZ7tgJQQyY4iJA';
export const INSTAGRAM_URL = 'https://www.instagram.com/aptyrfit/';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594728122140';

// Put approved assets in public/assets and set their root-relative paths here.
// New teal A with amber barbell only. Do not substitute the original geometric A.
export const LOGO_URL = import.meta.env.BASE_URL + 'assets/aptyr-barbell-logo.png';
export const SCREENSHOTS: { src: string; alt: string; label: string }[] = [
  { src: homeScreenshot, alt: 'Aptyr Home showing today’s Upper Strength workout, its estimated duration, and the planned exercises.', label: 'Your program' },
  { src: adaptScreenshot, alt: 'Aptyr Smart Adapt with Day off, Okay energy, 60 minutes, and Home equipment selected, above the Adjust My Workout button.', label: 'Your day' },
  { src: workoutScreenshot, alt: 'Aptyr active Upper Strength workout showing Lat Pulldown, 3 sets of 8–12 reps, a two-minute rest, and exercise logging controls.', label: 'Your session' },
];

export function configuredUrl(value: string): string | undefined {
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : undefined; }
  catch { return undefined; }
}
