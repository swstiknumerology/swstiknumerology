import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const numerologyMap = {
    A: 1, I: 1, J: 1, Q: 1, Y: 1,
    B: 2, K: 2, R: 2,
    C: 3, G: 3, L: 3, S: 3,
    D: 4, M: 4, T: 4,
    E: 5, H: 5, N: 5, X: 5,
    U: 6, V: 6, W: 6,
    O: 7, Z: 7,
    F: 8, P: 8
};

function calculateNumerology(name) {
    if (!name) return { subtotal: 0, reduced: 0 };
    const letters = name.toUpperCase().replace(/[^A-Z]/g, '');
    let subtotal = 0;
    for (let char of letters) {
        subtotal += numerologyMap[char] || 0;
    }
    let reduced = subtotal;
    while (reduced > 9) {
        reduced = reduced.toString().split('').reduce((a, b) => a + Number(b), 0);
    }
    return { subtotal, reduced };
}

const numberInfo = {
    1: { ruler: 'Sun', description: 'Leadership, ambition, and independence. People with this number are natural leaders, ambitious, and independent. They are innovative, determined, and have a strong desire to achieve their goals. Their confidence and charisma often inspire others, but they should be mindful of becoming overly self-centered or stubborn.' },
    2: { ruler: 'Moon', description: 'Sensitivity, diplomacy, and intuition. These individuals are sensitive, diplomatic, and intuitive. They excel in partnerships and are naturally cooperative, often acting as peacemakers. Their gentle nature makes them empathetic, but they should guard against indecisiveness and over-sensitivity.' },
    3: { ruler: 'Jupiter', description: 'Creativity, optimism, and expression. People with this number are creative, optimistic, and expressive. They have a natural talent for communication and often excel in artistic or social fields. Their enthusiasm and sense of humor make them popular and inspiring companions. Number 3s are known for their expansive thinking, love of learning, and ability to uplift those around them. They thrive in environments where they can express themselves freely and are often drawn to teaching, writing, or performing. However, they should be mindful of scattering their energies or becoming superficial. When focused, their creativity and positivity can lead to great success and fulfillment.' },
    4: { ruler: 'Rahu', description: 'Practicality, discipline, and hard work. These individuals are practical, disciplined, and hardworking. They value order and stability, and are often seen as reliable and methodical. Their determination helps them overcome obstacles, but they should avoid rigidity and stubbornness.' },
    5: { ruler: 'Mercury', description: 'Adaptability, curiosity, and energy. Adaptable, curious, and energetic, these people love change and variety. They are excellent communicators and quick thinkers, thriving in dynamic environments. However, they should be careful of restlessness and inconsistency.' },
    6: { ruler: 'Venus', description: 'Harmony, love, and nurturing. These individuals are loving, harmonious, and nurturing. They are drawn to beauty and balance, and often take on responsibilities in family or community. Their caring nature is a strength, but they should avoid becoming overly controlling or sacrificing their own needs.' },
    7: { ruler: 'Ketu/Neptune', description: 'Spirituality, analysis, and introspection. Analytical, spiritual, and introspective, these people seek deeper meaning in life. They are often drawn to research, philosophy, or mysticism. Their quest for knowledge is admirable, but they should avoid isolation or excessive skepticism.' },
    8: { ruler: 'Saturn', description: 'Ambition, power, and discipline. Ambitious, powerful, and disciplined, these individuals are focused on achievement and material success. They are resilient and persistent, but should be mindful of becoming too materialistic or rigid.' },
    9: { ruler: 'Mars', description: 'Courage, energy, and humanitarianism. Courageous, energetic, and humanitarian, these people are driven by a desire to help others. They are passionate and idealistic, but should avoid impulsiveness or becoming overly emotional.' },
};

const NameNumberCompounder = () => {
    const location = useLocation();
    const [name, setName] = useState('');
    const [result, setResult] = useState(null);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const nameFromQuery = queryParams.get('name');
        if (nameFromQuery) {
            setName(nameFromQuery);
            const { subtotal, reduced } = calculateNumerology(nameFromQuery);
            setResult({ name: nameFromQuery, subtotal, reduced });
        }
    }, [location.search]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newName = e.target.elements.name.value;
        if (newName.trim()) {
            setName(newName);
            const { subtotal, reduced } = calculateNumerology(newName);
            setResult({ name: newName, subtotal, reduced });
        }
    };

    return (
        <div className="bg-[#FFF] min-h-screen flex flex-col">
            <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-[#06402B] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Name Number Compounder
                </h1>
                <div className="w-46 h-1 bg-[#FFB823] mx-auto mt-4 mb-8 rounded-full" />
                {result ? (
                    <>
                    {/* Main result (letters, numbers, total) */}
                    <div className="inline-block mb-8">
                        <div className="flex flex-row justify-center gap-1 text-2xl font-bold text-[#06402B] mb-2" style={{ fontFamily: 'Arial', letterSpacing: '0.2rem' }}>
                            {result.name.toUpperCase().split('').map((char, idx) => (
                                <span key={idx} className="w-8 inline-block text-center">{char === ' ' ? '\u00A0' : char}</span>
                            ))}
                        </div>
                        <div className="flex flex-row justify-center gap-1 text-xl font-semibold text-[#2D4F2B] mb-4" style={{ fontFamily: 'sans-serif', letterSpacing: '0.2em' }}>
                            {result.name.toUpperCase().split('').map((char, idx) => (
                                <span key={idx} className="w-8 inline-block text-center">
                                    {char === ' ' ? '\u00A0' : (numerologyMap[char] || '')}
                                </span>
                            ))}
                        </div>
                        <div className="text-xl text-[#06402B] font-bold mt-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Total: {result.subtotal}
                        </div>
                        <div className="text-xl text-[#2D4F2B] font-bold mt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {result.subtotal} = {result.reduced}
                        </div>

                        <div className="max-w-md mx-auto  mt-6  bg-[#FFF1CA] border-2 border-[#06402B] rounded-2xl shadow-lg p-6 flex flex-col items-center">
                        <div className="text-5xl font-extrabold text-[#06402B] mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {result.reduced}
                        </div>
                        <div className="text-lg font-bold text-[#2D4F2B] mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Ruled by: <span className="text-[#06402B]">{numberInfo[result.reduced]?.ruler || '-'}</span>
                        </div>
                        <div className="text-base text-[#06402B] text-center font-bold" style={{ fontFamily: 'sans-serif' }}>
                            {/* Short description: first sentence only */}
                            {(numberInfo[result.reduced]?.description || '').split('. ')[0] + '.'}
                        </div>


                    </div>
                    </div>
                    {/* Full justified paragraph below the card and result */}
                    <div className="max-w-2xl mx-auto mb-5">
                        <p className="text-[#06402B] text-base md:text-xl mt-6 text-justify font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>
                            {numberInfo[result.reduced]?.description || ''}
                        </p>
                    </div>
                    </>
                ) : (
                    <div className="text-[#06402B] text-xl font-semibold">No name provided.</div>
                )}
            </main>
        </div>
    );
};

export default NameNumberCompounder; 