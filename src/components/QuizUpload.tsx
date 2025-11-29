import { Button, FileUpload } from "@chakra-ui/react";
import { HiUpload } from "react-icons/hi";



export default function QuizUpload(props: FileUpload.RootProps) {
    return (
        <FileUpload.Root {...props}>
            <FileUpload.HiddenInput/>
            <FileUpload.Trigger asChild>
                <Button>
                    <HiUpload/>
                    Upload quiz
                </Button>
            </FileUpload.Trigger>
            <FileUpload.List/>
        </FileUpload.Root>
    )
}