import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

const UsersManager = () => {
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState({
        email: '',
        name: '',
        role: 'user',
    })
    const [editUser, setEditUser] = useState(null)
    const usersListRef = useRef(null)

    const APIUrl = 'http://66.128.253.47:3030/users-data'

    const getUsers = async () => {
        try {
            const response = await fetch(APIUrl)

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const users = await response.json()
            setUsers(users)

            // GSAP animation for users list
            gsap.fromTo(
                usersListRef.current.children,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }
            )
        } catch (error) {
            console.error('There was an error!', error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    // Add a new user
    const handleAddUser = () => {
        //POST with fetch
        fetch(APIUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        }).then(() => {
            setUsers([...users, newUser])
            setNewUser({ email: '', name: '', role: 'user' })
        })
    }

    // Update an existing user
    const handleEditUser = (id) => {
        //Fetch with PUT
        fetch(`${APIUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editUser),
        }).then(() => {
            setUsers(
                users.map((user) =>
                    user.id === id ? { ...user, ...editUser } : user
                )
            )
            setEditUser(null)
        })
    }

    // Delete a user
    const handleDeleteUser = (id) => {
        //Fetch with DELETE
        fetch(`${APIUrl}/${id}`, {
            method: 'DELETE',
        }).then(() => {
            setUsers(users.filter((user) => user.id !== id))
        })
    }

    return (
        <div className="bg-gray-50 p-5 text-black">
            <h2 className="mb-6 text-center text-2xl font-bold">
                User Management
            </h2>

            <nav aria-label="Page navigation" className="mb-8">
                <ul className="flex justify-center space-x-6">
                    <li>
                        <Link
                            to="/add-product"
                            className="text-lg font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
                        >
                            Add Product
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/merch"
                            className="text-lg font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
                        >
                            Merch Page
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cart"
                            className="text-lg font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
                        >
                            Cart Page
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/checkout"
                            className="text-lg font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
                        >
                            Checkout Page
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/users-manager"
                            className="text-lg font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
                        >
                            Users Manager
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold">Add New User</h3>
                <div className="mb-4 grid gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) =>
                            setNewUser({ ...newUser, email: e.target.value })
                        }
                        className="rounded border p-2 transition duration-150 focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Name"
                        value={newUser.name}
                        onChange={(e) =>
                            setNewUser({ ...newUser, name: e.target.value })
                        }
                        className="rounded border p-2 transition duration-150 focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        value={newUser.role}
                        onChange={(e) =>
                            setNewUser({ ...newUser, role: e.target.value })
                        }
                        className="rounded border p-2 transition duration-150 focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="restricted">Restricted</option>
                    </select>
                    <button
                        onClick={handleAddUser}
                        className="rounded bg-blue-500 px-4 py-2 text-white transition duration-200 hover:bg-blue-600"
                    >
                        Add User
                    </button>
                </div>
            </div>

            <div className="mt-8 rounded-lg bg-white p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold">All Users</h3>
                <ul ref={usersListRef} className="space-y-4">
                    {users.map((user) => (
                        <li
                            key={user.id}
                            className="flex items-center justify-between rounded bg-gray-100 p-4 shadow-md"
                        >
                            <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-gray-600">{user.email}</p>
                                <p className="text-gray-500">{user.role}</p>
                            </div>
                            <div className="space-x-3">
                                <button
                                    onClick={() => setEditUser(user)}
                                    className="rounded bg-green-500 px-3 py-1 text-white transition duration-200 hover:bg-green-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteUser(user.id)}
                                    className="rounded bg-red-500 px-3 py-1 text-white transition duration-200 hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {editUser && (
                <div className="mt-8 rounded-lg bg-white p-6 shadow-lg">
                    <h3 className="mb-4 text-xl font-semibold">Edit User</h3>
                    <div className="grid gap-4">
                        <input
                            type="email"
                            value={editUser.email}
                            onChange={(e) =>
                                setEditUser({
                                    ...editUser,
                                    email: e.target.value,
                                })
                            }
                            className="rounded border p-2 transition duration-150 focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            value={editUser.name}
                            onChange={(e) =>
                                setEditUser({
                                    ...editUser,
                                    name: e.target.value,
                                })
                            }
                            className="rounded border p-2 transition duration-150 focus:ring-2 focus:ring-blue-500"
                        />
                        <select
                            value={editUser.role}
                            onChange={(e) =>
                                setEditUser({
                                    ...editUser,
                                    role: e.target.value,
                                })
                            }
                            className="rounded border p-2 transition duration-150 focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="restricted">Restricted</option>
                        </select>
                        <button
                            onClick={() => handleEditUser(editUser.id)}
                            className="rounded bg-green-500 px-4 py-2 text-white transition duration-200 hover:bg-green-600"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UsersManager
