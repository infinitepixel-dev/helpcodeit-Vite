import * as React from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

import { cn } from '../../lib/utils'

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = HoverCardPrimitive.Trigger

const HoverCardContent = React.forwardRef(
    (
        { className, customClass, align = 'center', sideOffset = 4, ...props },
        ref
    ) => {
        // if customClass output string else nothing
        customClass = customClass ? customClass : ''

        return (
            <HoverCardPrimitive.Content
                ref={ref}
                align={align}
                sideOffset={sideOffset}
                className={cn(
                    `relative z-50 w-1/4 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${customClass}`,
                    className
                )}
                {...props}
            >
                <div
                    className={`absolute left-1/4 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-popover ${customClass}`}
                ></div>
                {props.children}
            </HoverCardPrimitive.Content>
        )
    }
)
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
