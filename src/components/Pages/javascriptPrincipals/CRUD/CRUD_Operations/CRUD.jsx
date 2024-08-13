import propTypes from 'prop-types'

import CodeBlock from '@/components/Sub_Components/CodeBlock'

export default function CRUD({ Object }) {
    return (
        <div className="text-lg">
            <p>
                Each list item below represents a line of code to explain what
                it is doing.
            </p>
            <div className="border-1 my-5 rounded-lg border border-black  p-3 dark:border-white">
                <ul className="list-inside">
                    {Object.content.map((item, index) => {
                        return (
                            <li key={index} className="my-2 list-disc">
                                {item.description}
                            </li>
                        )
                    })}
                </ul>
                <CodeBlock code={Object.code} language="javascript" />
            </div>
        </div>
    )
}

CRUD.propTypes = {
    Object: propTypes.object,
    hljs: propTypes.object,
}
