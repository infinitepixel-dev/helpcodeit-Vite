import propTypes from 'prop-types'

import CodeBlock from '@/components/Sub_Components/CodeBlock'

function MethodComponent({ item }) {
    const { title, description, example, graphical } = item
    return (
        <div className="my-5 rounded-lg border border-black p-5 dark:border-white">
            <h4 className="mb-5 mt-10 text-center text-4xl" id={title}>
                {title}
            </h4>
            <hr className="border-1 mx-auto mb-5 w-11/12 border-black text-center dark:border-white" />
            <p className="text-center">
                {description} Here&apos;s some examples:
            </p>
            <div className="flex flex-wrap justify-center">
                <div className="flex items-center justify-center">
                    <CodeBlock code={example} language="javascript" />
                </div>
            </div>
            {graphical && (
                <div className="my-auto text-center">
                    <p>
                        Below is a graphical representation of the {title}{' '}
                        method.
                    </p>
                    <div className="p-4 text-center text-3xl">{graphical}</div>
                </div>
            )}
        </div>
    )
}

MethodComponent.propTypes = {
    item: propTypes.object.isRequired,
}

export default MethodComponent
