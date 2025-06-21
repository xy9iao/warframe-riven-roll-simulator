import json
import os

# Set path to your JSON files
DATA_DIR = './data/json'

# List of input files
FILES = ['Primary.json', 'Secondary.json', 'Melee.json']

# Output file
OUTPUT_FILE = 'weapons.json'

# Collect extracted weapons here
weapons = []

# Read each JSON file
for file_name in FILES:
    file_path = os.path.join(DATA_DIR, file_name)

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

            for item in data:
                if 'rivenDisposition' in item and item['rivenDisposition'] is not None:
                    weapons.append({
                        'name': item.get('name'),
                        'type': item.get('type'),
                        'disposition': item.get('rivenDisposition')
                    })

    except FileNotFoundError:
        print(f"File not found: {file_path}")
    except json.JSONDecodeError:
        print(f"JSON error in: {file_path}")

# Sort weapons by name
weapons.sort(key=lambda x: x['name'])

# Write to output file
with open(OUTPUT_FILE, 'w', encoding='utf-8') as f_out:
    json.dump(weapons, f_out, indent=2, ensure_ascii=False)

print(f"Extracted {len(weapons)} weapons into {OUTPUT_FILE}")
