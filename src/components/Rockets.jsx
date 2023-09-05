import rocketMan from "../assets/images/rocketman.png"
import rocketRide from "../assets/images/rocketride.png"
import rocketLaunch from "../assets/images/rocketlaunch.png"

const Rockets = () => {
  return (
    <section id='rockets' className='p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height'>
        <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
            Our Rockets
        </h2>
        <ul className='list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8'>
            <li className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl'>
                <img src={rocketMan} alt="Explorer" className='w-1/2 mb-6' />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white">Explorer</h3>
                <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$</p>
                <p className=" sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Affordable Exploration</p>
            </li>
            <li className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl'>
                <img src={rocketRide} alt="Adventure" className='w-1/2 mb-6' />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white">Adventurer</h3>
                <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$$</p>
                <p className=" sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Best selling rocket</p>
            </li>
            <li className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl'>
                <img src={rocketLaunch} alt="Infinity" className='w-1/2 mb-6' />
                <h3 className="text-3xl text-center text-slate-900 dark:text-white">Infinity</h3>
                <p className="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">$$$</p>
                <p className=" sm:hidden text-2xl text-center mt-2 text-slate-500 dark:text-slate-400">Luxury starship</p>
            </li>
        </ul>
    </section>
  )
}

export default Rockets