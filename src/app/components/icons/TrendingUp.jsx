
import { TrendingUp } from 'lucide-react'

function IconTrendingUp({
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    ...props
}) {
    return (
        <TrendingUp
            size={size}
            color={color}
            strokeWidth={strokeWidth}
            {...props}
        />
    )
}

export default IconTrendingUp