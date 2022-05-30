import requests
import bs4



with open("websites.txt", "r'") as f:
    for line in f:
        if line.find("https"):
            r = requests.get(f.readline)
        else:
            print("Now stripping " + line)





