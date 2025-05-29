import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const cardVariants = [
        {
            gradient: "from-blue-600/20 via-blue-500/10 to-transparent",
            glowColor: "shadow-blue-500/20",
            accentColor: "text-blue-600"
        },
        {
            gradient: "from-emerald-600/20 via-emerald-500/10 to-transparent",
            glowColor: "shadow-emerald-500/20",
            accentColor: "text-emerald-600"
        },
        {
            gradient: "from-purple-600/20 via-purple-500/10 to-transparent",
            glowColor: "shadow-purple-500/20",
            accentColor: "text-purple-600"
        }
    ];

    return (
        <section className="min-h-screen relative overflow-hidden from-slate-900 via-blue-900 to-slate-800">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full animate-pulse delay-1000"></div>
                
                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 py-16 lg:px-8">
                {/* Hero Header */}
                <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <h1 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-black via-blue-800 to-purple-200 bg-clip-text text-transparent mb-6">
                        SportsPro
                    </h1>
                    <p className="text-xl text-gray-900 max-w-2xl mx-auto leading-relaxed">
                        Elevate your sports management experience with cutting-edge technology and seamless performance
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Latest News Card */}
                    <div 
                        className={`group relative overflow-hidden rounded-3xl transition-all duration-700 transform hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                        style={{ transitionDelay: '200ms' }}
                        onMouseEnter={() => setHoveredCard(0)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500">
                            <div className="flex flex-col lg:flex-row overflow-hidden">
                                <div className="relative lg:w-1/2 h-80 overflow-hidden">
                                    <img 
                                        src="https://media.istockphoto.com/id/174859622/photo/sport-news.jpg?s=612x612&w=0&k=20&c=ZsUj5nfsMnxt4yk7-Mf3LWxex5Yny3ArjI1na39wxqc=" 
                                        alt="Sports community" 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                                            📰 Latest Updates
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="mb-4">
                                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
                                    </div>
                                    
                                    <h3 className="text-4xl lg:text-5xl font-bold text-grey-800 mb-6 leading-tight">
                                        Stay Connected with 
                                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                                            Latest News
                                        </span>
                                    </h3>
                                    
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                        Winning isn't everything, but wanting to win is. Get the latest updates, scores, and insights from the sports world.
                                    </p>
                                    
                                    <Link to="/Latest-news" className="group/btn">
                                        <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
                                            <span className="relative z-10 flex items-center gap-2">
                                                Latest News
                                                <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tournament Card */}
                    <div 
                        className={`group relative overflow-hidden rounded-3xl transition-all duration-700 transform hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                        style={{ transitionDelay: '400ms' }}
                        onMouseEnter={() => setHoveredCard(1)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-l from-emerald-600/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500">
                            <div className="flex flex-col lg:flex-row-reverse overflow-hidden">
                                <div className="relative lg:w-1/2 h-80 overflow-hidden">
                                    <img 
                                        src="https://www.shutterstock.com/image-photo/creative-collage-depicting-mix-men-260nw-2492320165.jpg" 
                                        alt="Tournament access" 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-emerald-600/80 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                                            🏆 Tournaments
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="mb-4">
                                        <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6"></div>
                                    </div>
                                    
                                    <h3 className="text-4xl lg:text-5xl font-bold text-grey-800 mb-6 leading-tight">
                                        Tournament
                                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent block">
                                            Access Portal
                                        </span>
                                    </h3>
                                    
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                        The Masters is the one tournament with a timeless quality, where legends are celebrated and champions are born.
                                    </p>
                                    
                                    <Link to="/Event-Tournament" className="group/btn">
                                        <button className="relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 overflow-hidden">
                                            <span className="relative z-10 flex items-center gap-2">
                                                Events & Tournaments
                                                <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access Card */}
                    <div 
                        className={`group relative overflow-hidden rounded-3xl transition-all duration-700 transform hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                        style={{ transitionDelay: '600ms' }}
                        onMouseEnter={() => setHoveredCard(2)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
                            <div className="flex flex-col lg:flex-row overflow-hidden">
                                <div className="relative lg:w-1/2 h-80 overflow-hidden">
                                    <img 
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8D70NYdY4kQudxcFRZysnApMFIVvBSE-ZkA&s" 
                                        alt="Quick access portal" 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                                            ⚡ Quick Access
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="mb-4">
                                        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
                                    </div>
                                    
                                    <h3 className="text-4xl lg:text-5xl font-bold text-grey-800 mb-6 leading-tight">
                                        Quick Access &
                                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block">
                                            Success Portal
                                        </span>
                                    </h3>
                                    
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                        Create your path to success with seamless access to all management tools and resources.
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-4">
                                        <a href="/staff" className="group/btn">
                                            <button className="relative px-6 py-3 bg-gradient-to-r from-purple-600/80 to-purple-700/80 backdrop-blur-sm hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-400/30">
                                                <span className="flex items-center gap-2">
                                                    👥 Staff
                                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </a>
                                        
                                        <button className="group/btn relative px-6 py-3 bg-gradient-to-r from-purple-600/80 to-purple-700/80 backdrop-blur-sm hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-400/30">
                                            <span className="flex items-center gap-2">
                                                🎓 Students
                                                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </button>
                                        
                                        <button className="group/btn relative px-6 py-3 bg-gradient-to-r from-purple-600/80 to-purple-700/80 backdrop-blur-sm hover:from-purple-500 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-400/30">
                                            <span className="flex items-center gap-2">
                                                🏅 Members
                                                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(120deg); }
                    66% { transform: translateY(5px) rotate(240deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};