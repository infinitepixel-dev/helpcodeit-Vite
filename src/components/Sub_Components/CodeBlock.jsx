import { useRef, useState, useEffect } from 'react';
import propTypes from 'prop-types';
import AceEditor from 'react-ace';
import '@/Routes/aceEditorStyles';
import CopyButton from '@/components/Sub_Components/CopyButton';
// import vibrant ink theme and javascript mode
import 'ace-builds/src-noconflict/theme-vibrant_ink';
import 'ace-builds/src-noconflict/mode-javascript';

/*INFO Supported ACE Languages
https://cloud9-sdk.readme.io/docs/language-mode
*/

/*ANCHOR Current languages in use:
javascript
html
json
text
*/

const getPlatform = () => {
    if (navigator.userAgentData && navigator.userAgentData.platform) {
        return navigator.userAgentData.platform;
    } else if (navigator.platform) {
        return navigator.platform;
    } else {
        return 'unknown';
    }
};

const CodeBlock = ({ code, language, readOnly }) => {
    const codeRef = useRef(null);
    const [editorHeights, setEditorHeights] = useState({});
    const [editorWidths, setEditorWidths] = useState({});
    const [readOnlyValue, setReadOnly] = useState(true);

    const calculateEditorDimensions = (code, fontSize = 16, padding = 30) => {
        let lineHeight = fontSize * 1.3;
        let charWidth = fontSize / 2 + 3;

        const platform = getPlatform();

        if (/Win/.test(platform)) {
            console.log('windows');
            padding = 40;
            lineHeight = fontSize * 1.2;
            charWidth = fontSize / 2 + 2;
        } else if (/Mac/.test(platform)) {
            console.log('mac');
            padding = 40;
            lineHeight = fontSize * 1.3;
            charWidth = fontSize / 2 + 3;
        } else {
            padding = 40;
            lineHeight = fontSize * 1.3;
            charWidth = fontSize / 2 + 3;
        }

        const numLines = code.split('\n').length;
        const maxLineLength = Math.max(...code.split('\n').map((line) => line.length));

        const contentHeight = numLines * lineHeight + padding;
        const contentWidth = maxLineLength * charWidth + padding;

        return { height: `${contentHeight}px`, width: `${contentWidth}px` };
    };

    const handleEditorLoad = (code, key) => {
        const { height, width } = calculateEditorDimensions(code);
        setEditorHeights((prev) => ({ ...prev, [key]: height }));
        setEditorWidths((prev) => ({ ...prev, [key]: width }));
    };

    useEffect(() => {
        const setEditorToReadOnly = async () => {
            if (readOnly === true) {
                setReadOnly(true);
            } else if (readOnly === false) {
                setReadOnly(false);
            } else {
                setReadOnly(true);
            }
        };
        setEditorToReadOnly();
    }, [readOnly]);

    return (
        <div
            className="my-5 mb-5 flex justify-center rounded-lg border border-gray-500 p-0.5"
            style={{
                position: 'relative',
                width: editorWidths.arrowFunction || '100%',
                height: editorHeights.arrowFunction || '50em',
            }}
        >
            <AceEditor
                ref={codeRef}
                mode={language}
                theme="vibrant_ink"
                name="code"
                fontSize={16}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={false}
                value={code}
                setOptions={{
                    vScrollBarAlwaysVisible: false,
                    printMargin: false,
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 4,
                    readOnly: readOnlyValue,
                    wrap: true,
                    highlightGutterLine: false,
                    highlightSelectedWord: false,
                    lineHeight: 1.3,
                    showCursor: false,
                    behavioursEnabled: false,
                }}
                style={{ width: '100%', height: '100%' }}
                onLoad={() => handleEditorLoad(code, 'arrowFunction')}
            />
            <CopyButton textToCopy={code} position="absolute bottom-1 right-1" />
        </div>
    );
};

CodeBlock.propTypes = {
    code: propTypes.string.isRequired,
    language: propTypes.string.isRequired,
    readOnly: propTypes.bool,
};

export default CodeBlock;