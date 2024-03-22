import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "./auth/CardWrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper headerLabel="Ooops! something Went wrong!" backButtonHref="/auth/login" backButtonLabel="Back to login">
        <div className="flex flex-col items-center justify-center w-full h-full">
            <ExclamationTriangleIcon className="text-destructive"/>
        </div>
    </CardWrapper>
  )
}
