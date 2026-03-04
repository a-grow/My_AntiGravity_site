import os
import re

dir_path = "/Users/andysimac/Desktop/Desktop/Work/Web Design Journey/My_AntiGravity_site/aurora-audio"

# Patterns to remove (both encoded and unencoded)
patterns = [
    # Static HTML
    r'<a[^>]+href="[^"]*[/]collection[/]?"[^>]*>Collection</a>',
    r'<a[^>]+href=\\"[^"]*[/]collection[/]?\\"[^>]*>Collection</a>',
    # React Payload elements
    r'\[(?:\\|\")*?\$(?:\\|\")*?,(?:\\|\")*?\$[a-zA-Z0-9]+(?:\\|\")*?,(?:null|"(?:\\|\")*?[0-9]+(?:\\|\")*?"),\{(?:\\|\")*?className(?:\\|\")*?:(?:\\|\")*?transition hover:text-cyan-200(?:\\|\")*?,(?:\\|\")*?href(?:\\|\")*?:(?:\\|\")*?(?:\/aurora-audio)?\/collection\/?(?:\\|\")*?,(?:\\|\")*?children(?:\\|\")*?:(?:\\|\")*?Collection(?:\\|\")*?\}\],?',
    r'\{(?:\\|\")*?className(?:\\|\")*?:(?:\\|\")*?transition hover:text-cyan-200(?:\\|\")*?,(?:\\|\")*?href(?:\\|\")*?:(?:\\|\")*?(?:\/aurora-audio)?\/collection\/?(?:\\|\")*?,(?:\\|\")*?children(?:\\|\")*?:(?:\\|\")*?Collection(?:\\|\")*?\},?'
]

for root, dirs, files in os.walk(dir_path):
    for f in files:
        if f.endswith('.html') or f.endswith('.js') or f.endswith('.txt'):
            file_path = os.path.join(root, f)
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            new_content = content
            for p in patterns:
                new_content = re.sub(p, '', new_content)
            
            # Clean up trailing array commas
            new_content = new_content.replace('[,', '[')
            new_content = new_content.replace(',]', ']')
            new_content = new_content.replace(',,', ',')
            
            if new_content != content:
                print(f"Modified {file_path}")
                with open(file_path, 'w', encoding='utf-8') as f_out:
                    f_out.write(new_content)

print("Double cleanup complete.")
