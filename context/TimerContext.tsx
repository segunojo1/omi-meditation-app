import { createContext, useState } from "react";
interface TimerContextProps {
    duration: number;
    setDuration: (duration: number) => void;
}
export const TimerContext = createContext<TimerContextProps>({
    duration: 10,
    setDuration: (duration: number) => {},
})

interface TimerProviderProps {
    children: React.ReactNode;
}

const TimerProvider = ({ children }: TimerProviderProps) => {
    const [duration, setDuration] = useState(10);
    return (
        <TimerContext.Provider value={{ duration, setDuration }}>
            {children}
        </TimerContext.Provider>
    )
}

export default TimerProvider