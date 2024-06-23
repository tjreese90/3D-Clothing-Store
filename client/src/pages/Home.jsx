/* eslint-disable react/no-unescaped-entities */
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation('down')}>
                        <img
                            src='./threejs.png'
                            alt='logo'
                            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                        />
                    </motion.header>

                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1
                                style={{
                                    fontSize: '3rem',
                                    color: 'burlywood',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                }}
                            >
                                LET'S <br style={{ display: 'none' }} /> DO IT.
                            </h1>
                        </motion.div>
                        <motion.div
                            {...headContentAnimation}
                            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                        >
                            <p
                                style={{
                                    maxWidth: '632px',
                                    fontWeight: '800',
                                    color: 'royalblue',
                                    fontSize: '1.5rem',
                                }}
                            >
                                Create your unique and exclusive shirt with our brand-new 3D
                                customization tool. <strong>Unleash your imagination</strong>{" "}
                                and define your own style.
                            </p>

                            <CustomButton
                                type='filled'
                                title='Customize It'
                                handleClick={() => (state.intro = false)}
                                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default Home;
