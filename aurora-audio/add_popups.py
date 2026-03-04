import os
import re
import json

dir_path = "/Users/andysimac/Desktop/Desktop/Work/Web Design Journey/My_AntiGravity_site/aurora-audio"

# Replace the "View details" links with a popup trigger

files_modified = 0

popup_html = """
<div id="product-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 py-10 backdrop-blur">
  <div class="relative w-full max-w-3xl rounded-[32px] border border-white/10 bg-[#0b0f1b] p-8" style="opacity: 1; transform: none;">
    <button type="button" onclick="document.getElementById('product-modal').classList.add('hidden')" class="absolute right-6 top-6 text-xs uppercase tracking-[0.3em] text-slate-400 transition hover:text-white z-50">Close</button>
    <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="relative h-56 overflow-hidden rounded-3xl border border-white/10">
        <img id="modal-img" alt="Product" loading="lazy" decoding="async" class="object-cover" style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" src="">
      </div>
      <div class="space-y-4">
        <h3 id="modal-title" class="text-2xl font-semibold text-white"></h3>
        <p id="modal-desc" class="text-sm text-slate-200/80"></p>
        <div class="flex items-center justify-between pt-2">
          <span id="modal-price" class="text-lg font-semibold text-white"></span>
          <button type="button" onclick="document.getElementById('product-modal').classList.add('hidden')" class="rounded-full bg-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-white/25">Done</button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
function openModal(title, desc, price, imgSrc) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-desc').textContent = desc;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-img').src = imgSrc;
  document.getElementById('product-modal').classList.remove('hidden');
}
</script>
"""

for root, dirs, files in os.walk(dir_path):
    for f in files:
        if f.endswith('.html') or f.endswith('.js') or f.endswith('.txt'):
            file_path = os.path.join(root, f)
            try:
                with open(file_path, 'r', encoding='utf-8') as file:
                    content = file.read()
            except Exception:
                continue
                
            new_content = content
            
            if f == 'index.html':
               # Add the modal html before </body>
               if 'product-modal' not in new_content:
                   new_content = new_content.replace('</body>', popup_html + '</body>')

               # Replace links with onclick
               # Nebula
               new_content = re.sub(
                   r'<a[^>]*href="[^"]*aurora-nebula/?"[^>]*>View details</a>',
                   r'<button onclick="openModal(\'Aurora Nebula\', \'Open-back studio reference with crystalline soundstage.\', \'$699\', \'./assets/headsetN.png\')" class="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition group-hover:text-white">View details</button>',
                   new_content
               )
               
               # Borealis
               new_content = re.sub(
                   r'<a[^>]*href="[^"]*aurora-borealis/?"[^>]*>View details</a>',
                   r'<button onclick="openModal(\'Aurora Borealis\', \'Flagship wireless with adaptive spatial clarity.\', \'$499\', \'./assets/headsetB.png\')" class="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition group-hover:text-white">View details</button>',
                   new_content
               )
               
               # Pulse
               new_content = re.sub(
                   r'<a[^>]*href="[^"]*aurora-pulse/?"[^>]*>View details</a>',
                   r'<button onclick="openModal(\'Aurora Pulse\', \'Portable performance tuned for deep, velvety bass.\', \'$349\', \'./assets/headsetP.png\')" class="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition group-hover:text-white">View details</button>',
                   new_content
               )
               
            elif f.endswith('.js'):
                # Handle JS payloads that render the links
                new_content = new_content.replace(
                    '`/products/${e.slug}`',
                    '"" onClick={(ev)=>{ev.preventDefault(); if(window.openModal){ window.openModal(e.name, e.shortDescription, e.price, e.images[0] || e.image) } }}'
                )
                new_content = new_content.replace(
                    'href:`/products/${e.slug}`',
                    'href:"#",onClick:(ev)=>{ev.preventDefault(); if(window.openModal){ window.openModal(e.name, e.shortDescription, e.price, e.images?e.images[0]:"") } }'
                )
                
                # In chunk 3de224c97315f845.js (Homepage JS)
                new_content = new_content.replace(
                    '(0,t.jsx)(a.default,{href:`/products/${e.slug}`,className:"text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition group-hover:text-white",children:"View details"})',
                    '(0,t.jsx)("button",{onClick:(ev)=>{ev.preventDefault(); if(window.openModal){ window.openModal(e.name, e.shortDescription, e.price, (window.location.pathname.includes("/local")?"./assets/": "./assets/") + (e.slug==="aurora-nebula"?"headsetN.png":e.slug==="aurora-borealis"?"headsetB.png":"headsetP.png")) } }, className:"text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition group-hover:text-white",children:"View details"})'
                )
                # Escaped quotes
                new_content = new_content.replace(
                    '(0,t.jsx)(a.default,{href:`/products/${e.slug}`,className:\\"text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition group-hover:text-white\\",children:\\"View details\\"})',
                    '(0,t.jsx)(\\"button\\",{onClick:(ev)=>{ev.preventDefault(); if(window.openModal){ window.openModal(e.name, e.shortDescription, e.price, (e.slug===\\"aurora-nebula\\"&&\\"./assets/headsetN.png\\")||(e.slug===\\"aurora-borealis\\"&&\\"./assets/headsetB.png\\")||\\"./assets/headsetP.png\\") } }, className:\\"text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition group-hover:text-white\\",children:\\"View details\\"})'
                )


            if new_content != content:
                print(f"Modified {file_path}")
                files_modified += 1
                with open(file_path, 'w', encoding='utf-8') as f_out:
                    f_out.write(new_content)

print(f"Update complete. {files_modified} files modified.")
