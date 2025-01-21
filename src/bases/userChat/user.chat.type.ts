export interface IPropsUserChat {
        icon: string;

        userName: UserNameChat;

        message: string;
}

export interface IStateUserChat {
        pressedLink: boolean ;
}

export interface UserNameChat {
        name: string;

        to: string;
}