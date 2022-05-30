from black import main
import requests
from bs4 import BeautifulSoup
import re

# r = requests.get("https://transcripts.foreverdreaming.org/viewtopic.php?f=953&t=36758&sid=e688625cc6f46858a91098d39640303c")
# print(r.text)


# open txt file containing all URLs for movies to strip
def main(self=None):
    with open("websites.txt", "r") as f:
        for line in f:
            record = []
            if line.find("https") != -1:
                r = requests.get(line)
                doc = BeautifulSoup(r.text, "html.parser")

                for tag in doc.findAll('p'):
                    if tag.name not in 'p':
                        tag = tag.replaceWith(tag.renderContents())
                    record.append(tag.renderContents().decode('UTF-8'))
                format_output(record)
                print("Done stripping")

            else:
                print("Now stripping " + line)


def format_output(record):
    # remove first entry and last 3 entries as they are not actual script
    record = record[1:-4]
    i = 0
    with open("test.txt", "w") as out:
        for line in record:
            for word in line.split():
                out.write(word.lower() + "\t")
                i += 1
                if i == 20:
                    out.write("\n")
                    i = 0


main()