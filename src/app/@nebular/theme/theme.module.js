/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { nbBuiltInJSThemesToken, nbMediaBreakpointsToken, nbThemeOptionsToken, nbJSThemesToken, NB_DOCUMENT, NB_WINDOW, } from './theme.options';
import { NbThemeService } from './services/theme.service';
import { NbSpinnerService } from './services/spinner.service';
import { BUILT_IN_THEMES, NbJSThemesRegistry } from './services/js-themes-registry.service';
import { DEFAULT_MEDIA_BREAKPOINTS, NbMediaBreakpointsService, } from './services/breakpoints.service';
import { NbLayoutDirectionService, NbLayoutDirection, NB_LAYOUT_DIRECTION } from './services/direction.service';
export function nbWindowFactory() {
    return window;
}
var NbThemeModule = /** @class */ (function () {
    function NbThemeModule() {
    }
    // TODO: check the options (throw exception?)
    /**
     * Main Theme Module
     *
     * @param nbThemeOptions {NbThemeOptions} Main theme options
     * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
     * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
     *
     * @returns {ModuleWithProviders}
     */
    // TODO: check the options (throw exception?)
    /**
       * Main Theme Module
       *
       * @param nbThemeOptions {NbThemeOptions} Main theme options
       * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
       * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
       *
       * @returns {ModuleWithProviders}
       */
    NbThemeModule.forRoot = 
    // TODO: check the options (throw exception?)
    /**
       * Main Theme Module
       *
       * @param nbThemeOptions {NbThemeOptions} Main theme options
       * @param nbJSThemes {NbJSThemeOptions[]} List of JS Themes, will be merged with default themes
       * @param nbMediaBreakpoints {NbMediaBreakpoint} Available media breakpoints
       *
       * @returns {ModuleWithProviders}
       */
    function (nbThemeOptions, nbJSThemes, nbMediaBreakpoints, layoutDirection) {
        return {
            ngModule: NbThemeModule,
            providers: [
                { provide: nbThemeOptionsToken, useValue: nbThemeOptions || {} },
                { provide: nbBuiltInJSThemesToken, useValue: BUILT_IN_THEMES },
                { provide: nbJSThemesToken, useValue: nbJSThemes || [] },
                { provide: nbMediaBreakpointsToken, useValue: nbMediaBreakpoints || DEFAULT_MEDIA_BREAKPOINTS },
                { provide: NB_WINDOW, useFactory: nbWindowFactory },
                { provide: NB_DOCUMENT, useExisting: DOCUMENT },
                NbJSThemesRegistry,
                NbThemeService,
                NbMediaBreakpointsService,
                NbSpinnerService,
                { provide: NB_LAYOUT_DIRECTION, useValue: layoutDirection || NbLayoutDirection.LTR },
                NbLayoutDirectionService,
            ],
        };
    };
    NbThemeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    exports: [],
                },] },
    ];
    return NbThemeModule;
}());
export { NbThemeModule };
//# sourceMappingURL=theme.module.js.map