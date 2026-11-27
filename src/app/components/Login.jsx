
import { useState } from 'react'

import IconDumbbell from './icons/Dumbbell'
import IconHistory from './icons/History'
import IconTrendingUp from './icons/TrendingUp'
import IconSparkles from './icons/Sparkles'
import { IconEyeOpen, IconEyeClosed } from './icons/Eye'

function Login() {

    const [showPassword, setShowPassword] = useState(false)
    const [typeForm, setTypeForm] = useState("login")

    const handleEye = () => {
        setShowPassword(prev => !prev)
    }

    const handleTypeForm = (type) => {
        setTypeForm(type)
        setShowPassword(false)
    }

    const isLogin = typeForm === "login"

    const inputStyles = `
        h-[60px] w-full
        rounded-2xl
        border border-myborder
        bg-myinput
        px-4
        text-base text-myforeground
        outline-none
        placeholder:text-mymuted
        transition-colors
        focus:border-myprimary
        focus:ring-1
        focus:ring-myprimary
    `

    return (

        <main className="
            min-h-dvh
            bg-gradient-to-bl from-mybackground via-green-950/75 to-mybackground
            px-5 py-6
            text-myforeground
        ">

            <header className="flex items-center gap-4 pt-2 pb-8">

                <span className="
                    flex h-[60px] w-[60px] shrink-0
                    items-center justify-center
                    rounded-[20px]
                    bg-myprimary
                ">
                    <IconDumbbell
                        className="text-mybackground"
                        size={28}
                        strokeWidth={2.1}
                    />
                </span>

                <span className="text-2xl tracking-tight">
                    <b>GYMaiki</b>
                </span>

            </header>


            {/* INFORMACIÓN DE LA APP */}
            <section className="flex flex-col gap-3 pt-2">

                <h1 className="text-4xl font-bold tracking-tight">
                    Supera tu <span className="text-myprimary">última vez</span>.
                </h1>

                <p className="text-base font-normal text-mymuted">
                    Registra series, consulta lo que levantaste la sesión pasada
                    y progresa con sobrecarga progresiva.
                </p>

                {/* BENEFICIOS */}
                <div className="flex flex-col gap-3 pt-5 pb-10">

                    <span className="flex items-center gap-3 text-[15px]">
                        <IconHistory
                            className="shrink-0 text-myprimary"
                            size={18}
                            strokeWidth={1.8}
                        />
                        Tu última sesión por grupo muscular
                    </span>

                    <span className="flex items-center gap-3 text-[15px]">
                        <IconSparkles
                            className="shrink-0 text-myprimary"
                            size={18}
                            strokeWidth={1.8}
                        />
                        Objetivos de hoy con IA
                    </span>

                    <span className="flex items-center gap-3 text-[15px]">
                        <IconTrendingUp
                            className="shrink-0 text-myprimary"
                            size={18}
                            strokeWidth={1.8}
                        />
                        Gráficas de top sets y 1RM
                    </span>

                </div>

            </section>


            {/* AUTENTICACIÓN */}
            <section className="
                flex flex-col gap-4
                rounded-[28px]
                bg-mycard
                p-6
            ">

                {/* SELECTOR LOGIN / REGISTER */}
                <div className="
                    grid grid-cols-2
                    rounded-2xl
                    bg-myelevated
                    p-1
                ">

                    <button
                        type="button"
                        onClick={() => handleTypeForm("login")}
                        className={`
                            rounded-xl py-3
                            text-base font-semibold
                            transition-colors duration-200
                            ${isLogin
                                ? "bg-mybackground text-myforeground"
                                : "text-mymuted-foreground"
                            }
                        `}
                    >
                        Iniciar sesión
                    </button>

                    <button
                        type="button"
                        onClick={() => handleTypeForm("register")}
                        className={`
                            rounded-xl py-3
                            text-base font-semibold
                            transition-colors duration-200
                            ${!isLogin
                                ? "bg-mybackground text-myforeground"
                                : "text-mymuted-foreground"
                            }
                        `}
                    >
                        Crear cuenta
                    </button>

                </div>


                {/* FORMULARIO */}
                <form
                    className="flex flex-col gap-3"
                    onSubmit={(e) => e.preventDefault()}
                >

                    {/* NOMBRE DE USUARIO */}
                    {!isLogin && (
                        <input
                            className={inputStyles}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Nombre de usuario"
                            autoComplete="username"
                            required
                        />
                    )}


                    {/* EMAIL */}
                    <input
                        className={inputStyles}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        autoComplete="email"
                        required
                    />


                    {/* CONTRASEÑA */}
                    <div className="
                        flex h-[60px] w-full
                        items-center
                        rounded-2xl
                        border border-myborder
                        bg-myinput
                        px-4
                        transition-colors
                        focus-within:border-myprimary
                        focus-within:ring-1
                        focus-within:ring-myprimary
                    ">

                        <input
                            className="
                                min-w-0 flex-1
                                bg-transparent
                                text-base text-myforeground
                                outline-none
                                placeholder:text-mymuted
                            "
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            placeholder="Contraseña"
                            autoComplete={isLogin
                                ? "current-password"
                                : "new-password"
                            }
                            required
                        />

                        <button
                            type="button"
                            onClick={handleEye}
                            className="
                                ml-2 shrink-0
                                text-mymuted
                                transition-colors
                                hover:text-myforeground
                            "
                            aria-label={showPassword
                                ? "Ocultar contraseña"
                                : "Mostrar contraseña"
                            }
                        >
                            {showPassword
                                ? <IconEyeOpen size={22} strokeWidth={2} />
                                : <IconEyeClosed size={22} strokeWidth={2} />
                            }
                        </button>

                    </div>


                    {/* BOTÓN SUBMIT */}
                    <button
                        type="submit"
                        className="
                            h-[60px] w-full
                            rounded-2xl
                            bg-myprimary
                            font-semibold
                            text-mybackground
                            transition-opacity
                            hover:opacity-90
                            active:opacity-80
                        "
                    >
                        {isLogin ? "Entrar" : "Crear cuenta"}
                    </button>

                </form>

            </section>

        </main>
    )
}

export default Login
