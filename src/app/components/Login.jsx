
import IconDumbbell from './icons/Dumbbell'
import IconHistory from './icons/History'
import IconTrendingUp from './icons/TrendingUp'
import IconSparkles from './icons/Sparkles'
//16 24 32
/*</main> <main className="
  min-h-dvh
  bg-black
  bg-[radial-gradient(ellipse_100%_55%_at_50%_0%,rgba(120,180,20,0.20),transparent_100%)]
  px-5 py-6
  text-myforeground
"> */
function Login() {
    return (
        <main className="h-dvh bg-gradient-to-bl from-mybackground via-green-950/75 to-mybackground px-5 py-6 text-myforeground overflow-hidden scrollbar-non">
           
            <header className="flex items-center pt-8 pb-8 gap-4" >

                <span className=" flex h-[50px] w-[50px]  items-center justify-center rounded-[20px] bg-myprimary ">
                    <IconDumbbell
                        className="text-mybackground"
                        size={25}
                        strokeWidth={2.1}
                    />
                </span>

                <span className="text-2xl tracking-tight font-normal">
                    <b>GYMaiki</b>
                </span>

            </header>

            <section className="flex flex-col gap-y-2 pt-2">
                <h1 className="text-4xl font-bold">Supera tu <span className="text-myprimary">última vez</span>.</h1>
                
                <p className=' font-normal text-[16px] text-mymuted-foreground'>Registra series, consulta lo que levantaste la sesión pasada y progresa con sobrecarga progresiva.</p>
                
               
                <span className='flex items-center text-base  '><IconHistory className="text-myprimary" size={18} strokeWidth={1.5} /> Tu última sesión por grupo muscular</span>
                <span className='flex items-center text-base '><IconSparkles className="text-myprimary" size={18} strokeWidth={1.5} /> Objetivos de hoy con IA</span>
                <span className='flex items-center text-base '><IconTrendingUp className="text-myprimary" size={18} strokeWidth={1.8} /> Gráficas de top sets y 1RM</span>
            </section>

            <section className="flex flex-col gap-2 p-6 bg-mycard rounded-[24px]">

                <div className='flex flex-row  bg-myelevated p-1 text-justify rounded-[24px]'>
                    <button className='bg-mybackground rounded-[24px] w-full'>Iniciar sesión</button>
                    <button className='bg-mybackground rounded-[24px] w-full'>Registrarse</button>
                </div>
                <form className="flex flex-col gap-2 pt-4 ">
                    <input className='bg-myinput' type="email" name="email" for="email" id="email" placeholder="Email" />
                    <input className='bg-myinput' type="password" name="password" for="password" id="password" placeholder="Password" />

                    <button className='bg-myprimary text-mybackground font-medium'>Entrar</button>
                </form>

            </section>
        </main>
    )
}

export default Login