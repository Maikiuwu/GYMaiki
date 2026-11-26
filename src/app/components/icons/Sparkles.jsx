import { Sparkles } from 'lucide-react'

function IconSparkles({
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    ...props
}) {
    return (
        <Sparkles
            size={size}
            color={color}
            strokeWidth={strokeWidth}
            {...props}
        />
    )
}

export default IconSparkles