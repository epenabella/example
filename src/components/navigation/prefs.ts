import type { DarkModeGetterResult } from '@aparajita/capacitor-dark-mode'
import { DarkModeAppearance } from '@aparajita/capacitor-dark-mode'

export function getAppearancePref(): DarkModeGetterResult {
  const item = DarkModeAppearance.dark ;//localStorage.getItem('appearance')

    return item ? item as DarkModeAppearance 
      : DarkModeAppearance.system
}

export function getSyncStatusBarPref(): boolean {
  return localStorage.getItem('syncStatusBar') === 'true'
}

export function setAppearancePref(appearance: DarkModeAppearance): void {
  (document.getElementsByTagName('html')[0] as HTMLElement)
    ?.classList.toggle('dark', appearance === 'dark');
  // localStorage.setItem('appearance', appearance)
}

// export function setSyncStatusBarPref(syncStatusBar: boolean): void {
//   localStorage.setItem('syncStatusBar', syncStatusBar ? 'true' : 'false')
// }

// if (localStorage && localStorage.getItem('syncStatusBar')) {
//   setSyncStatusBarPref(true)
// }