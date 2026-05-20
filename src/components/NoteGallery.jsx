import { useState } from 'react';

const NOTES = [
  {
    id:1, from:'Ngọc Hân', class:'Lớp 9A2', school:'THPT Nguyễn Trãi, HN',
    to:'Minh Khôi', date:'20/05/2024',
    content:'Khôi ơi, mình không biết bắt đầu từ đâu. Hồi lớp 7 bạn hay ngồi ở bàn trên mình, mỗi lần quay xuống cười là mình lại đứng tim. Ba năm rồi mà mình chưa bao giờ dám nói. Hôm nay là ngày cuối rồi, nên mình phải nói: mình thích bạn. Dù bạn có đáp lại hay không, cảm ơn bạn đã là phần đẹp nhất của những năm lớp 9 của mình 💕',
    emoji:'🌸', color:'from-pink-50 to-rose-50', accent:'#CC0055', stickers:['💕','🌸','✨'], type:'crush',
  },
  {
    id:2, from:'Tuấn Anh', class:'Lớp 9B1', school:'THCS Lê Lợi, TP.HCM',
    to:'Cả lớp 9B1', date:'19/05/2024',
    content:'Tụi mày ơi, ba năm bên nhau có quá trời thứ để nhớ. Từ những buổi ra chơi chạy ra căn tin giành bánh mì, đến những hôm trốn tiết ngủ gật trong lớp học thêm. Tao không giỏi nói lời từ biệt, nhưng tao muốn tụi mày biết: được học cùng tụi mày là điều may mắn nhất của tao ở cấp 2. Love tụi mày nhiều lắm! 🏆',
    emoji:'⚽', color:'from-blue-50 to-sky-50', accent:'#1D4ED8', stickers:['🏆','😂','💙'], type:'class',
  },
  {
    id:3, from:'Phương Linh', class:'Lớp 9A3', school:'THCS Trần Phú, HN',
    to:'Bạn thân Hà Anh', date:'21/05/2024',
    content:'Hà Anh ơi, cảm ơn bạn đã là người bạn thân nhất của mình trong suốt 3 năm qua. Cảm ơn vì đã nghe mình tâm sự về crush mỗi đêm, đã giúp mình viết tin nhắn gửi bạn ấy, đã ở bên khi mình khóc vì bị "phũ" 😂 Bạn là người bạn thân tuyệt vời nhất đời mình! Lên cấp 3 nhớ giữ liên lạc nha! 🌸',
    emoji:'💜', color:'from-purple-50 to-pink-50', accent:'#7C3AED', stickers:['💜','🤝','🌈'], type:'friend',
  },
  {
    id:4, from:'Đức Thịnh', class:'Lớp 9C', school:'THCS Chu Văn An, ĐN',
    to:'Cô Lan Hương',  date:'18/05/2024',
    content:'Kính gửi Cô! Con biết con hay bị cô nhắc nhở vì hay nói chuyện trong giờ, nhưng con thực sự rất biết ơn cô. Cô không chỉ dạy Văn cho con, cô còn dạy con cách yêu tiếng Việt, yêu những trang sách. Bài văn đầu tiên con được điểm 9 là nhờ cô chỉ bảo. Con sẽ nhớ mãi những giờ học của cô! 🌺',
    emoji:'📚', color:'from-green-50 to-teal-50', accent:'#065F46', stickers:['📚','🌺','🎓'], type:'teacher',
  },
  {
    id:5, from:'Bảo Châu', class:'Lớp 9A1', school:'THCS Nguyễn Du, HCM',
    to:'Người ấy (bạn biết mình nói ai rồi đó)',  date:'22/05/2024',
    content:'Mình không dám ghi tên bạn vì sợ đỏ mặt khi bạn đọc. Nhưng nếu bạn đang đọc cái này, thì bạn biết rồi đó. Mình thích cách bạn cười, thích giọng bạn đọc bài, thích lúc bạn nghiêng đầu suy nghĩ. Mình đã thích bạn từ rất lâu rồi mà không bao giờ dám nói. Hôm nay là ngày cuối học cấp 2 rồi... Nếu bạn cũng có một chút gì đó, hãy nhắn tin cho mình nhé 💕',
    emoji:'💌', color:'from-rose-50 to-pink-50', accent:'#BE185D', stickers:['💌','🦋','💗'], type:'crush',
  },
  {
    id:6, from:'Nhóm Tam Musketeers', class:'Lớp 9A2', school:'THCS Lý Thường Kiệt',
    to:'Nhau',  date:'20/05/2024',
    content:'Ba đứa mình — An, Bình, Chi — đã cùng nhau qua bao nhiêu chuyện từ lớp 7 đến giờ. Nhớ không, hồi lớp 7 tụi mình bị cô chủ nhiệm phạt đứng vì cười quá nhiều trong giờ họp lớp? Hay hồi lớp 8 ba đứa cùng trốn học đi ăn kem rồi bị ba mẹ biết? Lên cấp 3 mỗi đứa một trường, nhưng nhóm chat này không bao giờ tắt! Mãi yêu nhau nha! 🌈',
    emoji:'🌈', color:'from-yellow-50 to-orange-50', accent:'#B45309', stickers:['🌈','🍦','🤗'], type:'friend',
  },
];

const FILTERS = ['Tất Cả','💕 Tình Cảm','👫 Bạn Thân','🏫 Cả Lớp','👩‍🏫 Thầy Cô'];

export default function NoteGallery() {
  const [active, setActive] = useState('Tất Cả');
  const [expanded, setExpanded] = useState(null);
  const [liked, setLiked] = useState({});

  const filtered = active === 'Tất Cả' ? NOTES
    : active === '💕 Tình Cảm' ? NOTES.filter(n => n.type === 'crush')
    : active === '👫 Bạn Thân' ? NOTES.filter(n => n.type === 'friend')
    : active === '🏫 Cả Lớp'  ? NOTES.filter(n => n.type === 'class')
    : NOTES.filter(n => n.type === 'teacher');

  return (
    <div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'8px', marginBottom:'36px' }}>
        {FILTERS.map(f => (
          <button key={f} onClick={() => setActive(f)}
            style={{
              padding:'8px 18px', borderRadius:'2px', border:`2px solid ${active===f?'#FF2D77':'rgba(255,45,119,.3)'}`,
              background: active===f ? '#FF2D77' : 'transparent',
              color: active===f ? 'white' : '#CC0055',
              fontFamily:"'Crimson Pro',Georgia,serif", fontSize:'14px', letterSpacing:'0.05em',
              cursor:'pointer', transition:'all .2s',
            }}>
            {f}
          </button>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))', gap:'32px' }}>
        {filtered.map((note, i) => (
          <article key={note.id} style={{
            background:`linear-gradient(135deg,#FFFAFC,#FFF0F7)`,
            border:'1px solid rgba(255,45,119,.18)', borderRadius:'4px',
            boxShadow:'0 4px 20px rgba(255,45,119,.10)',
            transform:`rotate(${i%3===0?-1:i%3===1?.5:-.5}deg)`,
            transition:'all .3s', cursor:'default', position:'relative',
          }}>
            <div style={{ position:'absolute', top:'-10px', left:'35px', width:'54px', height:'19px', background:'rgba(255,179,209,.5)', borderRadius:'2px', transform:'rotate(-2deg)' }}/>
            <div style={{ padding:'24px' }}>
              <div style={{ display:'flex', alignItems:'start', justifyContent:'space-between', marginBottom:'14px' }}>
                <div>
                  <p style={{ fontFamily:"'Dancing Script',cursive", fontSize:'22px', color:note.accent, fontWeight:600, lineHeight:1.2 }}>{note.from}</p>
                  <p style={{ fontFamily:"'Crimson Pro',serif", fontSize:'11px', letterSpacing:'0.1em', textTransform:'uppercase', color:'#FF2D77', opacity:.65 }}>{note.class} • {note.school}</p>
                </div>
                <div style={{ width:'38px', height:'38px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', background:'radial-gradient(circle at 40% 35%,#FF6FAE,#CC0055)', boxShadow:'0 3px 8px rgba(204,0,85,.3)', flexShrink:0 }}>
                  {note.emoji}
                </div>
              </div>

              <p style={{ fontFamily:"'Crimson Pro',serif", fontSize:'13px', color:'#3D1530', marginBottom:'10px', fontStyle:'italic', opacity:.7 }}>
                Gửi: <strong>{note.to}</strong>
              </p>

              <div style={{ backgroundImage:'repeating-linear-gradient(transparent,transparent 27px,rgba(255,45,119,.1) 28px)', backgroundSize:'100% 28px' }}>
                <p style={{
                  fontFamily:"'Lora',Georgia,serif", fontSize:'14px', lineHeight:'28px',
                  color:'#3D1530', fontStyle:'italic',
                  display:'-webkit-box', WebkitLineClamp:expanded===note.id?'unset':4,
                  WebkitBoxOrient:'vertical', overflow:expanded===note.id?'visible':'hidden',
                }}>
                  {note.content}
                </p>
              </div>

              {note.content.length > 180 && (
                <button onClick={() => setExpanded(expanded===note.id?null:note.id)}
                  style={{ fontFamily:"'Crimson Pro',serif", fontSize:'12px', color:note.accent, marginTop:'6px', background:'none', border:'none', cursor:'pointer', padding:0 }}>
                  {expanded===note.id ? '← Thu gọn' : 'Đọc thêm →'}
                </button>
              )}

              <div style={{ display:'flex', gap:'6px', marginTop:'12px', fontSize:'18px' }}>
                {note.stickers.map((s,si) => <span key={si}>{s}</span>)}
              </div>

              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'12px', paddingTop:'10px', borderTop:'1px solid rgba(255,45,119,.2)' }}>
                <p style={{ fontFamily:"'Crimson Pro',serif", fontSize:'11px', color:'#FF2D77', opacity:.6 }}>📅 {note.date}</p>
                <button onClick={() => setLiked(p=>({...p,[note.id]:!p[note.id]}))}
                  style={{ background:'none', border:'none', cursor:'pointer', fontSize:'18px', transition:'transform .15s', transform:liked[note.id]?'scale(1.3)':'scale(1)' }}>
                  {liked[note.id] ? '💕' : '🤍'}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div style={{ textAlign:'center', marginTop:'40px' }}>
        <a href="/viet-luu-but" style={{
          display:'inline-flex', alignItems:'center', gap:'8px',
          padding:'14px 40px',
          background:'linear-gradient(135deg,#CC0055,#FF2D77)',
          color:'white', fontFamily:"'Crimson Pro',serif", letterSpacing:'0.1em', fontSize:'15px',
          borderRadius:'2px', textDecoration:'none',
          boxShadow:'0 4px 16px rgba(255,45,119,.35)',
        }}>
          ✍️ Viết Lưu Bút Của Bạn
        </a>
      </div>
    </div>
  );
}
