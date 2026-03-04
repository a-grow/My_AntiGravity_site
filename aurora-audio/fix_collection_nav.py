import os
import re

dir_path = "/Users/andysimac/Desktop/Desktop/Work/Web Design Journey/My_AntiGravity_site/aurora-audio"

for root, dirs, files in os.walk(dir_path):
    for f in files:
        if f.endswith('.html') or f.endswith('.js') or f.endswith('.txt'):
            file_path = os.path.join(root, f)
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            new_content = content
            
            # 1. Standard HTML tags
            new_content = re.sub(r'<a[^>]*href=\"[^\"]*?[Cc]ollection[^\"]*?\"[^>]*>Collection</a>', '', new_content)
            
            # 2. Next.js inline HTML (escaped quotes)
            new_content = re.sub(r'<a class=\\\"transition hover:text-cyan-200\\\" href=\\\"/aurora-audio/collection/\\\">Collection</a>', '', new_content)
            new_content = re.sub(r'<a class=\\\"transition hover:text-cyan-200\\\" href=\\\"/collection\\\">Collection</a>', '', new_content)
            
            # 3. Next.js JSON array payload elements
            # Look for exact object in tree
            new_content = re.sub(r'\[\\"\\\$\\",\\"[a-zA-Z0-9$]+\\",(?:null|\\"[0-9]+\\"),\{\\"className\\":\\"transition hover:text-cyan-200\\",\\"href\\":\\"/aurora-audio/collection/\\",\\"children\\":\\"Collection\\"\}\],?', '', new_content)
            new_content = re.sub(r'\[\\"\\\$\\",\\"[a-zA-Z0-9$]+\\",(?:null|\\"[0-9]+\\"),\{\\"className\\":\\"transition hover:text-cyan-200\\",\\"href\\":\\"/collection\\",\\"children\\":\\"Collection\\"\}\],?', '', new_content)
            
            # 4. Next.js text array payload elements (e.g. .txt files and some script chunks)
            new_content = re.sub(r'\["\$","[a-zA-Z0-9$]+",(?:null|"[0-9]+"),\{"className":"transition hover:text-cyan-200","href":"/aurora-audio/collection/","children":"Collection"\}\],?', '', new_content)
            new_content = re.sub(r'\["\$","[a-zA-Z0-9$]+",(?:null|"[0-9]+"),\{"className":"transition hover:text-cyan-200","href":"/collection","children":"Collection"\}\],?', '', new_content)
            
            # 5. JS module chunks minified format
            new_content = re.sub(r'\{className:"transition hover:text-cyan-200",href:"/aurora-audio/collection/",children:"Collection"\},?', '', new_content)
            new_content = re.sub(r'\{className:"transition hover:text-cyan-200",href:"/collection",children:"Collection"\},?', '', new_content)

            # Let's clean up any lingering array syntax errors caused by exact match removals
            new_content = new_content.replace('[,', '[')
            new_content = new_content.replace(',]', ']')
            new_content = new_content.replace(',,', ',')
            
            if new_content != content:
                print(f"Modified {file_path}")
                with open(file_path, 'w', encoding='utf-8') as f_out:
                    f_out.write(new_content)

print("Replacement complete.")
