import { useState } from 'react';
import CodeBlock from '@subComponents/CodeBlock';

const GradientGenerator = () => {
    const [gradientColors, setGradientColors] = useState(['#ff0000', '#0000ff']);
    const [angle, setAngle] = useState(90);
    const [gradientType, setGradientType] = useState('linear');

    const gradientStyle = {
        width: '300px',
        height: '150px',
        background: gradientType === 'linear'
            ? `linear-gradient(${angle}deg, ${gradientColors.join(', ')})`
            : `radial-gradient(circle, ${gradientColors.join(', ')})`
    };

    const handleColorChange = (index, color) => {
        const newColors = [...gradientColors];
        newColors[index] = color;
        setGradientColors(newColors);
    };

    const addColor = () => {
        setGradientColors([...gradientColors, '#000000']);
    };

    const removeColor = (index) => {
        if (gradientColors.length <= 2) return; // Maintain minimum 2 colors
        const newColors = gradientColors.filter((_, i) => i !== index);
        setGradientColors(newColors);
    };

    return (
        <div className="gradient-generator">
            <h2>Gradient Generator</h2>
            
            <div className="controls">
                <div className="type-selector">
                    <label className="text-gray-700">
                        <input
                            type="radio"
                            value="linear"
                            checked={gradientType === 'linear'}
                            onChange={(e) => setGradientType(e.target.value)}
                            className='text-gray-700'
                        /> Linear
                    </label>
                    <label className="text-gray-700">
                        <input
                            type="radio"
                            value="radial"
                            className="text-gray-700"
                            checked={gradientType === 'radial'}
                            onChange={(e) => setGradientType(e.target.value)}
                        /> Radial
                    </label>
                </div>

                {gradientType === 'linear' && (
                    <div className="angle-control">
                        <label className="text-gray-700">Angle: {angle}°</label>
                        <input
                            type="range"
                            min="0"
                            max="360"
                            className="text-gray-700"
                            value={angle}
                            onChange={(e) => setAngle(Number(e.target.value))}
                        />
                    </div>
                )}

                <div className="color-inputs">
                    {gradientColors.map((color, index) => (
                        <div key={index} className="color-input text-gray-700">
                            <input
                                className="text-gray-700"
                                type="color"
                                value={color}
                                onChange={(e) => handleColorChange(index, e.target.value)}
                            />
                            {gradientColors.length > 2 && (
                                <button className="remove text-gray-700" onClick={() => removeColor(index)}>Remove</button>
                            )}
                        </div>
                    ))}
                    <button className="add" onClick={addColor}>Add Color</button>
                </div>
            </div>

            <div className="preview" style={gradientStyle}></div>
            
            <div className="css-code">
                <p>CSS Code:</p>
                
                <CodeBlock code={`background: ${gradientStyle.background};`} />
            </div>
        </div>
    );
};

export default GradientGenerator;