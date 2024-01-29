import { addMonacoStyles, defineUserServices, MonacoEditorLanguageClientWrapper } from './bundle/index.js';
import monarchSyntax from "./odd-example.monarch.js";
import { configureWorker } from './setup.js';

addMonacoStyles('monaco-editor-styles');

const initialCode = `deviceType PC {
    keyboard
    mouse
    screen
}

deviceType Smartphone {
    wirelessCharge
    NFC
    camera
}

device MyPhone type Smartphone {
    wirelessCharge: "yes"
    NFC: "no"
    camera: "13Mpixel"
}

device MyPC type PC {
    keyboard: "US"
    mouse: "wireless"
    screen: "1920x1080"
}
`;

export const setupConfigClassic = () => {
    return {
        wrapperConfig: {
            serviceConfig: defineUserServices(),
            editorAppConfig: {
                $type: 'classic',
                languageId: 'odd-example',
                code: initialCode,
                useDiffEditor: false,
                languageExtensionConfig: { id: 'langium' },
                languageDef: monarchSyntax,
                editorOptions: {
                    'semanticHighlighting.enabled': true,
                    theme: 'vs-dark'
                }
            }
        },
        languageClientConfig: configureWorker()
    };
};

export const executeClassic = async (htmlElement) => {
    const userConfig = setupConfigClassic();
    const wrapper = new MonacoEditorLanguageClientWrapper();
    await wrapper.initAndStart(userConfig, htmlElement);
};
