import { Eye } from 'lucide-react'
import {EyeClosed} from 'lucide-react'

export function IconEyeOpen({size,color,strokeWidth,...props}){
    return (
        <Eye
            size={size}
            color={color}
            strokeWidth={strokeWidth}
            {...props}
        /> 
    )
}

export function IconEyeClosed({size,color,strokeWidth,...props}){
    return (
        <EyeClosed
            size={size}
            color={color}
            strokeWidth={strokeWidth}
            {...props}
        />
    )
}