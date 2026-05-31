import { useState } from 'react'
import { ArrowLeft, ChevronRight, Smartphone, GraduationCap, HeartPulse } from 'lucide-react'
import { useNav } from '../context/NavContext'
import { StatusBar } from '../components/shared'

const CATS = [
  {id:'cleaning', label:'Cleaning Services', img:'/assets/ai-cat-cleaning.png'},
  {id:'craft', label:'Craftsmanship', img:'/assets/ai-cat-craft.png'},
  {id:'design', label:'Design and Branding', img:'/assets/ai-cat-design.png'},
  {id:'gift', label:'Gift', img:'/assets/ai-cat-gift.png'},
  {id:'gov', label:'Government Paper Handler', img:'/assets/ai-cat-gov.png'},
  {id:'hardware', label:'Hardware', img:'/assets/ai-cat-hardware.png'},
  {id:'language', label:'Language', img:'/assets/ai-cat-language.png'},
  {id:'maintenance', label:'Maintenance', img:'/assets/ai-cat-maintenance.png'},
  {id:'health', label:'Personal Health Services', img:'/assets/ai-cat-health.png'},
  {id:'treatment', label:'Treatment', img:'/assets/ai-cat-treatment.png'},
  {id:'tutoring', label:'Tutoring', img:'/assets/ai-cat-tutoring.png'},
  {id:'visuals', label:'Visuals', img:'/assets/ai-cat-visuals.png'},
  {id:'digital', label:'Digital', img:'/assets/ai-homecat-digital.png'},
  {id:'education', label:'Education', img:'/assets/ai-homecat-education.png'},
  {id:'car', label:'Car Services', img:'/assets/ai-homecat-car.png'},
  {id:'home', label:'Home Services', img:'/assets/ai-homecat-home_services.png'},
  {id:'delivery', label:'Deliveries', img:'/assets/ai-homecat-delivery.png'},
  {id:'salon', label:'Salon & Spa', img:'/assets/ai-homecat-salon.png'},
  {id:'marketplace', label:'Marketplace', img:'/assets/ai-homecat-market.png'},
]

export default function CategoriesPage() {
  const { goBack, navigate } = useNav()
  const [tab,setTab] = useState('All')
  const tabs = ['All','Digital','Education','Health Care']
  const filtered = CATS.filter(c => tab==='All' || (tab==='Digital' && ['digital','hardware','visuals','design'].includes(c.id)) || (tab==='Education' && ['education','tutoring','language'].includes(c.id)) || (tab==='Health Care' && ['health','treatment'].includes(c.id)))

  return (
    <div className="relative flex flex-col flex-1 bg-[#d8edff] overflow-hidden">
      <img
        src="/assets/home-wave-background.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-top opacity-70"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/20" aria-hidden="true" />
      <div className="absolute -top-16 -right-20 h-56 w-56 rounded-full bg-white/55 blur-3xl" aria-hidden="true" />
      <StatusBar time="11:07" />
      <div className="relative z-10 flex-1 overflow-y-auto px-4 pb-28">
        <button onClick={goBack} className="mt-3 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-[#0c57d8]">
          <ArrowLeft size={23}/>
        </button>
        <h1 className="mt-5 text-[34px] font-black tracking-tight text-black">Categories</h1>
        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
          {tabs.map(t=>(
            <button key={t} onClick={()=>setTab(t)} className={`shrink-0 h-11 px-4 rounded-[19px] border text-[14px] font-bold flex items-center gap-2 ${tab===t?'bg-[#0b4edb] text-white border-[#0b4edb] shadow-md':'bg-white text-black border-[#e5e7eb] shadow-sm'}`}>
              {t==='Digital'&&<Smartphone size={18}/>}
              {t==='Education'&&<GraduationCap size={19}/>}
              {t==='Health Care'&&<HeartPulse size={19}/>}
              {t}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3 mt-5">
          {filtered.map(c=>(
            <button
              key={c.id}
              onClick={()=>navigate(c.id==='cleaning'||c.id==='home'?'service-detail':'category-services', c.id==='cleaning'||c.id==='home'?{provider:'Scrubs Cleaning',name:'General Cleaning',price:'160.00',providerBg:'bg-red-500',providerEmoji:'🧹'}:{id:c.id,label:c.label})}
              className="relative h-[152px] rounded-[20px] bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] p-3 text-left flex flex-col active:scale-95 transition overflow-hidden"
            >
              <div className="h-[78px] rounded-2xl bg-[#f8fbff] flex items-center justify-center overflow-hidden shrink-0">
                <img src={c.img} className="w-[92%] h-[92%] object-contain" />
              </div>
              <p className="mt-3 pr-5 text-[12px] leading-[14px] font-black text-black line-clamp-3 min-w-0 break-normal hyphens-none">{c.label}</p>
              <span className="absolute bottom-3 right-2.5 w-4 h-7 flex items-center justify-center bg-transparent text-black">
                <ChevronRight size={16}/>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
