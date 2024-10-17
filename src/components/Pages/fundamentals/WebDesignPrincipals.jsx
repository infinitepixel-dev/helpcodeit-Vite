import React from 'react'
import {
    CheckCircle,
    LayoutGrid,
    Smartphone,
    Eye,
    ArrowLeftCircle,
    Target,
    Minimize2,
    Star,
    Layout,
    Move,
    ChevronDown,
} from 'lucide-react'

const WebDesignPrinciples = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="mb-8 text-balance text-center text-5xl font-bold">
                Web Design Principles & Foundational UX/UI Laws
            </h1>
            <div className="space-y-8">
                {/* Simplicity is Key */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 text-gray-600 shadow-lg">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold">
                            1. Simplicity is Key
                        </h2>
                        <p className="mb-2">
                            <strong>Keep it Clean:</strong> Simplicity helps
                            users focus on what's important. Avoid overwhelming
                            designs—stick to a few fonts, a harmonious color
                            scheme, and minimal distractions.
                        </p>
                        <p>
                            <strong>Visual Hierarchy:</strong> Guide the
                            viewer's eyes by organizing information visually.
                            Size, color, and position all play a role in
                            directing attention.
                        </p>
                        <p className="mt-2">
                            <strong>Example:</strong> A landing page with a
                            single headline, a brief description, and a clear
                            call-to-action button is more effective than a
                            cluttered page filled with multiple options and text
                            blocks.
                        </p>
                        <p className="mt-2">
                            <strong>Additional Tips:</strong>
                            <ul className="ml-6 list-disc">
                                <li>
                                    Use whitespace effectively to create a clean
                                    and organized layout.
                                </li>
                                <li>
                                    Limit the number of colors and fonts to
                                    create a more cohesive look.
                                </li>
                                <li>
                                    Focus on what the user should do next—guide
                                    them with clear visual cues.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                {/* Consistency */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 text-gray-600 shadow-lg">
                    <LayoutGrid className="h-8 w-8 text-blue-500" />
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold">
                            2. Consistency
                        </h2>
                        <p className="mb-2">
                            <strong>Uniformity in Elements:</strong> Buttons,
                            headers, and fonts should be consistent throughout
                            your site. This helps users intuitively understand
                            where they can find information and what actions
                            they can take.
                        </p>
                        <p>
                            <strong>Familiar Patterns:</strong> Leveraging
                            familiar patterns, like common navigation layouts or
                            standard button placements, can increase usability
                            since users know what to expect.
                        </p>
                        <p className="mt-2">
                            <strong>Example:</strong> If your primary action
                            button is blue and rounded, ensure all action
                            buttons follow the same style across the site to
                            avoid confusion.
                        </p>
                        <p className="mt-2">
                            <strong>Additional Tips:</strong>
                            <ul className="ml-6 list-disc">
                                <li>
                                    Use consistent terminology across the
                                    application to prevent user confusion.
                                </li>
                                <li>
                                    Apply the same navigation structure
                                    throughout your website to maintain
                                    familiarity.
                                </li>
                                <li>
                                    Establish a style guide for components and
                                    elements to streamline the design process.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                {/* Responsiveness */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 text-gray-600 shadow-lg">
                    <Smartphone className="h-8 w-8 text-purple-500" />
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold">
                            3. Responsiveness
                        </h2>
                        <p className="mb-2">
                            <strong>Device Adaptability:</strong> Designs must
                            adapt smoothly to different screen sizes, from
                            desktop to mobile. Using flexible grids and images
                            ensures your site looks good across devices.
                        </p>
                        <p>
                            <strong>Touch-friendly Interactions:</strong> If
                            you're designing for mobile, ensure elements are
                            easily clickable with appropriate padding and
                            spacing.
                        </p>
                        <p className="mt-2">
                            <strong>Example:</strong> A navigation menu that
                            collapses into a hamburger icon on mobile devices
                            makes it easier for users to navigate without
                            overwhelming the screen.
                        </p>
                        <p className="mt-2">
                            <strong>Additional Tips:</strong>
                            <ul className="ml-6 list-disc">
                                <li>
                                    Use media queries to adjust styles for
                                    different screen sizes.
                                </li>
                                <li>
                                    Test your design on various devices and
                                    screen sizes to ensure a consistent
                                    experience.
                                </li>
                                <li>
                                    Prioritize touch-friendly design, especially
                                    for buttons and interactive elements on
                                    mobile.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                {/* Accessibility */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 text-gray-600 shadow-lg">
                    <Eye className="h-8 w-8 text-yellow-500" />
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold">
                            4. Accessibility
                        </h2>
                        <p className="mb-2">
                            <strong>Alt Text & Contrast:</strong> Make your
                            content accessible to everyone. Use alternative text
                            for images, provide sufficient color contrast, and
                            ensure the site can be navigated with a keyboard.
                        </p>
                        <p>
                            <strong>Readable Fonts:</strong> Use legible font
                            sizes and simple typefaces. Users with visual
                            impairments should still be able to comfortably read
                            your content.
                        </p>
                        <p className="mt-2">
                            <strong>Example:</strong> Adding alt text to images
                            allows visually impaired users who use screen
                            readers to understand the content of the images.
                        </p>
                        <p className="mt-2">
                            <strong>Additional Tips:</strong>
                            <ul className="ml-6 list-disc">
                                <li>
                                    Provide captions for videos and transcripts
                                    for audio content.
                                </li>
                                <li>
                                    Ensure that interactive elements can be
                                    accessed and operated via the keyboard.
                                </li>
                                <li>
                                    Use ARIA roles and labels to provide
                                    additional context for assistive
                                    technologies.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                {/* User Control and Freedom */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 text-gray-600 shadow-lg">
                    <ArrowLeftCircle className="h-8 w-8 text-red-500" />
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold">
                            5. User Control and Freedom
                        </h2>
                        <p className="mb-2">
                            <strong>Undo and Back:</strong> Users should feel in
                            control. Include easily accessible 'back' options or
                            undo buttons, and avoid creating situations where
                            users feel stuck or confused.
                        </p>
                        <p>
                            <strong>Feedback:</strong> Whenever a user interacts
                            with something, provide feedback that indicates
                            what's happening (e.g., a "Thank You" message).
                        </p>
                        <p className="mt-2">
                            <strong>Example:</strong> After submitting a form,
                            display a confirmation message or an option to undo
                            the submission if necessary.
                        </p>
                        <p className="mt-2">
                            <strong>Additional Tips:</strong>
                            <ul className="ml-6 list-disc">
                                <li>
                                    Include clear navigation paths to help users
                                    easily backtrack if needed.
                                </li>
                                <li>
                                    Provide confirmation dialogs for critical
                                    actions, such as deleting data.
                                </li>
                                <li>
                                    Allow users to cancel actions mid-way to
                                    maintain a sense of control.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                {/* Fitts's Law */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 text-gray-600 shadow-lg">
                    <Target className="h-8 w-8 text-orange-500" />
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold">
                            6. Fitts's Law
                        </h2>
                        <p>
                            <strong>Button Placement:</strong> The time it takes
                            to move to a target depends on the target's size and
                            distance. Make frequently used buttons prominent and
                            easy to click, especially on smaller screens.
                        </p>
                        <p className="mt-2">
                            <strong>Example:</strong> Place the "Submit" button
                            close to the form fields, and make it large enough
                            so users can easily click it without much effort.
                        </p>
                        <p className="mt-2">
                            <strong>Additional Tips:</strong>
                            <ul className="ml-6 list-disc">
                                <li>
                                    Ensure that primary actions are larger and
                                    closer to where users' hands naturally rest,
                                    especially on mobile devices.
                                </li>
                                <li>
                                    Minimize the distance between related
                                    actions to make interaction faster.
                                </li>
                                <li>
                                    Make clickable areas (e.g., buttons) larger
                                    to improve usability on touch screens.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                {/* Hick's Law */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 text-gray-600 shadow-lg">
                    <Minimize2 className="h-8 w-8 text-teal-500" />
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold">
                            7. Hick's Law
                        </h2>
                        <p>
                            <strong>Reduce Choices:</strong> The more choices
                            users have, the longer they take to make a decision.
                            Simplify your options by grouping similar actions or
                            providing fewer primary choices.
                        </p>
                        <p className="mt-2">
                            <strong>Example:</strong> Instead of displaying all
                            filter options at once, use collapsible sections to
                            group similar filters and make the selection process
                            easier.
                        </p>
                        <p className="mt-2">
                            <strong>Additional Tips:</strong>
                            <ul className="ml-6 list-disc">
                                <li>
                                    Limit the number of navigation options to
                                    keep users focused.
                                </li>
                                <li>
                                    Use progressive disclosure to reveal more
                                    options only when needed.
                                </li>
                                <li>
                                    Organize related actions together to help
                                    users find what they need faster.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                {/* Aesthetic-Usability Effect */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 text-gray-600 shadow-lg">
                    <Star className="h-8 w-8 text-pink-500" />
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold">
                            8. Aesthetic-Usability Effect
                        </h2>
                        <p>
                            <strong>Looks Matter:</strong> Users tend to
                            perceive visually appealing designs as more usable.
                            Striking a balance between aesthetics and
                            functionality can help build trust and satisfaction.
                        </p>
                        <p className="mt-2">
                            <strong>Example:</strong> A well-designed homepage
                            with visually appealing images, balanced colors, and
                            clean typography can make users feel more
                            comfortable navigating the website.
                        </p>
                        <p className="mt-2">
                            <strong>Additional Tips:</strong>
                            <ul className="ml-6 list-disc">
                                <li>
                                    Use a visually consistent color palette to
                                    create a cohesive experience.
                                </li>
                                <li>
                                    Pay attention to small details like icons,
                                    animations, and transitions to make the
                                    design feel polished.
                                </li>
                                <li>
                                    Ensure that visual elements contribute to
                                    the overall functionality and don't just add
                                    clutter.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                {/* The Law of Proximity */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 text-gray-600 shadow-lg">
                    <Layout className="h-8 w-8 text-indigo-500" />
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold">
                            9. The Law of Proximity
                        </h2>
                        <p>
                            <strong>Group Related Elements:</strong> Users will
                            naturally assume elements placed close to each other
                            are related. Group similar items—like form fields—to
                            create logical relationships.
                        </p>
                        <p className="mt-2">
                            <strong>Example:</strong> In a registration form,
                            place the first name and last name fields next to
                            each other to indicate they are related.
                        </p>
                        <p className="mt-2">
                            <strong>Additional Tips:</strong>
                            <ul className="ml-6 list-disc">
                                <li>
                                    Use spacing effectively to separate
                                    unrelated items and group related ones.
                                </li>
                                <li>
                                    Place labels close to their corresponding
                                    input fields for clarity.
                                </li>
                                <li>
                                    Group navigation links logically to help
                                    users find related content easily.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                {/* The Rule of Thirds */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 text-gray-600 shadow-lg">
                    <Move className="h-8 w-8 text-lime-500" />
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold">
                            10. The Rule of Thirds
                        </h2>
                        <p>
                            <strong>Balanced Layout:</strong> Borrowed from
                            photography, the Rule of Thirds can help create
                            balanced layouts. Divide your canvas into thirds and
                            place elements at the intersections to draw natural
                            focus.
                        </p>
                        <p className="mt-2">
                            <strong>Example:</strong> Place a call-to-action
                            button at one of the intersection points of the grid
                            to naturally draw user attention.
                        </p>
                        <p className="mt-2">
                            <strong>Additional Tips:</strong>
                            <ul className="ml-6 list-disc">
                                <li>
                                    Use grid overlays to help visualize the Rule
                                    of Thirds during design.
                                </li>
                                <li>
                                    Place key elements like headlines, images,
                                    or buttons at intersections for optimal
                                    impact.
                                </li>
                                <li>
                                    Avoid cluttering all intersections—focus on
                                    one or two key points to create emphasis.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                {/* Visual Feedback */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 text-gray-600 shadow-lg">
                    <ChevronDown className="h-8 w-8 text-cyan-500" />
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold">
                            11. Visual Feedback
                        </h2>
                        <p>
                            <strong>Indicate Interaction:</strong> Buttons
                            should change color on hover, links should
                            underline, and form fields should provide clear
                            error indications. These cues inform users that the
                            system has registered their actions.
                        </p>
                        <p className="mt-2">
                            <strong>Example:</strong> When users hover over a
                            button, changing its color slightly indicates that
                            it is clickable.
                        </p>
                        <p className="mt-2">
                            <strong>Additional Tips:</strong>
                            <ul className="ml-6 list-disc">
                                <li>
                                    Provide loading indicators when users are
                                    waiting for an action to complete.
                                </li>
                                <li>
                                    Use animations sparingly to indicate changes
                                    without overwhelming the user.
                                </li>
                                <li>
                                    Make sure error messages are visible and
                                    explain what went wrong and how to fix it.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                {/* Minimal Cognitive Load */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 text-gray-600 shadow-lg">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                    <div>
                        <h2 className="mb-2 text-2xl font-semibold">
                            12. Minimal Cognitive Load
                        </h2>
                        <p>
                            <strong>Avoid Overwhelming Users:</strong> Simplify
                            the amount of information presented at once. The
                            goal is to make navigating your design effortless,
                            reducing the mental effort users need to spend.
                        </p>
                        <p className="mt-2">
                            <strong>Example:</strong> Break long forms into
                            multiple steps to avoid overwhelming users with too
                            much information at once.
                        </p>
                        <p className="mt-2">
                            <strong>Additional Tips:</strong>
                            <ul className="ml-6 list-disc">
                                <li>
                                    Use icons and images to convey information
                                    quickly without relying solely on text.
                                </li>
                                <li>
                                    Present information in small, digestible
                                    chunks to prevent cognitive overload.
                                </li>
                                <li>
                                    Minimize the number of actions needed to
                                    achieve a goal—keep things simple and
                                    direct.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                <a
                    href="https://www.webdesign-inspiration.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="my-3 space-x-4 rounded-lg bg-blue-600 hover:blue-400 text-white p-6 text-center shadow-lg">
                        <h2 className="mb-2 text-2xl font-semibold">
                            Need a bit of inspiration?
                        </h2>
                        <p className="mt-2">
                            Click Check out these Websites for some!{' '}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default WebDesignPrinciples
