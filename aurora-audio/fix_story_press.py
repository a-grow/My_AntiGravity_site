import os
import re

dir_path = "/Users/andysimac/Desktop/Desktop/Work/Web Design Journey/My_AntiGravity_site/aurora-audio"

files_modified = 0

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
            
            # 1. Hide the Explore Collection button in the hero
            new_content = re.sub(
                r'(<a[^>]*class="[^"]*aurora-glow rounded-full bg-white/20[^"]*"[^>]*>\s*Explore Collection\s*</a>)',
                r'<span class="hidden">\1</span>',
                new_content
            )
            # Handle JS chunk variations
            new_content = re.sub(
                r'({(?:\\*")?className(?:\\*")?:\s*(?:\\*")?aurora-glow rounded-full bg-white/20[^"]*(?:\\*")?,[^{}]*(?:\\*")?children(?:\\*")?:\s*(?:\\*")?Explore Collection(?:\\*")?})',
                r'{"className":"hidden","children":\1}',
                new_content
            )
            # or just simple replace of class string in React payload:
            new_content = new_content.replace(
                'className:"aurora-glow rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/30",children:"Explore Collection"',
                'className:"hidden aurora-glow rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/30",children:"Explore Collection"'
            )
            new_content = new_content.replace(
                'className:\\"aurora-glow rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/30\\",children:\\"Explore Collection\\"',
                'className:\\"hidden aurora-glow rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/30\\",children:\\"Explore Collection\\"'
            )
            
            # Since React JSX transpiles to function calls, let's be more robust:
            new_content = new_content.replace(
                'aurora-glow rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/30',
                'hidden aurora-glow rounded-full bg-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/30'
            )
            
            # 2. Hide "Our mission ->" from Story section
            new_content = new_content.replace(
                'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200',
                'hidden inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200'
            )
            
            # 3. Update 'href="/contact"' to 'href="https://andrewgrow.com/aurora-audio/contact/"' ONLY for the 'Contact us' button
            # Button class: rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white
            
            new_content = new_content.replace(
                'href="/contact" class="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white">Contact us',
                'href="https://andrewgrow.com/aurora-audio/contact/" class="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white">Contact us'
            )
            
            # Also in JS payload:
            new_content = new_content.replace(
                'href:"/contact",className:"rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white",children:"Contact us"',
                'href:"https://andrewgrow.com/aurora-audio/contact/",className:"rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white",children:"Contact us"'
            )
            new_content = new_content.replace(
                'href:\\"/contact\\",className:\\"rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white\\",children:\\"Contact us\\"',
                'href:\\"https://andrewgrow.com/aurora-audio/contact/\\",className:\\"rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 transition hover:border-white/40 hover:text-white\\",children:\\"Contact us\\"'
            )
            
            
            if new_content != content:
                print(f"Modified {file_path}")
                files_modified += 1
                with open(file_path, 'w', encoding='utf-8') as f_out:
                    f_out.write(new_content)

print(f"Update complete. {files_modified} files modified.")
