import {
    randFlightDetails,
    randUser,
    randBook,
    randPost,
    randCreditCard,
    randProduct,
    randSuperhero,
    randJSON,
    randTodo,
} from '@ngneat/falso'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import CopyButton from './CopyButton'

import AceEditor from 'react-ace'
import '@/Routes/aceEditorStyles'

import { useEffect } from 'react'

function DataGenerator() {
    const editorRef = useRef(null)
    const [category, setCategory] = useState('flights')
    const [howMany, setHowMany] = useState(1)
    const [data, setData] = useState([])

    useEffect(() => {
        const editor = editorRef.current.editor
        editor.getSession()
    }, [data])
    let response = ''

    const handleGeneration = (e) => {
        e.preventDefault()
        console.log('Category:', category)
        switch (category) {
            case 'flights':
                response = randFlightDetails({ length: howMany })
                break
            case 'users':
                response = randUser({ length: howMany })
                break
            case 'books':
                response = randBook({ length: howMany })
                break
            case 'posts':
                response = randPost({ length: howMany })
                break
            case 'todos':
                response = randTodo({ length: howMany })
                break
            case 'creditCards':
                response = randCreditCard({ length: howMany })
                break
            case 'products':
                response = randProduct({ length: howMany })
                break
            case 'superheroes':
                response = randSuperhero({ length: howMany })
                break
            case 'json':
                response = randJSON({ length: howMany })
                break
        }

        setData(response)
        console.log('Category:', category)
        console.log('How Many:', howMany)
        console.log('Data:', data)
    }
    let code = JSON.stringify(data, null, 2)

    return (
        <div className="container mx-auto">
            <div className="text-xl">
                <h1 className="my-5 text-6xl text-center">
                    Random Fake Data Generator
                </h1>
                <ul>
                    <li>
                        - To properly format for use with json-server you will
                        need to copy the data and paste it into a .json file.
                    </li>
                    <li>
                        - The whole thing is inside an object and is the
                        property of the endpoint you created.
                    </li>
                    <li>
                        - Make sure you have added your endpoint to the db.json
                        file.
                    </li>
                    <li>- Then run json-server db.json </li>
                    <li>
                        - Then you can access your data at
                        http://localhost:3000/your-endpoint
                    </li>
                </ul>
                <Link to="/javascriptPrincipals/JSONServer">
                    <button
                        className="px-4 py-2 mt-5 font-bold text-white bg-red-500 rounded-lg hover:bg-red-700"
                        aria-label="Learn More About json-server"
                    >
                        Learn More About json-server
                    </button>
                </Link>
            </div>
            <form className="max-w-md p-6 mt-8 rounded-lg shadow-md ">
                <div className="mb-4">
                    <label
                        className="block mb-2 text-sm font-bold text-white"
                        htmlFor="category"
                    >
                        Category:
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:border-blue-500 focus:outline-none"
                    >
                        <option value="flights">Flights</option>
                        <option value="users">Random Users</option>
                        <option value="todos">Todos</option>
                        <option value="products">Products</option>
                        <option value="creditCards">Credit Card</option>
                        <option value="posts">Posts</option>
                        <option value="superheroes">Superheroes</option>
                        <option value="json">Random JSON</option>
                        <option value="books">Books</option>

                    </select>
                </div>
                <div className="mb-6">
                    <label
                        className="block mb-2 text-sm font-bold text-white"
                        htmlFor="howMany"
                    >
                        How many items for the category?:
                    </label>
                    <input
                        id="howMany"
                        type="number"
                        placeholder="5"
                        value={howMany}
                        onChange={(e) => setHowMany(e.target.value)}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                </div>
                <button
                    onClick={handleGeneration}
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded focus:shadow-outline hover:bg-blue-700 focus:outline-none"
                    type="button"
                    aria-label="generate data button"
                >
                    Generate Data
                </button>
            </form>
            <div
                className="my-5 mb-32 flex justify-center rounded-lg border border-gray-500 p-0.5"
                style={{ position: 'relative', width: '100%', height: '50em' }}
            >
                <AceEditor
                    ref={editorRef}
                    mode="json"
                    theme="one_dark"
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
                    }}
                    style={{ width: '100%', height: '100%' }}
                />
                <CopyButton
                    textToCopy={code}
                    position="absolute top-0 right-4" // Adjusted for top right-hand corner
                />
            </div>
        </div>
    )
}
export default DataGenerator
