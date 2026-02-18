// src/features/dashboard/pages/Dashboard.jsx
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../components/common/Navbar';
import Footer from '../../../components/common/Footer';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import mapMesh from '../../../assets/background.png';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-brand-accent/30 font-outfit">
            <Navbar />

            {/* Background Map Mesh Overlay */}
            <div
                className="fixed inset-0 pointer-events-none opacity-40 z-0"
                style={{
                    background: `url(${mapMesh}) center/cover no-repeat`,
                    mixBlendMode: 'screen'
                }}
            />

            <main className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-6 py-10 space-y-8">
                {/* Profile Card 1 */}
                <div className="w-full border-[2px] md:border-[3px] border-[#008a99] rounded-[20px] md:rounded-[30px] p-4 md:p-6 bg-[#02171a]/80 shadow-2xl">
                    <Text variant="h3" className="font-bold mb-4">Profile</Text>
                    <div className="h-[150px] md:h-[200px] rounded-[15px] md:rounded-[20px] bg-[#0d2a2e]/60 border border-white/5"></div>
                </div>

                {/* Profile Card 2 */}
                <div className="w-full border-[2px] md:border-[3px] border-[#008a99] rounded-[20px] md:rounded-[30px] p-4 md:p-6 bg-[#02171a]/80 shadow-2xl">
                    <Text variant="h3" className="font-bold mb-4">Profile</Text>
                    <div className="h-[150px] md:h-[200px] rounded-[15px] md:rounded-[20px] bg-[#0d2a2e]/60 border border-white/5"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-4 space-y-6 md:space-y-8">
                        {/* Achievements */}
                        <div className="border-[2px] md:border-[3px] border-[#008a99] rounded-[20px] md:rounded-[30px] p-4 md:p-6 bg-[#02171a]/80 shadow-2xl">
                            <Text variant="h3" className="font-bold mb-4">Achievements</Text>
                            <div className="h-[100px] md:h-[120px] rounded-[15px] md:rounded-[20px] bg-[#0d2a2e]/60 border border-white/5"></div>
                        </div>

                        {/* XP Points */}
                        <div className="border-[2px] md:border-[3px] border-[#008a99] rounded-[20px] md:rounded-[30px] p-4 md:p-6 bg-[#02171a]/80 shadow-2xl">
                            <Text variant="h3" className="font-bold mb-4">XP Points</Text>
                            <div className="h-[50px] md:h-[60px] rounded-[10px] md:rounded-[15px] bg-[#0d2a2e]/60 border border-white/5"></div>
                        </div>

                        {/* Leaderboard */}
                        <div className="border-[2px] md:border-[3px] border-[#008a99] rounded-[20px] md:rounded-[30px] p-4 md:p-6 bg-[#02171a]/80 shadow-2xl">
                            <Text variant="h3" className="font-bold mb-4">Leaderboard</Text>
                            <div className="space-y-4">
                                <div className="h-[40px] md:h-[50px] rounded-[10px] md:rounded-[15px] bg-[#0d2a2e]/60 border border-white/5"></div>
                                <div className="h-[40px] md:h-[50px] rounded-[10px] md:rounded-[15px] bg-[#0d2a2e]/60 border border-white/5"></div>
                                <div className="h-[40px] md:h-[50px] rounded-[10px] md:rounded-[15px] bg-[#0d2a2e]/60 border border-white/5"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-8 space-y-6 md:space-y-8">
                        {/* Active Missions */}
                        <div className="border-[2px] md:border-[3px] border-[#008a99] rounded-[20px] md:rounded-[30px] p-4 md:p-6 bg-[#02171a]/80 shadow-2xl min-h-[250px] md:min-h-[300px]">
                            <Text variant="h3" className="font-bold mb-4">Active missions</Text>
                            <div className="space-y-4 md:space-y-6">
                                <div className="h-[70px] md:h-[80px] rounded-[15px] md:rounded-[20px] bg-[#0d2a2e]/60 border border-white/5"></div>
                                <div className="h-[70px] md:h-[80px] rounded-[15px] md:rounded-[20px] bg-[#0d2a2e]/60 border border-white/5"></div>
                            </div>
                        </div>

                        {/* Crisis Map */}
                        <div className="border-[2px] md:border-[3px] border-[#008a99] rounded-[20px] md:rounded-[30px] p-4 md:p-6 bg-[#02171a]/80 shadow-2xl relative">
                            <Text variant="h3" className="font-bold mb-4">Crisis Map</Text>
                            <div className="h-[200px] md:h-[250px] rounded-[15px] md:rounded-[20px] bg-[#0d2a2e]/60 border border-white/5 flex items-center justify-center">
                                {/* Map Representation */}
                            </div>
                            <div className="mt-6 md:absolute md:bottom-10 md:right-10 flex justify-end">
                                <Button
                                    onClick={() => { }}
                                    className="w-full md:w-auto text-xl md:text-2xl"
                                    size="lg"
                                >
                                    VIEW MAP
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;
