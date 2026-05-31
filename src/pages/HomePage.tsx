import { useState } from 'react'
import { Search, Bell, ChevronRight, MapPin, Star, Bookmark, SlidersHorizontal, Crown, ChevronDown, User, Grid2X2, Laptop, GraduationCap, Car, Wrench, Scissors } from 'lucide-react'
import { StatusBar } from '../components/shared'
import { useNav } from '../context/NavContext'

const ADS = [
  {id:'heritage', img:'/assets/ai-banner-heritage.jpg', brand:'The Heritage', title:'Up to', sub:'30% OFF', desc:'Flights & Hotels', service:{provider:'The Heritage',name:'Flights & Hotels Package',price:'320.00',providerBg:'bg-indigo-500',providerEmoji:'TH',providerImage:'/assets/ai-banner-heritage.jpg',heroImg:'/assets/ai-banner-heritage.jpg'}},
  {id:'carwash', img:'/assets/ai-banner-sparkle-carwash.jpg', brand:'Sparkle Auto', title:'Premium Wash', sub:'10% OFF', desc:'Foam wash and interior care', service:{provider:'Sparkle Auto Wash',name:'Premium Wash',price:'75.00',providerBg:'bg-blue-500',providerEmoji:'SA',providerImage:'/assets/ai-profile-sparkle-carwash.jpg',heroImg:'/assets/ai-banner-sparkle-carwash.jpg'}},
  {id:'salon', img:'/assets/ai-banner-glow-salon.jpg', brand:'Glow Salon & Spa', title:'Beauty Day', sub:'15% OFF', desc:'Salon and spa treatments', service:{provider:'Glow Salon & Spa',name:'Salon & Spa Package',price:'120.00',providerBg:'bg-pink-500',providerEmoji:'GS',providerImage:'/assets/ai-profile-glow-salon.jpg',heroImg:'/assets/ai-banner-glow-salon.jpg'}},
  {id:'cleaning', img:'/assets/ai-banner-home-cleaning.jpg', brand:'CleanPro Services', title:'Fresh Home', sub:'20% OFF', desc:'Professional home care', service:{provider:'CleanPro Services',name:'Deep Clean',price:'160.00',providerBg:'bg-teal-500',providerEmoji:'CP',providerImage:'/assets/ai-avatar-cleanpro.jpg',heroImg:'/assets/ai-banner-home-cleaning.jpg'}},
]

const HOME_CATS = [
  {id:'digital', label:'Digital', img:'/assets/ai-homecat-digital.png'},
  {id:'education', label:'Education', img:'/assets/ai-homecat-education.png'},
  {id:'car', label:'Car Services', img:'/assets/ai-homecat-car.png'},
  {id:'home', label:'Home Services', img:'/assets/ai-homecat-home_services.png'},
  {id:'delivery', label:'Deliveries', img:'/assets/ai-homecat-delivery.png'},
  {id:'salon', label:'Salon & Spa', img:'/assets/ai-homecat-salon.png'},
  {id:'marketplace', label:'Marketplace', img:'/assets/ai-homecat-market.png'},
  {id:'more', label:'More', img:'/assets/ai-homecat-more.png'},
]

const FEATURED = [
  {provider:'Scrubs', name:'Scrubs Cleaning', tag:'Home Services', from:'160.00 QR', rating:'4.8', reviews:'120', dist:'11.84 KM', img:'/assets/scrubs-hero.png', bg:'bg-red-50', imgFit:'object-cover object-top', service:{provider:'Scrubs Cleaning',name:'General Cleaning',price:'160.00',providerBg:'bg-red-500',providerEmoji:'SC',providerImage:'/assets/scrubs-leaf-logo-clean.png',heroImg:'/assets/scrubs-booking-hero-clean.png'}},
  {provider:'Sparkle Auto', name:'Sparkle Car Wash', tag:'Car Services', from:'45.00 QR', rating:'4.7', reviews:'98', dist:'3.2 KM', img:'/assets/ai-profile-sparkle-carwash.jpg', bg:'bg-blue-50', imgFit:'object-cover object-center', service:{provider:'Sparkle Auto Wash',name:'Premium Wash',price:'75.00',providerBg:'bg-blue-500',providerEmoji:'SA',providerImage:'/assets/ai-profile-sparkle-carwash.jpg',heroImg:'/assets/ai-banner-sparkle-carwash.jpg'}},
  {provider:'Glow Spa', name:'Glow Salon & Spa', tag:'Salon & Spa', from:'120.00 QR', rating:'4.9', reviews:'215', dist:'5.1 KM', img:'/assets/ai-profile-glow-salon.jpg', bg:'bg-pink-50', imgFit:'object-cover object-top', service:{provider:'Glow Salon & Spa',name:'Salon & Spa Package',price:'120.00',providerBg:'bg-pink-500',providerEmoji:'GS',providerImage:'/assets/ai-profile-glow-salon.jpg',heroImg:'/assets/ai-banner-glow-salon.jpg'}},
  {provider:'ByteCare', name:'ByteCare Digital', tag:'Digital', from:'65.00 QR', rating:'4.8', reviews:'134', dist:'Online', img:'/assets/ai-provider-bytecare-digital.png', bg:'bg-cyan-50', imgFit:'object-cover object-center', service:{provider:'ByteCare Digital',name:'Device Setup',price:'65.00',providerBg:'bg-cyan-500',providerEmoji:'BD',providerImage:'/assets/ai-provider-bytecare-digital.png',heroImg:'/assets/ai-provider-bytecare-digital.png'}},
  {provider:'PixelNest', name:'PixelNest Studio', tag:'Digital', from:'180.00 QR', rating:'4.9', reviews:'88', dist:'Online', img:'/assets/ai-provider-pixelnest-studio.png', bg:'bg-violet-50', imgFit:'object-cover object-center', service:{provider:'PixelNest Studio',name:'Website Starter',price:'180.00',providerBg:'bg-violet-500',providerEmoji:'PN',providerImage:'/assets/ai-provider-pixelnest-studio.png',heroImg:'/assets/ai-provider-pixelnest-studio.png'}},
  {provider:'BrightPath', name:'BrightPath Tutors', tag:'Education', from:'95.00 QR', rating:'4.8', reviews:'112', dist:'Online', img:'/assets/ai-provider-brightpath-tutors.png', bg:'bg-amber-50', imgFit:'object-cover object-center', service:{provider:'BrightPath Tutors',name:'Math Tutoring',price:'95.00',providerBg:'bg-amber-500',providerEmoji:'BT',providerImage:'/assets/ai-provider-brightpath-tutors.png',heroImg:'/assets/ai-provider-brightpath-tutors.png'}},
  {provider:'Summit Learning', name:'Summit Learning Hub', tag:'Education', from:'110.00 QR', rating:'4.9', reviews:'76', dist:'Online', img:'/assets/ai-provider-summit-learning.png', bg:'bg-emerald-50', imgFit:'object-cover object-center', service:{provider:'Summit Learning Hub',name:'Exam Prep Session',price:'110.00',providerBg:'bg-emerald-500',providerEmoji:'SL',providerImage:'/assets/ai-provider-summit-learning.png',heroImg:'/assets/ai-provider-summit-learning.png'}},
]

const TABS = [
  {label:'All', Icon: Grid2X2},
  {label:'Digital', Icon: Laptop},
  {label:'Education', Icon: GraduationCap},
  {label:'Car Services', Icon: Car},
  {label:'Home Services', Icon: Wrench},
  {label:'Salon & Spa', Icon: Scissors},
]

export default function HomePage() {
  const { navigate } = useNav()
  const [activeTab, setActiveTab] = useState('All')
  const visibleFeatured = activeTab === 'All' ? FEATURED : FEATURED.filter(f => f.tag === activeTab)

  return (
    <div className="relative flex flex-col flex-1 overflow-hidden bg-[#d8edff]">
      <img
        src="/assets/home-wave-background.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top"
        aria-hidden="true"
      />
      <StatusBar />
      <div className="relative z-10 flex-1 overflow-y-auto px-4 pb-28">
        <div className="flex items-center justify-between pt-2 gap-3">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-[58px] h-[58px] rounded-full bg-gradient-to-br from-[#ffd34d] to-[#f7b90f] flex items-center justify-center shadow-sm shrink-0">
              <User size={36} className="text-[#0967ff]" fill="#0967ff" />
            </div>
            <div className="min-w-0">
              <p className="text-[15px] font-bold text-[#6d7192]">Hi, Siraj Sayed</p>
              <h1 className="text-[25px] leading-7 font-black text-black truncate">Welcome to Helpy</h1>
            </div>
          </div>
          <button onClick={()=>navigate('notifications')} className="relative w-12 h-12 rounded-[18px] bg-white shadow-md flex items-center justify-center shrink-0">
            <Bell size={22}/>
            <span className="absolute right-3 top-3 w-2.5 h-2.5 bg-[#0967ff] rounded-full"/>
          </button>
        </div>

        <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-center">
          <button onClick={()=>navigate('location')} className="min-w-0 h-[46px] rounded-[23px] bg-white shadow-sm flex items-center gap-2.5 px-3.5 text-left">
            <span className="relative w-7 h-7 rounded-full bg-[#fff3bf] flex items-center justify-center shrink-0 shadow-sm">
              <MapPin size={20} className="text-[#0967ff] fill-[#0967ff]"/>
              <span className="absolute top-[8px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#ffd43b] border border-white"/>
            </span>
            <span className="flex-1 truncate text-[14px] font-semibold">Viva Bahriya 10, The Pearl-Qatar</span>
            <ChevronDown size={18} className="shrink-0"/>
          </button>
          <button onClick={()=>navigate('wallet')} className="h-[46px] rounded-[22px] bg-white border border-[#8cbcff] text-[#0967ff] font-black text-[12px] flex items-center gap-2 px-3.5 whitespace-nowrap">
            <Crown size={16} className="fill-[#0967ff]"/>Join for Free
          </button>
        </div>

        <div className="mt-4 grid grid-cols-[minmax(0,1fr)_52px] gap-3 items-center">
          <div className="h-[46px] rounded-[23px] bg-white shadow-sm flex items-center gap-2.5 px-4 min-w-0">
            <Search size={21} className="shrink-0 text-[#111827]"/>
            <input className="bg-transparent outline-none flex-1 min-w-0 text-[14px] placeholder:text-[#73789b]" placeholder="Search for services, categories..."/>
          </div>
          <button onClick={()=>navigate('categories')} className="w-[46px] h-[46px] rounded-[16px] bg-white shadow-md flex items-center justify-center">
            <SlidersHorizontal size={21} className="text-[#0967ff]"/>
          </button>
        </div>

        <div className="mt-4 overflow-x-auto snap-x snap-mandatory scroll-smooth flex gap-3 no-scrollbar">
          {ADS.map((ad)=> (
            <button key={ad.id} onClick={()=>navigate('service-detail',ad.service)} className="relative shrink-0 snap-center w-full h-[166px] rounded-[20px] overflow-hidden text-left shadow-sm bg-white">
              <img src={ad.img} className="absolute inset-0 w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/65 to-transparent"/>
              <div className="relative p-4 text-[#07133d]">
                <p className="inline-flex rounded-full bg-[#07133d] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-white">{ad.brand}</p>
                <p className="mt-2 text-[17px] font-black leading-none">{ad.title}</p>
                <p className="mt-1 text-[29px] font-black leading-none">{ad.sub}</p>
                <p className="mt-1.5 text-[15px] font-black">{ad.desc}</p>
                <span className="mt-1.5 inline-flex px-3.5 py-1.5 rounded-[14px] bg-[#0967ff] text-white text-[12px] font-black shadow-lg shadow-blue-200">Book Now</span>
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-3"><span className="w-2.5 h-2.5 bg-[#0967ff] rounded-full"/><span className="w-2.5 h-2.5 bg-white rounded-full"/><span className="w-2.5 h-2.5 bg-white rounded-full"/><span className="w-2.5 h-2.5 bg-white rounded-full"/></div>

        <SectionTitle title="Categories" onClick={()=>navigate('categories')} />
        <div className="grid grid-cols-4 gap-2.5">
          {HOME_CATS.map(c=>(
            <button key={c.id} onClick={()=>c.id==='more'?navigate('categories'):navigate('category-services',{id:c.id,label:c.label})} className="h-[94px] bg-white rounded-[18px] shadow-sm flex flex-col items-center justify-center gap-1.5 px-1 active:scale-95 transition overflow-hidden">
              <div className="w-[82px] h-[60px] flex items-center justify-center overflow-hidden">
                <img src={c.img} className="w-full h-full object-contain"/>
              </div>
              <p className="text-[12px] leading-[14px] font-bold text-center text-[#111827] line-clamp-2">{c.label}</p>
            </button>
          ))}
        </div>

        <SectionTitle title="Featured Services" onClick={()=>navigate('categories')} />
        <div className="flex gap-2 overflow-x-auto pb-2">
          {TABS.map(({label, Icon})=>(
            <button key={label} onClick={()=>setActiveTab(label)} className={`shrink-0 h-10 px-4 rounded-[18px] font-bold text-[13px] shadow-sm flex items-center gap-2 ${activeTab===label?'bg-[#0967ff] text-white':'bg-white text-[#10152f]'}`}>
              <Icon size={15}/>{label}
            </button>
          ))}
        </div>
        <div className="space-y-3 mt-1">
          {visibleFeatured.map(f=>(
            <button key={f.name} onClick={()=>navigate('service-detail',f.service)} className="w-full bg-white rounded-[22px] shadow-sm p-2 flex text-left active:scale-[0.99] transition">
              <div className={`w-[122px] h-[104px] rounded-[18px] shrink-0 ${f.bg} flex items-center justify-center overflow-hidden`}>
                <img src={f.img} className={`w-full h-full ${f.imgFit}`}/>
              </div>
              <div className="flex-1 pl-3 py-0.5 min-w-0">
                <div className="flex justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[12px] font-bold text-[#0967ff] truncate">{f.provider}</p>
                    <p className="text-[18px] leading-6 font-black truncate">{f.name}</p>
                  </div>
                  <span className="w-10 h-10 rounded-[14px] bg-white shadow flex items-center justify-center shrink-0"><Bookmark size={20}/></span>
                </div>
                <span className="mt-2 inline-block rounded-lg bg-[#e8f2ff] px-3 py-1 text-[#0967ff] text-[12px] font-bold">{f.tag}</span>
                <div className="mt-2 flex justify-between items-start gap-2">
                  <div className="min-w-0 pt-1">
                    <p className="flex items-baseline gap-1.5 whitespace-nowrap">
                      <span className="text-[11px] text-[#65708a]">from</span>
                      <span className="text-[18px] font-black text-[#0967ff]">{f.from}</span>
                    </p>
                  </div>
                  <div className="text-right shrink-0 -mt-1">
                    <p className="text-[12px] text-[#65708a]"><Star size={15} className="inline text-yellow-400 fill-yellow-400"/> {f.rating} ({f.reviews})</p>
                    <p className="text-[11px] text-[#65708a]"><MapPin size={12} className="inline"/> {f.dist} away</p>
                  </div>
                </div>
              </div>
            </button>
          ))}
          {visibleFeatured.length === 0 && (
            <button onClick={()=>navigate('category-services',{id:activeTab.toLowerCase().replaceAll(' ','-'),label:activeTab})} className="w-full rounded-[22px] bg-white py-8 text-center text-[14px] font-bold text-[#0967ff] shadow-sm">
              Browse {activeTab}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function SectionTitle({title,onClick}:{title:string;onClick:()=>void}) {
  return (
    <div className="flex items-center justify-between mt-3 mb-3">
      <h2 className="text-[23px] font-black text-black">{title}</h2>
      <button onClick={onClick} className="flex items-center gap-1 text-[#0967ff] text-[15px] font-bold">View all <ChevronRight size={18}/></button>
    </div>
  )
}
