import requests
from bs4 import BeautifulSoup
import re

# r = requests.get("https://transcripts.foreverdreaming.org/viewtopic.php?f=953&t=36758&sid=e688625cc6f46858a91098d39640303c")
# print(r.text)

# open txt file containing all URLs for movies to strip

with open("websites.txt", "r") as f:
    with open("test.txt", "w") as out:
        for line in f:
            if line.find("https") != -1:
                r = requests.get(line)
                doc = BeautifulSoup(r.text, "html.parser")

                for tag in doc.findAll('p'):
                    if tag.name != 'p':
                        tag = tag.replaceWith(tag.renderContents())
                    out.write(tag.renderContents().decode('UTF-8') + "\n")

                print("Done stripping")
            else:
                print("Now stripping " + line)
