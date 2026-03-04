import os
import re

dir_path = "/Users/andysimac/Desktop/Desktop/Work/Web Design Journey/My_AntiGravity_site/aurora-audio"

explore_collection_class = "aurora-glow rounded-full bg-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/25"
crafted_for_class = "relative z-10 grid w-full gap-8 rounded-[32px] border border-white/10 bg-[#05070b] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)] md:grid-cols-3"

explore_all_class_regex = r'(rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-\[0\.3em\] text-white/80 transition hover:border-white/40 hover:text-white)(.{1,70}?Explore all)'

long_desc_old = "Discover premium headphones engineered for luminous clarity."
long_desc_new = "Begin your aurora journey with premium headphones engineered for luminous clarity. Aurora Audio blends meticulous acoustic engineering with aurora-inspired visual identity. Each headphone is precision-tuned for accuracy, comfort, and the luminous detail professionals demand."

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
            
            # Hide Explore Collection button
            new_content = new_content.replace(explore_collection_class, "hidden " + explore_collection_class)
            
            # Hide Crafted For block
            new_content = new_content.replace(crafted_for_class, "hidden " + crafted_for_class)
            
            # Text replacements
            new_content = new_content.replace('Begin your aurora journey.', 'Ready to Listen with Studio-Level Fidelity')
            new_content = new_content.replace('Ready to listen', 'Ready to Listen')
            new_content = new_content.replace(long_desc_old, long_desc_new)
            
            # JSON escaped versions just in case
            long_desc_old_escaped = long_desc_old.replace('"', '\\"')
            long_desc_new_escaped = long_desc_new.replace('"', '\\"')
            if long_desc_old != long_desc_old_escaped:
                new_content = new_content.replace(long_desc_old_escaped, long_desc_new_escaped)
                
            # Hide Explore All button
            new_content = re.sub(explore_all_class_regex, r'hidden \1\2', new_content)
            
            if new_content != content:
                print(f"Modified {file_path}")
                files_modified += 1
                with open(file_path, 'w', encoding='utf-8') as f_out:
                    f_out.write(new_content)

print(f"Update complete. {files_modified} files modified.")
