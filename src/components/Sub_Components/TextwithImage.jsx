import React from 'react'

export default function TextWithImage({
    title,
    subtitle,
    image,
    imageAlt,
    paragraphs,
    children,
}) {
    return (
        <div className="container">
            <div>
                <h1 className="mt-10 text-center text-5xl font-bold">
                    {title}
                </h1>
                {subtitle && (
                    <h2 className="py-4 text-center text-3xl font-semibold">
                        {subtitle}
                    </h2>
                )}
                <div className="clearfix">
                    {image && (
                        <img
                            src={image}
                            alt={imageAlt}
                            className="float-right mb-4 ml-4 hidden max-w-xs rounded-lg sm:block"
                            style={{
                                objectFit: 'contain',
                                maxWidth: '300px',
                                maxHeight: '100%',
                            }}
                        />
                    )}
                    <div>
                        {paragraphs.map((paragraph, index) => (
                            <p key={index} className="mb-3 text-lg">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="clear-both">{children}</div>
            </div>
        </div>
    )
}
