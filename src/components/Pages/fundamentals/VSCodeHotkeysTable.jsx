import React from 'react'

function VSCodeHotkeysTable() {
    const hotkeys = [
        {
            action: 'Add cursor above/below',
            mac: 'Option + Cmd + Up/Down',
            pc: 'Alt + Ctrl + Up/Down',
            description:
                'Adds a new cursor above or below the current cursor position.',
        },
        {
            action: 'Add cursor at next match',
            mac: 'Cmd + D',
            pc: 'Ctrl + D',
            description:
                'Adds a cursor at the next occurrence of the current word (or selection).',
        },
        {
            action: 'Add cursor at all matches',
            mac: 'Cmd + Shift + L',
            pc: 'Ctrl + Shift + L',
            description:
                'Adds a cursor at every occurrence of the current word (or selection).',
        },
        {
            action: 'Insert cursor at end of lines',
            mac: 'Option + Shift + I',
            pc: 'Alt + Shift + I',
            description: 'Insert cursor at the end of each selected line.',
        },
        {
            action: 'Expand/shrink selection',
            mac: 'Shift + Option + Left/Right',
            pc: 'Shift + Alt + Left/Right',
            description:
                'Expands or shrinks the current selection by one word.',
        },
        {
            action: 'Select to line start',
            mac: 'Shift + Cmd + Left',
            pc: 'Shift + Home',
            description:
                'Extends the current selection to the beginning of the line.',
        },
        {
            action: 'Select to line end',
            mac: 'Shift + Cmd + Right',
            pc: 'Shift + End',
            description:
                'Extends the current selection to the end of the line.',
        },
        {
            action: 'Select all occurrences',
            mac: 'Cmd + Shift + L',
            pc: 'Ctrl + Shift + L',
            description: 'Selects all occurrences of the current word.',
        },
        {
            action: 'Select to bracket',
            mac: 'Cmd + Shift + \\',
            pc: 'Ctrl + Shift + \\',
            description: 'Select all content between matching brackets.',
        },
        {
            action: 'Scroll line up/down',
            mac: 'Cmd + Up/Down Arrow',
            pc: 'Ctrl + Up/Down Arrow',
            description:
                'Scrolls the editor up or down without moving the cursor.',
        },
        {
            action: 'Go to beginning of file',
            mac: 'Cmd + Up Arrow',
            pc: 'Ctrl + Home',
            description: 'Jumps the cursor to the very beginning of the file.',
        },
        {
            action: 'Go to end of file',
            mac: 'Cmd + Down Arrow',
            pc: 'Ctrl + End',
            description: 'Jumps the cursor to the very end of the file.',
        },
        {
            action: 'Go to next/previous error/warning',
            mac: 'F8/Shift + F8',
            pc: 'F8/Shift + F8',
            description:
                'Move to the next or previous error or warning in the file.',
        },
        {
            action: 'Go to matching bracket',
            mac: 'Cmd + Shift + \\',
            pc: 'Ctrl + Shift + \\',
            description:
                'Move the cursor to the bracket matching the one it is currently on.',
        },
        {
            action: 'Move line up/down',
            mac: 'Option + Up/Down',
            pc: 'Alt + Up/Down',
            description: 'Moves the current line or selected lines up or down.',
        },
        {
            action: 'Copy line up/down',
            mac: 'Shift + Option + Up/Down',
            pc: 'Shift + Alt + Up/Down',
            description:
                'Copies the current line or selected lines and pastes the copy above or below.',
        },
        {
            action: 'Toggle word wrap',
            mac: 'Option + Z',
            pc: 'Alt + Z',
            description: 'Toggles word wrap on and off in the current editor.',
        },
        {
            action: 'Format document',
            mac: 'Shift + Option + F',
            pc: 'Shift + Alt + F',
            description:
                'Formats the entire document according to your settings.',
        },
        {
            action: 'Format selection',
            mac: 'Cmd + K Cmd + F',
            pc: 'Ctrl + K Ctrl + F',
            description:
                'Formats the selected text according to your settings.',
        },
        {
            action: 'Open keyboard shortcuts',
            mac: 'Cmd + K Cmd + S',
            pc: 'Ctrl + K Ctrl + S',
            description:
                'Opens a panel to view and customize keyboard shortcuts.',
        },
    ]

    return (
        <div className="container">
            <h1 className="mb-5  mt-10 text-center text-4xl ">
                Useful VSCode Hotkeys
            </h1>
            <div className="container mb-44 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200  border border-x-black dark:border-white">
                    <thead className="bg-gray-300 dark:bg-gray-700">
                        <tr>
                            <th
                                scope="col"
                                className="font-bolder px-6 py-3 text-center text-xl uppercase tracking-wider "
                            >
                                Action
                            </th>
                            <th
                                scope="col"
                                className="font-bolder px-6 py-3 text-center text-xl uppercase tracking-wider "
                            >
                                Mac
                            </th>
                            <th
                                scope="col"
                                className="font-bolder px-6 py-3 text-center text-xl uppercase tracking-wider "
                            >
                                PC
                            </th>
                            <th
                                scope="col"
                                className="font-bolder px-6 py-3 text-center text-xl uppercase tracking-wider "
                            >
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 ">
                        {hotkeys.map((hotkey, index) => (
                            <tr
                                key={index}
                                className="odd:bg-gray-300 even:bg-gray-200 odd:dark:bg-slate-700 even:dark:bg-slate-800"
                            >
                                <td className="whitespace-nowrap px-6 py-4 font-extrabold">
                                    {hotkey.action}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <kbd className="rounded-md bg-slate-400 px-2 py-1 text-xs font-semibold dark:bg-gray-800 ">
                                        {hotkey.mac}
                                    </kbd>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <kbd className="rounded-md bg-slate-400 px-2 py-1 text-xs font-semibold dark:bg-gray-800 ">
                                        {hotkey.pc}
                                    </kbd>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    {hotkey.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VSCodeHotkeysTable
