// src/features/troubleshoot/pages/Troubleshoot.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/common/Button'
import Text from '../../../components/common/Text'
import bgImage from '../../../assets/background.png'

const Troubleshoot = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        navigate('/troubleshoot-notification')
    }

    return (
        <div className="min-h-screen bg-black font-outfit">
            <div
                className="min-h-screen flex flex-col md:flex-row"
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${bgImage}) center/cover no-repeat`
                }}
            >
                {/* LEFT SIDE - Hidden on mobile, visible on desktop */}
                <div className="hidden md:flex flex-1 text-white p-15 flex-col items-center gap-[100px]">
                    <Text
                        variant="logo"
                        className="text-[80px] pt-10 text-center cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:text-[#00e6ff] hover:shadow-text-glow"
                        onClick={() => navigate('/')}
                    >
                        Crisonix
                    </Text>
                    <Text variant="h1" className="text-[67px] font-light leading-[1.2] pl-5 w-full">
                        AI-Powered <br />
                        <span className="text-[#00e6ff] font-medium">Disaster crisis</span> <br />
                        <span className="text-[#00e6ff] font-medium">Response</span>
                    </Text>
                </div>

                {/* RIGHT SIDE / MAIN CONTENT */}
                <div className="flex-1 flex justify-center items-center p-6 md:p-4">
                    <div className="w-full max-w-[545px] p-8 md:p-15 rounded-2xl bg-auth-gradient shadow-card text-center text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover group">
                        {/* Mobile Logo */}
                        <Text
                            variant="logo"
                            className="md:hidden text-[40px] text-white tracking-[2px] mb-5 cursor-pointer"
                            onClick={() => navigate('/')}
                        >
                            Crisonix
                        </Text>

                        {/* Title - Visible on all screens */}
                        <Text variant="h3" className="font-bold mb-2">Help & Support</Text>
                        <Text variant="caption" className="opacity-90 mb-6 font-medium">Report your issue below</Text>

                        {/* Troubleshoot Form */}
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="NAME"
                                required
                                className="w-full p-4 rounded-lg border-none bg-black/30 text-white outline-none transition-all duration-300 focus:bg-black/50 focus:shadow-input-glow focus:scale-[1.02]"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="EMAIL"
                                required
                                className="w-full p-4 rounded-lg border-none bg-black/30 text-white outline-none transition-all duration-300 focus:bg-black/50 focus:shadow-input-glow focus:scale-[1.02]"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <textarea
                                placeholder="MESSAGE"
                                rows="6"
                                required
                                className="w-full p-4 rounded-lg border-none bg-black/30 text-white outline-none resize-none transition-all duration-300 focus:bg-black/50 focus:shadow-input-glow focus:scale-[1.02]"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                            <Button
                                type="submit"
                                fullWidth
                                size="lg"
                            >
                                SUBMIT
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Troubleshoot
