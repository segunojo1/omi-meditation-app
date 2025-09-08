import React, { createContext, useState, Dispatch, SetStateAction } from "react";

interface TimerContextProps {
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextProps>({
    duration: 10,
    setDuration: () => {},
})

interface TimerProviderProps {
    children: React.ReactNode;
}

const TimerProvider = ({ children }: TimerProviderProps) => {
    const [duration, setDuration] = useState<number>(10);
    return (
        <TimerContext.Provider value={{ duration, setDuration }}>
            {children}
        </TimerContext.Provider>
    )
}

export default TimerProvider