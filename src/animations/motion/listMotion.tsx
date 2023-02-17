export interface IListMotion {
    hidden: {
        opacity: number;
    };
    show: {
        opacity: number;
        transition: {
            staggerChildren: number;
            duration: number;
        };
    };
}

export const listMotion: IListMotion = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 1,
        },
    },
};
