import requests
import bs4

# r = requests.get("https://transcripts.foreverdreaming.org/viewtopic.php?f=953&t=36758&sid=e688625cc6f46858a91098d39640303c")
# print(r.text)

# open txt file containing all URLs for movies to strip
with open("websites.txt", "r") as f:
    for line in f:
        if line.find("https") != -1:
            r = requests.get(line)
            print("Done stripping")
        else:
            print("Now stripping " + line)





