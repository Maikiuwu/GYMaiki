import { Dumbbell } from 'lucide-react'

function IconDumbbell({
    size = 24,
    color = 'currentColor',
    strokeWidth = 2.1,
    ...props
}) {
    return (
        <Dumbbell
            size={size}
            color={color}
            strokeWidth={strokeWidth}
            {...props}
        />
    )
}

export default IconDumbbell