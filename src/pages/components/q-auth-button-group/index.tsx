import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { LinkedinIcon, GoogleIcon, TwitterIcon } from "../provider-icons";

const providers = [
    { name: "Google", icon: <GoogleIcon boxSize="5" /> },
    { name: "Twitter", icon: <TwitterIcon boxSize="5" /> },
    { name: "Linkedin", icon: <LinkedinIcon boxSize="5" /> },
];

export const OAuthButtonGroup = () => (
    <ButtonGroup variant="outline" spacing="4" width="full">
        {providers.map(({ name, icon }) => (
            <Button key={name} width="full">
                <VisuallyHidden>Sign in with {name}</VisuallyHidden>
                {icon}
            </Button>
        ))}
    </ButtonGroup>
);
