import React, { useState } from 'react';


const StrokeShadows = () => {
    const [type, setType] = useState('shadow');
    const [color, setColor] = useState('#000000');
    const [blur, setBlur] = useState(2);
    const [offset, setOffset] = useState(2);
    const [strokeWidth, setStrokeWidth] = useState(1);
    const [previewText, setPreviewText] = useState('Preview Text');

    const generateCSS = () => {
        if (type === 'shadow') {
            return `text-shadow: ${offset}px ${offset}px ${blur}px ${color};`;
        } else {
            // Generate stroke effect using multiple text-shadows
            const shadows = [];
            for (let i = 0; i < 360; i += 45) {
                const radians = i * (Math.PI / 180);
                const x = Math.cos(radians) * strokeWidth;
                const y = Math.sin(radians) * strokeWidth;
                shadows.push(`${x}px ${y}px 0 ${color}`);
            }
            return `text-shadow: ${shadows.join(', ')};`;
        }
    };

    return (
        <div className="stroke-shadows-generator">
            <h2 className='text-gray-700'>Text Effects Generator</h2>
            
            <div className="controls">
                <div className="control-group">
                    <label className='text-gray-700'>Effect Type:</label>
                    <select className='text-gray-700' value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="shadow">Text Shadow</option>
                        <option value="stroke">Text Stroke</option>
                    </select>
                </div>

                <div className="control-group">
                    <label className='text-gray-700'>Color:</label>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>

                {type === 'shadow' ? (
                    <>
                        <div className="control-group">
                            <label className='text-gray-700'>Blur (px):</label>
                            <input
                                type="range"
                                min="0"
                                max="20"
                                value={blur}
                                onChange={(e) => setBlur(Number(e.target.value))}
                            />
                            <span className='text-gray-700'>{blur}px</span>
                        </div>
                        <div className="control-group">
                            <label className='text-gray-700'>Offset (px):</label>
                            <input
                                type="range"
                                min="0"
                                max="20"
                                value={offset}
                                onChange={(e) => setOffset(Number(e.target.value))}
                            />
                            <span className='text-gray-700'>{offset}px</span>
                        </div>
                    </>
                ) : (
                    <div className="control-group">
                        <label className='text-gray-700'>Stroke Width (px):</label>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={strokeWidth}
                            onChange={(e) => setStrokeWidth(Number(e.target.value))}
                        />
                        <span className='text-gray-700'>{strokeWidth}px</span>
                    </div>
                )}

                <div className="control-group">
                    <label className='text-gray-700'>Preview Text:</label>
                    <input
                        type="text"
                        value={previewText}
                        onChange={(e) => setPreviewText(e.target.value)}
                    />
                </div>
            </div>

            <div className="preview text-gray-700" style={{ ...style.preview }}>
                <p className='text-gray-700' style={{ ...style.previewText, ...{ [type === 'shadow' ? 'textShadow' : 'WebkitTextStroke']: generateCSS() }}}>
                    {previewText}
                </p>
            </div>

            <div className="css-output">
                <h3 className='text-gray-700'>Generated CSS:</h3>
                <code>{generateCSS()}</code>
            </div>
        </div>
    );
};

const style = {
    preview: {
        padding: '2rem',
        margin: '2rem 0',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
    },
    previewText: {
        fontSize: '2rem',
        textAlign: 'center',
    },
};

export default StrokeShadows;