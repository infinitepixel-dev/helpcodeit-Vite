import diagram from '@assets/Helpful Diagram.png'
import { Helmet } from 'react-helmet-async'

function MenuApp() {
    return (
        <div className="mb-7">
            <Helmet>
                <title>
                    Menu App OOP Diagram and Explanation | Help Code It
                </title>
                <meta
                    name="description"
                    content="Explore the object-oriented design and implementation of a Menu App. Understand the classes and their interactions with a detailed diagram and explanations."
                />
                <link
                    rel="canonical"
                    href="https://www.helpcodeit.com/javascriptPrincipals/MenuApp"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="Menu App, OOP diagram, object-oriented programming, JavaScript classes, team management system, coding tutorial, web development"
                />
            </Helmet>
            <div className="container">
                <h1 className="my-5 text-center text-6xl">Menu App</h1>
                <p className="text-xl">
                    When working on OOP and learning about how a class-based app
                    works, it is helpful to diagram the decision tree for the
                    app. Here is a basic diagram of the menu app we have seen as
                    an example.
                </p>
                <div className="row">
                    <img
                        src={diagram}
                        alt="Diagram of Menu App"
                        className="mx-auto mb-10 w-2/3 rounded-3xl p-5"
                    />
                </div>
                <div className="row mx-16">
                    <h2 className="mb-4 text-center text-4xl font-bold">
                        Class Structure Overview
                    </h2>
                    <h3 className="mb-2 text-xl font-semibold">
                        High-Level Overview
                    </h3>
                    <p className="mb-4">
                        The application is a team management system that allows
                        users to create and manage teams and players. It
                        consists of three primary classes: Player, Team, and
                        Menu.
                    </p>

                    <table className="mb-16 mt-8 w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800">
                                <th className="border border-gray-300 p-2 dark:border-gray-700">
                                    Class
                                </th>
                                <th className="border border-gray-300 p-2 dark:border-gray-700">
                                    Description
                                </th>
                                <th className="border border-gray-300 p-2 dark:border-gray-700">
                                    Properties
                                </th>
                                <th className="border border-gray-300 p-2 dark:border-gray-700">
                                    Methods
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Player
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Represents a player in a team.
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    <ul>
                                        <li>
                                            <code>name</code>: String
                                            representing the player&apos;s name.
                                        </li>
                                        <li>
                                            <code>position</code>: String
                                            representing the player&apos;s
                                            position.
                                        </li>
                                    </ul>
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    <ul>
                                        <li>
                                            <code>
                                                constructor(name, position)
                                            </code>
                                            : Initializes a new Player object.
                                        </li>
                                        <li>
                                            <code>describe()</code>: Returns a
                                            string describing the player.
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Team
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Represents a team of players.
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    <ul>
                                        <li>
                                            <code>name</code>: String
                                            representing the team&qpos;s name.
                                        </li>
                                        <li>
                                            <code>players</code>: Array to hold
                                            Player objects.
                                        </li>
                                    </ul>
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    <ul>
                                        <li>
                                            <code>constructor(name)</code>:
                                            Initializes a new Team object.
                                        </li>
                                        <li>
                                            <code>addPlayer(player)</code>: Adds
                                            a Player object to the players
                                            array.
                                        </li>
                                        <li>
                                            <code>describe()</code>: Returns a
                                            string describing the team.
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Menu
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Represents the application menu and handles
                                    user interaction.
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    <ul>
                                        <li>
                                            <code>teams</code>: Array to hold
                                            Team objects.
                                        </li>
                                        <li>
                                            <code>selectedTeam</code>: The
                                            currently selected team.
                                        </li>
                                    </ul>
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    <ul>
                                        <li>
                                            <code>constructor()</code>:
                                            Initializes the Menu object.
                                        </li>
                                        <li>
                                            <code>start()</code>: Entry point to
                                            the application, manages the main
                                            loop.
                                        </li>
                                        <li>
                                            <code>showMainMenuOptions()</code>:
                                            Displays the main menu and returns
                                            the user’s selection.
                                        </li>
                                        <li>
                                            <code>
                                                showTeamMenuOptions(teamInfo)
                                            </code>
                                            : Displays the team menu and returns
                                            the user’s selection.
                                        </li>
                                        <li>
                                            <code>displayTeams()</code>:
                                            Displays all teams.
                                        </li>
                                        <li>
                                            <code>createTeam()</code>: Creates a
                                            new team and adds it to the teams
                                            array.
                                        </li>
                                        <li>
                                            <code>viewTeam()</code>: Displays
                                            the details of a specific team.
                                        </li>
                                        <li>
                                            <code>deleteTeam()</code>: Deletes a
                                            specific team from the teams array.
                                        </li>
                                        <li>
                                            <code>createPlayer()</code>: Creates
                                            a new player and adds it to the
                                            selected team.
                                        </li>
                                        <li>
                                            <code>deletePlayer()</code>: Deletes
                                            a specific player from the selected
                                            team.
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="mb-4 text-xl font-semibold">
                        Detailed Functionality
                    </h3>
                    <table className="mx-auto mb-16 mt-8 table-auto border-collapse border border-gray-300 dark:border-gray-700">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800">
                                <th className="border border-gray-300 p-2 dark:border-gray-700">
                                    Class
                                </th>
                                <th className="border border-gray-300 p-2 dark:border-gray-700">
                                    Method
                                </th>
                                <th className="border border-gray-300 p-2 dark:border-gray-700">
                                    Purpose
                                </th>
                                <th className="border border-gray-300 p-2 dark:border-gray-700">
                                    Input/Output
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Player
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Constructor
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Initializes a new Player object with a name
                                    and position.
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Input: <code>name</code> (string),{' '}
                                    <code>position</code> (string). <br />
                                    Output: A new Player object.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Player
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    describe()
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Returns a string describing the player.
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Output: A string in the format &quot;name
                                    plays position&quot;.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Team
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Constructor
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Initializes a new Team object with a name.
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Input: <code>name</code> (string). <br />{' '}
                                    Output: A new Team object with an empty
                                    players array.
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Team
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    addPlayer()
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Adds a Player object to the players array.
                                </td>
                                <td className="border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-600">
                                    Input: <code>player</code> (Player object).{' '}
                                    <br />
                                    Validation: Checks if the input is a Player
                                    object. <br />
                                    Error Handling: Throws an error if input is
                                    invalid.
                                </td>
                            </tr>
                            {/* Repeat similar rows for remaining methods */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MenuApp
