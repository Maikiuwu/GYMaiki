import { History } from 'lucide-react'

function IconHistory({
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    ...props
}) {
    return (
        <History
            size={size}
            color={color}
            strokeWidth={strokeWidth}
            {...props}
        />
    )
}

export default IconHistory