export interface IItemMotion {
    hidden: {
        opacity: number;
    };
    show: {
        opacity: number;
    };
}

export const itemMotion: IItemMotion = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
};
