import { useState } from 'react';

const TEMPLATES = [
  { id:'crush',   label:'💕 Cho Người Thích', placeholder:'Bạn ơi...\n\nMình không biết bắt đầu từ đâu, chỉ biết rằng mỗi lần nhìn thấy bạn là tim mình lại đập nhanh hơn một chút...' },
  { id:'friend',  label:'👫 Bạn Thân',         placeholder:'Bạn thân ơi!\n\nCảm ơn bạn đã luôn ở bên mình, dù mình có điên rồ đến đâu...' },
  { id:'class',   label:'🏫 Cả Lớp',           placeholder:'Cả lớp ơi!\n\nBa năm bên nhau, có quá nhiều thứ để nhớ...' },
  { id:'teacher', label:'👩‍🏫 Thầy/Cô',         placeholder:'Kính gửi Thầy/Cô!\n\nCon biết ơn thầy/cô rất nhiều vì...' },
];

const THEMES = [
  { id:'pink',     label:'🌸 Hồng Sakura',   bg:'#FFF0F5', border:'#FF94BB', accent:'#CC0055' },
  { id:'lavender', label:'💜 Tím Lavender',   bg:'#F5F0FF', border:'#C49EFF', accent:'#7C3AED' },
  { id:'blue',     label:'💙 Xanh Biển',      bg:'#EFF6FF', border:'#93C5FD', accent:'#1D4ED8' },
  { id:'mint',     label:'💚 Xanh Bạc Hà',   bg:'#F0FDF4', border:'#86EFAC', accent:'#15803D' },
  { id:'peach',    label:'🍑 Cam Đào',        bg:'#FFF7ED', border:'#FED7AA', accent:'#C2410C' },
  { id:'rose',     label:'🌹 Đỏ Hồng',       bg:'#FFF1F2', border:'#FECDD3', accent:'#BE123C' },
];

const STICKERS = ['💕','💌','🌸','🌹','💗','💝','✨','🦋','🌈','⭐','🎀','📚','💏','🌙','☀️','🍀','🎵','📸','💫','🥹'];

const FONTS = [
  { id:'dancing',  label:'Chữ Tay',    style:"'Dancing Script',cursive" },
  { id:'lora',     label:'Thanh Lịch', style:"'Lora',Georgia,serif" },
  { id:'playfair', label:'Cổ Điển',    style:"'Playfair Display',Georgia,serif" },
  { id:'crimson',  label:'Văn Học',    style:"'Crimson Pro',Georgia,serif" },
];

export default function WriteNote() {
  const [step, setStep]       = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [liked, setLiked]     = useState(false);
  const [form, setForm]       = useState({
    from:'', fromClass:'', fromSchool:'', to:'',
    content:'', template:'crush',
    theme:'pink', font:'dancing', stickers:[],
    date: new Date().toLocaleDateString('vi-VN'),
  });

  const up  = (k,v) => setForm(p=>({...p,[k]:v}));
  const th  = THEMES.find(t=>t.id===form.theme)||THEMES[0];
  const fn  = FONTS.find(f=>f.id===form.font)||FONTS[0];

  if (submitted) return (
    <div style={{ maxWidth:'600px', margin:'0 auto', textAlign:'center', padding:'48px 24px' }}>
      <div style={{ width:'80px', height:'80px', borderRadius:'50%', margin:'0 auto 24px', background:'radial-gradient(circle at 40% 35%,#FF6FAE,#CC0055)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'36px', boxShadow:'0 8px 24px rgba(204,0,85,.3)' }}>💌</div>
      <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'36px', color:'#3D1530', marginBottom:'12px' }}>Đã Gửi Rồi! 💕</h2>
      <p style={{ fontFamily:"'Lora',serif", fontSize:'17px', lineHeight:1.8, color:'#CC0055', marginBottom:'32px' }}>
        Lưu bút của bạn đã được lưu thành công! Hy vọng <strong>{form.to}</strong> sẽ rất vui khi đọc được điều này từ bạn 🌸
      </p>

      <div style={{ background:th.bg, border:`2px solid ${th.border}60`, borderRadius:'4px', padding:'28px', textAlign:'left', marginBottom:'28px', boxShadow:'0 8px 24px rgba(255,45,119,.12)', position:'relative', transform:'rotate(-.5deg)' }}>
        <div style={{ position:'absolute', top:'-10px', left:'35px', width:'54px', height:'19px', background:'rgba(255,179,209,.5)', borderRadius:'2px', transform:'rotate(-2deg)' }}/>
        <p style={{ fontFamily:fn.style, fontSize:'22px', color:th.accent, marginBottom:'6px' }}>{form.from}</p>
        <p style={{ fontFamily:"'Crimson Pro',serif", fontSize:'11px', letterSpacing:'0.1em', textTransform:'uppercase', color:th.accent, opacity:.65, marginBottom:'14px' }}>{form.fromClass} • {form.fromSchool}</p>
        <p style={{ fontFamily:"'Crimson Pro',serif", fontSize:'13px', color:'#3D1530', fontStyle:'italic', opacity:.7, marginBottom:'10px' }}>Gửi: <strong>{form.to}</strong></p>
        <p style={{ fontFamily:fn.style, fontSize:'15px', lineHeight:1.8, color:'#3D1530', fontStyle:'italic', whiteSpace:'pre-wrap' }}>{form.content.slice(0,200)}{form.content.length>200?'...':''}</p>
        {form.stickers.length>0 && <div style={{ marginTop:'10px', fontSize:'20px' }}>{form.stickers.join(' ')}</div>}
      </div>

      <div style={{ display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap' }}>
        <button onClick={()=>{setSubmitted(false);setStep(1);up('content','');up('to','');}}
          style={{ padding:'13px 28px', background:'linear-gradient(135deg,#CC0055,#FF2D77)', color:'white', fontFamily:"'Crimson Pro',serif", letterSpacing:'0.08em', fontSize:'15px', border:'none', cursor:'pointer', borderRadius:'2px', boxShadow:'0 4px 16px rgba(255,45,119,.35)' }}>
          ✍️ Viết Trang Khác
        </button>
        <button style={{ padding:'13px 28px', background:'transparent', color:'#CC0055', fontFamily:"'Crimson Pro',serif", letterSpacing:'0.08em', fontSize:'15px', border:'2px solid rgba(255,45,119,.4)', cursor:'pointer', borderRadius:'2px' }}>
          🔗 Sao Chép Link
        </button>
      </div>
    </div>
  );

  const inp = { width:'100%', padding:'10px 14px', border:'1.5px solid rgba(255,45,119,.35)', borderRadius:'2px', background:'rgba(255,248,251,.6)', outline:'none', fontFamily:"'Lora',serif", fontSize:'15px', color:'#3D1530', boxSizing:'border-box' };
  const btnP = (dis) => ({ flex:1, padding:'13px 24px', background:dis?'#E8C0CC':'linear-gradient(135deg,#CC0055,#FF2D77)', color:dis?'#B08090':'white', fontFamily:"'Crimson Pro',serif", letterSpacing:'0.08em', fontSize:'15px', border:'none', cursor:dis?'not-allowed':'pointer', borderRadius:'2px', boxShadow:dis?'none':'0 4px 16px rgba(255,45,119,.3)', transition:'all .2s' });
  const btnS = { padding:'13px 24px', background:'transparent', color:'#CC0055', fontFamily:"'Crimson Pro',serif", letterSpacing:'0.08em', fontSize:'15px', border:'2px solid rgba(255,45,119,.35)', cursor:'pointer', borderRadius:'2px' };

  const cardStyle = { background:'linear-gradient(135deg,#FFFAFC,#FFF0F7)', border:'1px solid rgba(255,45,119,.2)', borderRadius:'4px', padding:'32px', boxShadow:'0 4px 20px rgba(255,45,119,.10)', position:'relative' };

  return (
    <div style={{ maxWidth:'1000px', margin:'0 auto', padding:'0 16px' }}>
      {/* Steps */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', marginBottom:'32px' }}>
        {[1,2,3].map(s=>(
          <div key={s} style={{ display:'flex', alignItems:'center', gap:'8px' }}>
            <div style={{ width:'32px', height:'32px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', background:step>=s?'linear-gradient(135deg,#CC0055,#FF2D77)':'#FFE0EC', color:step>=s?'white':'#CC0055', fontFamily:"'Crimson Pro',serif", fontSize:'14px', fontWeight:600, transition:'all .3s' }}>{s}</div>
            {s<3 && <div style={{ width:'56px', height:'2px', background:step>s?'#FF2D77':'#FFB3D1', borderRadius:'1px', transition:'background .3s' }}/>}
          </div>
        ))}
      </div>
      <p style={{ textAlign:'center', fontFamily:"'Crimson Pro',serif", color:'#FF2D77', letterSpacing:'0.12em', textTransform:'uppercase', fontSize:'12px', opacity:.75, marginBottom:'28px' }}>
        Bước {step}/3 — {step===1?'Thông Tin':step===2?'Nội Dung':'Phong Cách & Gửi'}
      </p>

      <form onSubmit={e=>{e.preventDefault();setSubmitted(true);}}>
        <div style={{ display:'grid', gridTemplateColumns:step===3?'1fr 1fr':'1fr', gap:'28px', alignItems:'start' }}>

          {/* STEP 1 */}
          {step===1 && (
            <div style={cardStyle}>
              <div style={{ position:'absolute', top:'-10px', left:'40px', width:'54px', height:'19px', background:'rgba(255,179,209,.5)', borderRadius:'2px', transform:'rotate(-2deg)' }}/>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'24px', color:'#3D1530', marginBottom:'22px' }}>Bạn Là Ai? 💕</h3>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px', marginBottom:'14px' }}>
                <div>
                  <label style={{ fontFamily:"'Crimson Pro',serif", fontSize:'12px', color:'#CC0055', letterSpacing:'0.08em', textTransform:'uppercase', display:'block', marginBottom:'5px' }}>Tên bạn *</label>
                  <input value={form.from} onChange={e=>up('from',e.target.value)} placeholder="Nguyễn Văn A" required style={inp}/>
                </div>
                <div>
                  <label style={{ fontFamily:"'Crimson Pro',serif", fontSize:'12px', color:'#CC0055', letterSpacing:'0.08em', textTransform:'uppercase', display:'block', marginBottom:'5px' }}>Lớp</label>
                  <input value={form.fromClass} onChange={e=>up('fromClass',e.target.value)} placeholder="9A1" style={inp}/>
                </div>
              </div>
              <div style={{ marginBottom:'14px' }}>
                <label style={{ fontFamily:"'Crimson Pro',serif", fontSize:'12px', color:'#CC0055', letterSpacing:'0.08em', textTransform:'uppercase', display:'block', marginBottom:'5px' }}>Trường</label>
                <input value={form.fromSchool} onChange={e=>up('fromSchool',e.target.value)} placeholder="THCS Chu Văn An" style={inp}/>
              </div>
              <div style={{ marginBottom:'22px' }}>
                <label style={{ fontFamily:"'Crimson Pro',serif", fontSize:'12px', color:'#CC0055', letterSpacing:'0.08em', textTransform:'uppercase', display:'block', marginBottom:'5px' }}>Gửi đến *</label>
                <input value={form.to} onChange={e=>up('to',e.target.value)} placeholder="Tên người ấy, bạn thân, cả lớp..." required style={inp}/>
              </div>
              <p style={{ fontFamily:"'Playfair Display',serif", fontSize:'18px', color:'#3D1530', marginBottom:'12px' }}>Loại Lưu Bút 📌</p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginBottom:'28px' }}>
                {TEMPLATES.map(t=>(
                  <button key={t.id} type="button"
                    onClick={()=>{up('template',t.id);up('content',t.placeholder);}}
                    style={{ padding:'11px', border:`2px solid ${form.template===t.id?'#FF2D77':'rgba(255,45,119,.3)'}`, background:form.template===t.id?'rgba(255,45,119,.08)':'transparent', fontFamily:"'Crimson Pro',serif", fontSize:'14px', color:form.template===t.id?'#CC0055':'#3D1530', cursor:'pointer', borderRadius:'2px', textAlign:'center', transition:'all .2s' }}>
                    {t.label}
                  </button>
                ))}
              </div>
              <button type="button" onClick={()=>setStep(2)} disabled={!form.from||!form.to} style={btnP(!form.from||!form.to)}>
                Tiếp Theo → Nội Dung
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step===2 && (
            <div style={cardStyle}>
              <div style={{ position:'absolute', top:'-10px', right:'40px', width:'54px', height:'19px', background:'rgba(255,179,209,.5)', borderRadius:'2px', transform:'rotate(2deg)' }}/>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'18px' }}>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'24px', color:'#3D1530' }}>Viết Từ Trái Tim ✍️</h3>
                <p style={{ fontFamily:"'Crimson Pro',serif", fontSize:'13px', color:'#CC0055', opacity:.7 }}>Gửi: <strong>{form.to}</strong></p>
              </div>
              <div style={{ backgroundImage:'repeating-linear-gradient(transparent,transparent 27px,rgba(255,45,119,.1) 28px)', backgroundSize:'100% 28px', marginBottom:'14px' }}>
                <textarea value={form.content} onChange={e=>up('content',e.target.value)} rows={13} required
                  placeholder="Viết lưu bút của bạn tại đây..."
                  style={{ width:'100%', background:'transparent', border:'none', outline:'none', resize:'none', fontFamily:fn.style, fontSize:'15px', lineHeight:'28px', color:'#3D1530', padding:'4px 8px', fontStyle:'italic', boxSizing:'border-box' }}/>
              </div>
              <p style={{ fontFamily:"'Crimson Pro',serif", fontSize:'12px', color:'#FF2D77', opacity:.55, textAlign:'right', marginBottom:'20px' }}>{form.content.length} ký tự</p>
              <p style={{ fontFamily:"'Playfair Display',serif", fontSize:'17px', color:'#3D1530', marginBottom:'10px' }}>Font Chữ 🖋️</p>
              <div style={{ display:'flex', gap:'8px', flexWrap:'wrap', marginBottom:'28px' }}>
                {FONTS.map(f=>(
                  <button key={f.id} type="button" onClick={()=>up('font',f.id)}
                    style={{ padding:'10px 16px', border:`2px solid ${form.font===f.id?'#FF2D77':'rgba(255,45,119,.3)'}`, background:form.font===f.id?'rgba(255,45,119,.08)':'transparent', fontFamily:f.style, fontSize:'15px', color:form.font===f.id?'#CC0055':'#3D1530', cursor:'pointer', borderRadius:'2px', transition:'all .2s' }}>
                    {f.label}
                  </button>
                ))}
              </div>
              <div style={{ display:'flex', gap:'10px' }}>
                <button type="button" onClick={()=>setStep(1)} style={btnS}>← Quay Lại</button>
                <button type="button" onClick={()=>setStep(3)} disabled={!form.content} style={btnP(!form.content)}>Tiếp Theo → Phong Cách</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step===3 && (
            <>
              <div style={cardStyle}>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'22px', color:'#3D1530', marginBottom:'18px' }}>Phong Cách 🎨</h3>
                <p style={{ fontFamily:"'Crimson Pro',serif", fontSize:'12px', color:'#CC0055', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'8px' }}>Màu Sắc</p>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'8px', marginBottom:'22px' }}>
                  {THEMES.map(t=>(
                    <button key={t.id} type="button" onClick={()=>up('theme',t.id)}
                      style={{ padding:'10px 6px', border:`2px solid ${form.theme===t.id?t.accent:t.border+'60'}`, background:t.bg, cursor:'pointer', fontFamily:"'Crimson Pro',serif", fontSize:'12px', color:t.accent, borderRadius:'2px', transition:'all .2s', textAlign:'center' }}>
                      {t.label}
                    </button>
                  ))}
                </div>
                <p style={{ fontFamily:"'Crimson Pro',serif", fontSize:'12px', color:'#CC0055', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'8px' }}>Sticker (tối đa 5)</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'24px' }}>
                  {STICKERS.map(s=>(
                    <button key={s} type="button" onClick={()=>setForm(p=>({...p,stickers:p.stickers.includes(s)?p.stickers.filter(x=>x!==s):p.stickers.length<5?[...p.stickers,s]:p.stickers}))}
                      style={{ width:'38px', height:'38px', borderRadius:'4px', fontSize:'19px', border:`2px solid ${form.stickers.includes(s)?'#FF2D77':'rgba(255,45,119,.25)'}`, background:form.stickers.includes(s)?'rgba(255,45,119,.12)':'transparent', cursor:'pointer', transition:'all .15s', transform:form.stickers.includes(s)?'scale(1.15)':'scale(1)' }}>
                      {s}
                    </button>
                  ))}
                </div>
                <div style={{ display:'flex', gap:'10px', flexWrap:'wrap' }}>
                  <button type="button" onClick={()=>setStep(2)} style={btnS}>← Quay Lại</button>
                  <button type="submit" style={btnP(false)}>💌 Hoàn Thành & Gửi</button>
                </div>
              </div>

              {/* Live Preview */}
              <div>
                <p style={{ fontFamily:"'Crimson Pro',serif", fontSize:'12px', color:'#CC0055', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'14px', opacity:.75 }}>👀 Xem Trước</p>
                <div style={{ background:th.bg, border:`2px solid ${th.border}50`, borderRadius:'4px', padding:'26px', boxShadow:'0 8px 24px rgba(255,45,119,.12)', transform:'rotate(-.5deg)', position:'relative' }}>
                  <div style={{ position:'absolute', top:'-10px', left:'35px', width:'54px', height:'19px', background:'rgba(255,179,209,.5)', borderRadius:'2px', transform:'rotate(-2deg)' }}/>
                  <div style={{ display:'flex', alignItems:'start', justifyContent:'space-between', marginBottom:'12px' }}>
                    <div>
                      <p style={{ fontFamily:fn.style, fontSize:'22px', color:th.accent, fontWeight:600, lineHeight:1.2 }}>{form.from||'Tên bạn'}</p>
                      <p style={{ fontFamily:"'Crimson Pro',serif", fontSize:'11px', color:th.accent, letterSpacing:'0.1em', textTransform:'uppercase', opacity:.65 }}>{form.fromClass}{form.fromClass&&form.fromSchool?' • ':''}{form.fromSchool}</p>
                    </div>
                    <div style={{ width:'36px', height:'36px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', background:'radial-gradient(circle at 40% 35%,#FF6FAE,#CC0055)', flexShrink:0 }}>💌</div>
                  </div>
                  <p style={{ fontFamily:"'Crimson Pro',serif", fontSize:'13px', color:'#3D1530', fontStyle:'italic', opacity:.7, marginBottom:'10px' }}>Gửi: <strong>{form.to||'...'}</strong></p>
                  <div style={{ backgroundImage:'repeating-linear-gradient(transparent,transparent 27px,rgba(255,45,119,.1) 28px)', backgroundSize:'100% 28px' }}>
                    <p style={{ fontFamily:fn.style, fontSize:'14px', lineHeight:'28px', color:'#3D1530', fontStyle:'italic', whiteSpace:'pre-wrap', display:'-webkit-box', WebkitLineClamp:5, WebkitBoxOrient:'vertical', overflow:'hidden' }}>
                      {form.content||'Nội dung lưu bút hiện ra ở đây...'}
                    </p>
                  </div>
                  {form.stickers.length>0 && <div style={{ marginTop:'10px', fontSize:'20px' }}>{form.stickers.join(' ')}</div>}
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'12px', paddingTop:'10px', borderTop:`1px solid ${th.border}40` }}>
                    <p style={{ fontFamily:"'Crimson Pro',serif", fontSize:'11px', color:th.accent, opacity:.6 }}>📅 {form.date}</p>
                    <span style={{ fontSize:'16px' }}>💕</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
