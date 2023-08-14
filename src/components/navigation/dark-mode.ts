// import {DarkMode, DarkModeListener, DarkModeListenerHandle} from '@aparajita/capacitor-dark-mode';

// export let HSThemeAppearance: any;

// export const initPrelineDarkmode = async () => {
//     HSThemeAppearance = {
//         init() {
//             const defaultTheme = 'dark'
//             const theme = localStorage.getItem('hs_theme') || defaultTheme

//             if (document.querySelector('html')?.classList.contains('dark')) return
//             this.setAppearance(theme)
//         },
//         _resetStylesOnLoad() {
//             const $resetStyles = document.createElement('style')
//             $resetStyles.innerText = `*{transition: unset !important;}`
//             $resetStyles.setAttribute('data-hs-appearance-onload-styles', '')
//             document.head.appendChild($resetStyles)
//             return $resetStyles
//         },
//         async setAppearance(theme:any, saveInStore = true, dispatchEvent = true) {
//             const $resetStylesEl = this._resetStylesOnLoad()

//             if (saveInStore) {
//                 localStorage.setItem('hs_theme', theme)
//             }

//             if (theme === 'auto') {
//                 theme = (await DarkMode.isDarkMode()).dark ? 'dark' : 'default'
//             }

//             document.querySelector('html')?.classList.remove('dark')
//             document.querySelector('html')?.classList.remove('default')
//             document.querySelector('html')?.classList.remove('auto')

//             document.querySelector('html')?.classList.add(this.getOriginalAppearance())

//             setTimeout(() => {
//                 $resetStylesEl.remove()
//             })

//             // if (dispatchEvent) {
//             //     window.dispatchEvent(new CustomEvent('on-hs-appearance-change', { detail: theme }))
//             // }
//         },
//         async getAppearance() {
//             let theme = this.getOriginalAppearance()
//             if (theme === 'auto') {
//                 theme = (await DarkMode.isDarkMode()).dark ? 'dark' : 'default'
//             }
//             return theme
//         },
//         getOriginalAppearance() {
//             const defaultTheme = 'default'
//             return localStorage.getItem('hs_theme') || defaultTheme
//         }
//     }
//     // const { matchMediaPolyfill } :any= lazy(await import('matchmedia-polyfill'));


//     // matchMediaPolyfill.initialize();    
//     HSThemeAppearance.init()

//     DarkMode.addAppearanceListener = (_listener: DarkModeListener) => new Promise<DarkModeListenerHandle>((resolve, reject) => {
//         if (HSThemeAppearance.getOriginalAppearance() === 'auto') {
//             HSThemeAppearance.setAppearance('auto', false)
//         }

//         return resolve({remove: () => ({})});
//     })

    // window.addEventListener('load', () => {
    //     const $clickableThemes = document.querySelectorAll('[data-hs-theme-click-value]')
    //     const $switchableThemes = document.querySelectorAll('[data-hs-theme-switch]')

    //     // $clickableThemes.forEach(($item:any) => {
    //     //     $item.addEventListener('click', () => HSThemeAppearance.setAppearance($item.getAttribute('data-hs-theme-click-value'), true, $item))
    //     // })

    //     // $switchableThemes.forEach(async ($item:any) => {
    //     //     $item.addEventListener('change', (e:any) => {
    //     //         HSThemeAppearance.setAppearance(e.target.checked ? 'dark' : 'default')
    //     //     })

    //     //     $item.checked = await HSThemeAppearance.getAppearance() === 'dark'
    //     // })

    //     window.addEventListener('on-hs-appearance-change', (e:any) => {
    //         $switchableThemes.forEach(($item:any) => {
    //             $item.checked = e.detail === 'dark'
    //         })
    //     })
    // })
// }