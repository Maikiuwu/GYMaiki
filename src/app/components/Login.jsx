
import IconDumbbell from './icons/Dumbbell'
import IconHistory from './icons/History'
import IconTrendingUp from './icons/TrendingUp'

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
        <main className="min-h-dvh bg-gradient-to-br from-mybackground via-green-950/75 to-mybackground px-5 py-6 text-myforeground overflow-hidden scrollbar-non">
           
            <header className="flex items-center pt-16 pb-8 gap-4" >

                <span className=" flex h-[60px] w-[60px]  items-center justify-center rounded-[20px] bg-myprimary ">
                    <IconDumbbell
                        className="text-mybackground"
                        size={28}
                        strokeWidth={2.1}
                    />
                </span>

                <span className="text-2xl tracking-tight font-normal">
                    <b>GYMaiki</b>
                </span>

            </header>

            <section className="flex flex-col gap-4 pt-6">
                <span className='flex flex-row text-4xl font-bold pb-2'><h1>Supera tu </h1><h1 className="text-myprimary">última vez</h1></span>
                
                <p className='pb-3 font-light text-base'>Registra series, consulta lo que levantaste la sesion pasda y progresa con sobrecarga progresiva.</p>
                

                <span className='flex items-center gap-2 text-base pt-1 '><IconHistory className="text-myprimary" size={20} strokeWidth={1.5} /> Tu última sesión por grupo muscular</span>
                <span className='flex items-center gap-2 text-base pt-1'><IconHistory className="text-myprimary" size={20} strokeWidth={1.8} /> Objetivos de hoy con IA</span>
                <span className='flex items-center gap-2 text-base pt-1'><IconTrendingUp className="text-myprimary" size={20} strokeWidth={1.8} /> Gráficas de top sets y 1RM</span>
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