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
            <div>
                <div className="container">
                    <h1 className="my-5 text-center text-6xl">Menu App</h1>
                    <div className="row mx-9 mb-7 text-balance text-center"></div>
                    <p className="text-xl">
                        When working on OOP and learning about how a class-based
                        app works, it is helpful to diagram the decision tree
                        for the app. This can be done in any basic diagram
                        software, or even as a rough sketch on paper.
                    </p>
                    <p className="text-xl">
                        Here is a basic diagram of the menu app we have seen as
                        an example of what one of these would look like.
                    </p>
                </div>
            </div>
            <div className="row">
                <img
                    src={diagram}
                    alt="Diagram of Menu App"
                    className="mb-10 h-full w-full rounded-3xl p-5"
                />
            </div>
            <div className="row mx-16">
                <div>
                    <h1 className="mb-4 text-center text-4xl font-bold">
                        Top-Down Design Outline for the App
                    </h1>
                    <hr className="border-1 my-8 border-black dark:border-white" />
                    <section className="mb-6">
                        <h2 className="mb-2 text-xl font-semibold">
                            High-Level Overview
                        </h2>
                        <p>
                            The application is a team management system that
                            allows users to create and manage teams and players.
                            It consists of three primary classes:{' '}
                            <code className="custom-code-menuapp">Player</code>,{' '}
                            <code className="custom-code-menuapp">Team</code>,
                            and{' '}
                            <code className="custom-code-menuapp">Menu</code>.
                        </p>
                    </section>
                </div>
                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold">
                        1. <code className="custom-code-menuapp">Player</code>{' '}
                        Class
                    </h2>
                    <p>Represents a player in a team.</p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>Properties</strong>:
                            <ul className="ml-4 list-inside list-disc">
                                <li>
                                    <code className="custom-code-menuapp">
                                        name
                                    </code>
                                    : String representing the player&apos;s
                                    name.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        position
                                    </code>
                                    : String representing the player&apos;s
                                    position.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Methods</strong>:
                            <ul className="ml-4 list-inside list-disc">
                                <li>
                                    <code className="custom-code-menuapp">
                                        constructor(name, position)
                                    </code>
                                    : Initializes a new Player object.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        describe()
                                    </code>
                                    : Returns a string describing the player.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold">
                        2. <code className="custom-code-menuapp">Team</code>{' '}
                        Class
                    </h2>
                    <p>Represents a team of players.</p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>Properties</strong>:
                            <ul className="ml-4 list-inside list-disc">
                                <li>
                                    <code className="custom-code-menuapp">
                                        name
                                    </code>
                                    : String representing the team&apos;s name.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        players
                                    </code>
                                    : Array to hold Player objects.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Methods</strong>:
                            <ul className="ml-4 list-inside list-disc">
                                <li>
                                    <code className="custom-code-menuapp">
                                        constructor(name)
                                    </code>
                                    : Initializes a new Team object.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        addPlayer(player)
                                    </code>
                                    : Adds a Player object to the players array.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        describe()
                                    </code>
                                    : Returns a string describing the team.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold">
                        3. <code className="custom-code-menuapp">Menu</code>{' '}
                        Class
                    </h2>
                    <p>
                        Represents the application menu and handles user
                        interaction.
                    </p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>Properties</strong>:
                            <ul className="ml-4 list-inside list-disc">
                                <li>
                                    <code className="custom-code-menuapp">
                                        teams
                                    </code>
                                    : Array to hold Team objects.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        selectedTeam
                                    </code>
                                    : The currently selected team.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Methods</strong>:
                            <ul className="ml-4 list-inside list-disc">
                                <li>
                                    <code className="custom-code-menuapp">
                                        constructor()
                                    </code>
                                    : Initializes the Menu object.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        start()
                                    </code>
                                    : Entry point to the application, manages
                                    the main loop.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        showMainMenuOptions()
                                    </code>
                                    : Displays the main menu and returns the
                                    user&apos;s selection.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        showTeamMenuOptions(teamInfo)
                                    </code>
                                    : Displays the team menu and returns the
                                    user&apos;s selection.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        displayTeams()
                                    </code>
                                    : Displays all teams.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        createTeam()
                                    </code>
                                    : Creates a new team and adds it to the
                                    teams array.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        viewTeam()
                                    </code>
                                    : Displays the details of a specific team.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        deleteTeam()
                                    </code>
                                    : Deletes a specific team from the teams
                                    array.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        createPlayer()
                                    </code>
                                    : Creates a new player and adds it to the
                                    selected team.
                                </li>
                                <li>
                                    <code className="custom-code-menuapp">
                                        deletePlayer()
                                    </code>
                                    : Deletes a specific player from the
                                    selected team.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="mb-2 text-xl font-semibold">
                        Detailed Functionality
                    </h2>

                    <div className="mb-4">
                        <h3 className="mb-1 text-lg font-semibold">
                            1.{' '}
                            <code className="custom-code-menuapp">Player</code>{' '}
                            Class
                        </h3>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                Constructor
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Initializes a new
                                Player object with a name and position.
                            </p>
                            <p>
                                <strong>Input</strong>:{' '}
                                <code className="custom-code-menuapp">
                                    name
                                </code>{' '}
                                (string),{' '}
                                <code className="custom-code-menuapp">
                                    position
                                </code>{' '}
                                (string).
                            </p>
                            <p>
                                <strong>Output</strong>: A new Player object.
                            </p>
                        </div>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                Describe Method
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Returns a string
                                describing the player.
                            </p>
                            <p>
                                <strong>Output</strong>: A string in the format
                                &ldquo;name plays position&ldquo;.
                            </p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="mb-1 text-lg font-semibold">
                            2. <code className="custom-code-menuapp">Team</code>{' '}
                            Class
                        </h3>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                Constructor
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Initializes a new Team
                                object with a name.
                            </p>
                            <p>
                                <strong>Input</strong>:{' '}
                                <code className="custom-code-menuapp">
                                    name
                                </code>{' '}
                                (string).
                            </p>
                            <p>
                                <strong>Output</strong>: A new Team object with
                                an empty players array.
                            </p>
                        </div>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                AddPlayer Method
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Adds a Player object
                                to the players array.
                            </p>
                            <p>
                                <strong>Input</strong>:{' '}
                                <code className="custom-code-menuapp">
                                    player
                                </code>{' '}
                                (Player object).
                            </p>
                            <p>
                                <strong>Validation</strong>: Checks if the input
                                is an instance of Player.
                            </p>
                            <p>
                                <strong>Error Handling</strong>: Throws an error
                                if the input is not a Player object.
                            </p>
                        </div>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                Describe Method
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Returns a string
                                describing the team.
                            </p>
                            <p>
                                <strong>Output</strong>: A string in the format
                                &ldquo;name has x players&ldquo;.
                            </p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="mb-1 text-lg font-semibold">
                            3. <code className="custom-code-menuapp">Menu</code>{' '}
                            Class
                        </h3>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                Constructor
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Initializes the Menu
                                object.
                            </p>
                            <p>
                                <strong>Output</strong>: A new Menu object with
                                an empty teams array and a null selectedTeam.
                            </p>
                        </div>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                Start Method
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Entry point to the
                                application, manages the main loop.
                            </p>
                            <p>
                                Functionality: Displays the main menu. Executes
                                different actions based on user selection. Loops
                                until the user selects the exit option.{' '}
                            </p>
                        </div>
                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                ShowMainMenuOptions Method
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Displays the main menu
                                and returns the user&apos;s selection.
                            </p>
                            <p>
                                <strong>Output</strong>: User&apos;s menu
                                selection (string).
                            </p>
                        </div>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                ShowTeamMenuOptions Method
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Displays the team menu
                                and returns the user&apos;s selection.
                            </p>
                            <p>
                                <strong>Input</strong>:{' '}
                                <code className="custom-code-menuapp">
                                    teamInfo
                                </code>{' '}
                                (string).
                            </p>
                            <p>
                                <strong>Output</strong>: User&apos;s menu
                                selection (string).
                            </p>
                        </div>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                DisplayTeams Method
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Displays all teams.
                            </p>
                            <p>
                                <strong>Output</strong>: An alert displaying all
                                teams.
                            </p>
                        </div>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                CreateTeam Method
                            </h4>
                            <p>
                                <strong>Purpose:</strong> Creates a new team and
                                adds it to the teams array.
                            </p>
                            <p>
                                <strong>Functionality:</strong>
                                <ul className="ml-4 list-inside list-disc">
                                    <li>Prompts the user for a team name.</li>
                                    <li>
                                        Creates a new Team object with the
                                        provided name.
                                    </li>
                                    <li>
                                        Adds the new Team object to the teams
                                        array.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                ViewTeam Method
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Displays the details
                                of a specific team.
                            </p>
                            <p>
                                <strong>Functionality</strong>:
                                <ul className="ml-4 list-inside list-disc">
                                    <li>
                                        Prompts the user for the team index.
                                    </li>
                                    <li>Validates the index.</li>
                                    <li>
                                        Sets the selectedTeam to the team at the
                                        provided index.
                                    </li>
                                    <li>Displays the team details.</li>
                                    <li>Shows the team menu options.</li>
                                    <li>
                                        Handles user selection for adding or
                                        deleting a player.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                DeleteTeam Method
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Deletes a specific
                                team from the teams array.
                            </p>
                            <p>
                                <strong>Functionality</strong>:
                                <ul className="ml-4 list-inside list-disc">
                                    <li>
                                        Prompts the user for the team index.
                                    </li>
                                    <li>Validates the index.</li>
                                    <li>
                                        Removes the team at the provided index
                                        from the teams array.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                CreatePlayer Method
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Creates a new player
                                and adds it to the selected team.
                            </p>
                            <p>
                                <strong>Functionality</strong>:
                                <ul className="ml-4 list-inside list-disc">
                                    <li>
                                        Prompts the user for the player name and
                                        position.
                                    </li>
                                    <li>
                                        Creates a new Player object with the
                                        provided name and position.
                                    </li>
                                    <li>
                                        Adds the new Player object to the
                                        selected team.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <div className="mb-3">
                            <h4 className="text-base font-semibold">
                                DeletePlayer Method
                            </h4>
                            <p>
                                <strong>Purpose</strong>: Deletes a specific
                                player from the selected team.
                            </p>
                            <p>
                                <strong>Functionality</strong>:
                                <ul className="mb-28 ml-4 list-inside list-disc">
                                    <li>
                                        Prompts the user for the player index.
                                    </li>
                                    <li>Validates the index.</li>
                                    <li>
                                        Removes the player at the provided index
                                        from the selected team&apos;s players
                                        array.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MenuApp
