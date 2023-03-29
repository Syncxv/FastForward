import BypassDefinition from './BypassDefinition.js'

export default class ImgTaxi extends BypassDefinition {
    constructor() {
        super()
        // custom bypass required bases can be set here
    }


    execute() {
        const overlayAdLink = document.querySelector('a.overlay_ad_link');

        if (overlayAdLink) {
            overlayAdLink.click();
        }
    }
}

export const matches = ['imgtaxi.com']
