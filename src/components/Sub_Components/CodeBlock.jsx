import { useRef, useState } from 'react'

import propTypes from 'prop-types'

import AceEditor from 'react-ace'
import '@/Routes/aceEditorStyles'
import CopyButton from '@/components/Sub_Components/CopyButton'
import { useEffect } from 'react'

/*INFO Supported ACE Languages
https://cloud9-sdk.readme.io/docs/language-mode
*/

/*ANCHOR Current languages in use:
javascript
html
json
text
*/

const CodeBlock = ({ code, language, readOnly }) => {
    // console.log('language', language)

    const codeRef = useRef(null)
    const [editorHeights, setEditorHeights] = useState({})
    const [editorWidths, setEditorWidths] = useState({})
    const [readOnlyValue, setReadOnly] = useState(true)

    //INFO Calculate the height and width of the editor based on the content
    const calculateEditorDimensions = (code, fontSize = 16, padding = 30) => {
        let lineHeight = fontSize * 1.3 // Approximate line height in pixels, adjusted for readability
        let charWidth = fontSize / 2 + 3 // Approximate character width in pixels for monospaced font

        //get device os
        const userAgent = window.navigator.userAgentData.platform
        console.log('userAgent:', window.navigator.userAgentData.platform)
        // if the os is windows
        console.log()
        if (userAgent === 'Windows') {
            console.log('windows')
            padding = 40
            lineHeight = fontSize * 1.2
            charWidth = fontSize / 2 + 2
        } else if (userAgent === 'macOS') {
            console.log('mac')
            padding = 40
            lineHeight = fontSize * 1.3
            charWidth = fontSize / 2 + 3
        } else {
            console.log('Other', userAgent)
            padding = 40
            lineHeight = fontSize * 1.3
            charWidth = fontSize / 2 + 3
        }

        const numLines = code.split('\n').length // Calculate number of lines
        const maxLineLength = Math.max(
            ...code.split('\n').map((line) => line.length)
        )

        const contentHeight = numLines * lineHeight + padding // Adjust height calculation
        const contentWidth = maxLineLength * charWidth + padding // Adjust width calculation

        // console.log('contentHeight', contentHeight)
        // console.log('contentWidth', contentWidth, '\n')

        return { height: `${contentHeight}px`, width: `${contentWidth}px` }
    }

    //INFO Loads the editor and calculates the height and width
    const handleEditorLoad = (code, key) => {
        // console.log('code', code)
        // console.log('key', key)

        const { height, width } = calculateEditorDimensions(code)
        setEditorHeights((prev) => ({ ...prev, [key]: height }))
        setEditorWidths((prev) => ({ ...prev, [key]: width }))
    }

    useEffect(() => {
        const setEditorToReadOnly = async () => {
            //set readonly
            if (readOnly === true) {
                setReadOnly(true)
            } else if (readOnly === false) {
                setReadOnly(false)
            } else {
                setReadOnly(true)
            }
        }
        setEditorToReadOnly()
    }, [readOnly])

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
                highlightActiveLine={true}
                value={code}
                setOptions={{
                    vScrollBarAlwaysVisible: false,
                    printMargin: false,
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: false,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                    readOnly: readOnlyValue,
                }}
                style={{ width: '100%', height: '100%' }}
                onLoad={() => handleEditorLoad(code, 'arrowFunction')}
            />
            <CopyButton
                textToCopy={code}
                position="absolute bottom-1 right-1" // Adjusted for top right-hand corner
            />
        </div>
    )
}

CodeBlock.propTypes = {
    code: propTypes.string.isRequired,
    language: propTypes.string.isRequired,
    readOnly: propTypes.bool,
}

export default CodeBlock
