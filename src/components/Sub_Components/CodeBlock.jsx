import { useRef, useState } from 'react'

import propTypes from 'prop-types'

import AceEditor from 'react-ace'
import '@/Routes/aceEditorStyles'
import CopyButton from '@/components/Sub_Components/CopyButton'

const CodeBlock = ({ code, language }) => {
    // console.log('language', language)

    const codeRef = useRef(null)
    const [editorHeights, setEditorHeights] = useState({})
    const [editorWidths, setEditorWidths] = useState({})

    //INFO Calculate the height and width of the editor based on the content
    const calculateEditorDimensions = (code, fontSize = 16, padding = 20) => {
        const lineHeight = fontSize * 1.2 // Approximate line height in pixels, adjusted for readability
        const charWidth = fontSize / 2 + 2 // Approximate character width in pixels for monospaced font

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

    // useEffect(() => {
    //     if (codeRef.current) {
    //         hljs.highlightElement(codeRef.current)
    //     }
    // }, [code])

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
                    readOnly: true,
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
}

export default CodeBlock
