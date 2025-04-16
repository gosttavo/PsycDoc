import { useDarkMode } from "../hooks/useDarkMode";

export default function Settings() {
    const { isDarkMode } = useDarkMode();

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Configurações
                </h1>
            </div>
        </div>
    )
}