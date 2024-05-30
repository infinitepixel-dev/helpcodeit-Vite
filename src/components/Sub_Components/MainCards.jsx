
import initialSetup from '../../assets/Getting Started.svg';
import arrayMethods from '../../assets/Array Methods.svg';
import practiceEnv from '../../assets/Practice Environment Title.svg';
import codeproblems from '../../assets/codeproblemscardtitle.png';
import Card from './Card'
import TW_CSS from '../CSS_Wrappers/CSS_Main_Profile'
import { Link } from 'react-router-dom'

export default function MainCards() {
    const styles = TW_CSS() //Calls the TW_CSS function to get the styles
    // console.log("Styles: ", styles);

    return (
        <div className="mx-16 pb-44 grid h-full items-stretch gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
            {/* SECTION Card #1 */}
            <Link to="/fundamentals/Installs">
                <Card
                    imageSrc={initialSetup}
                    customCSS={{
                        image: 'border-black bg-green-200 dark:bg-green-500',
                        letsGoBtn: 'bg-orange-800',
                    }}
                    title="Initial Setup"
                    description="This page will help you setup your computer to begin programming"
                    actionText="Let's Go"
                    styles={styles}
                />
            </Link>
            {/* !SECTION Card #1 END*/}
            {/* SECTION Card #2 */}
            <Link to="/javascriptPrincipals/ArrayMethods">
                <Card
                    imageSrc={arrayMethods}
                    customCSS={{
                        image: 'border-black bg-blue-700 dark:bg-blue-950',
                        letsGoBtn: 'bg-pink-800',
                    }}
                    title="Need to see the available options?"
                    description="This page contains a table with all the array methods, with explanations and examples."
                    actionText="See the Table"
                    styles={styles}
                />
            </Link>
            {/* !SECTION Card #2 END  */}
            {/* SECTION Card #3 */}
            <Link to="/fundamentals/SettingUpPracticeEnvironment">
                <Card
                    imageSrc={practiceEnv}
                    customCSS={{
                        image: 'border-black bg-yellow-500 dark:bg-yellow-600',
                        letsGoBtn: 'bg-yellow-800',
                    }}
                    title="Want a place to code?"
                    description="This page has a video to walk you through getting a project started to get off the ground coding in Javascript."
                    actionText="See Video"
                    styles={styles}
                />
            </Link>
            {/* !SECTION Card #3 END */}
            {/* SECTION Card #4 BEGIN */}
            <a href="https://codeproblems.michaelvarnell.com" target="_blank" >
                <Card
                    imageSrc={codeproblems}
                    customCSS={{
                        image: 'border-black bg-stone-400 dark:bg-stone-500',
                        letsGoBtn: 'bg-red-900',
                    }}
                    title="Code Problems"
                    description="Free coding problems to help level up your skills, and practice those fundamentals."
                    actionText="Let's Go"
                    styles={styles}
                />
            </a>
            {/* !SECTION Card #4 END */}
        </div>
    )
}
