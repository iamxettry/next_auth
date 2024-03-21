import {CheckCircledIcon} from '@radix-ui/react-icons';

interface FormErrorProps {
    message?: string;
}

export const FormSuccess = ({message}: FormErrorProps) => {
    if (!message) return null;
    return (
        <div className="flex items-center gap-x-2 bg-emerald-500/35 p-3 rounded-md text-sm text-emerald-500">
            <CheckCircledIcon className="h-5 w-5"/>
            <p>{message}</p>
        </div>
    )
}